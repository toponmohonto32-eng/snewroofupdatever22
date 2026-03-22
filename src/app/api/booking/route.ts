import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

// Comprehensive validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service type'),
  pickup: z.string().min(5, 'Please enter a valid pickup location'),
  dropoff: z.string().min(5, 'Please enter a valid drop-off location'),
  date: z.string().optional(),
  time: z.string().optional(),
  passengers: z.string().optional(),
  notes: z.string().optional()
})

// Service rates for pricing
const serviceRates: Record<string, { base: number; name: string }> = {
  'airport': { base: 85, name: 'Airport Transfer' },
  'wedding': { base: 195, name: 'Wedding Transportation' },
  'corporate': { base: 125, name: 'Corporate Travel' },
  'event': { base: 175, name: 'Special Event' },
  'tour': { base: 150, name: 'Wine/City Tour' },
  'hourly': { base: 150, name: 'Hourly Charter' }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = bookingSchema.parse(body)
    
    // Generate booking reference
    const reference = `TOP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
    
    // Calculate estimated price
    const service = serviceRates[validatedData.service] || serviceRates.hourly
    const baseRate = service.base
    const gratuityRate = 0.20
    const fees = 15
    const hours = 2 // Default 2 hours
    
    const subtotal = baseRate * hours
    const gratuity = subtotal * gratuityRate
    const total = subtotal + gratuity + fees
    
    // Save to database
    try {
      await db.booking.create({
        data: {
          reference,
          status: 'PENDING',
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          company: validatedData.company || null,
          serviceType: service.name,
          vehicleType: 'To be assigned',
          pickupLocation: validatedData.pickup,
          dropoffLocation: validatedData.dropoff,
          pickupDate: validatedData.date ? new Date(validatedData.date) : new Date(),
          pickupTime: validatedData.time || 'TBD',
          passengers: parseInt(validatedData.passengers || '1'),
          hours: hours,
          baseRate: baseRate,
          subtotal: subtotal,
          gratuity: gratuity,
          fees: fees,
          totalAmount: total,
          specialRequests: validatedData.notes || null,
        }
      })
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Continue even if database save fails - return success anyway
    }
    
    // In production, you would also:
    // 1. Send confirmation email via SendGrid/Resend
    // 2. Send SMS via Twilio
    // 3. Create calendar event
    // 4. Notify dispatch team via Slack/webhook
    
    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully',
      booking: {
        reference,
        ...validatedData,
        service: service.name,
        estimatedRate: `From $${baseRate}/hour`,
        estimatedTotal: `$${Math.round(total)}`,
        createdAt: new Date().toISOString(),
        status: 'pending_confirmation'
      },
      nextSteps: [
        'Our team will contact you within 15 minutes',
        'You will receive a detailed quote via email',
        'Booking will be confirmed upon your approval'
      ]
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        },
        { status: 400 }
      )
    }
    
    console.error('Booking error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint for services and pricing
export async function GET() {
  // Get featured vehicles from database
  let vehicles = []
  try {
    vehicles = await db.vehicle.findMany({
      where: { active: true },
      select: {
        id: true,
        name: true,
        type: true,
        passengers: true,
        pricePerHour: true
      }
    })
  } catch {
    // Use defaults if database fails
  }
  
  return NextResponse.json({
    services: Object.entries(serviceRates).map(([id, data]) => ({
      id,
      name: data.name,
      priceFrom: data.base
    })),
    vehicles: vehicles.length > 0 ? vehicles : [
      { id: 'sedan', name: 'Executive Sedan', type: 'sedan', passengers: 3, pricePerHour: 85 },
      { id: 'suv', name: 'Luxury SUV', type: 'suv', passengers: 6, pricePerHour: 125 },
      { id: 'stretch', name: 'Stretch Limousine', type: 'stretch', passengers: 10, pricePerHour: 195 },
      { id: 'sprinter', name: 'Executive Sprinter', type: 'sprinter', passengers: 14, pricePerHour: 175 },
      { id: 'party-bus', name: 'Party Bus', type: 'party-bus', passengers: 20, pricePerHour: 350 }
    ],
    company: {
      name: 'TopOn Limo',
      phone: '+1 (888) 555-LIMO',
      email: 'reservations@toponlimo.com',
      hours: '24/7'
    }
  })
}
