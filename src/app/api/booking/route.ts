import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = bookingSchema.parse(body)
    
    // In a real application, you would:
    // 1. Save to database (Prisma)
    // 2. Send confirmation email via SendGrid/Resend
    // 3. Send SMS confirmation via Twilio
    // 4. Create calendar event
    // 5. Send notification to dispatch team
    // 6. Process payment if deposit required
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Generate booking reference
    const bookingRef = `ELT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
    
    // Calculate estimated price based on service type
    const serviceRates: Record<string, number> = {
      'airport': 85,
      'wedding': 195,
      'corporate': 125,
      'event': 175,
      'tour': 150,
      'hourly': 150
    }
    
    const baseRate = serviceRates[validatedData.service] || 150
    
    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully',
      booking: {
        reference: bookingRef,
        ...validatedData,
        estimatedRate: `From $${baseRate}/hour`,
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
  return NextResponse.json({
    services: [
      { 
        id: 'airport', 
        name: 'Airport Transfer', 
        priceFrom: 85,
        description: 'Seamless airport transportation with flight tracking',
        features: ['Flight Tracking', 'Meet & Greet', 'Free Wait Time', 'Luggage Assistance']
      },
      { 
        id: 'wedding', 
        name: 'Wedding Transportation', 
        priceFrom: 195,
        description: 'Your perfect day, perfectly styled',
        features: ['Decorated Vehicles', 'Red Carpet Service', 'Champagne Toast', 'Multiple Stops']
      },
      { 
        id: 'corporate', 
        name: 'Corporate Travel', 
        priceFrom: 125,
        description: 'Executive transportation solutions',
        features: ['Wi-Fi Enabled', 'Confidential Service', 'Account Management', 'Monthly Billing']
      },
      { 
        id: 'event', 
        name: 'Special Events', 
        priceFrom: 175,
        description: 'Arrive in style',
        features: ['Custom Decorations', 'Multiple Vehicles', 'Hourly Charter', 'Group Coordination']
      },
      { 
        id: 'tour', 
        name: 'City/Wine Tours', 
        priceFrom: 150,
        description: 'Explore in luxury',
        features: ['Custom Itineraries', 'Wine Country Routes', 'Picnic Setup', 'Photography Stops']
      },
      { 
        id: 'hourly', 
        name: 'Hourly Charter', 
        priceFrom: 150,
        description: 'Flexible as-directed service',
        features: ['Flexible Routing', 'Multiple Stops', 'Wait & Return', 'Extended Hours']
      }
    ],
    vehicles: [
      { id: 'sedan', name: 'Executive Sedan', capacity: 3, priceFrom: 85 },
      { id: 'suv', name: 'Luxury SUV', capacity: 6, priceFrom: 125 },
      { id: 'stretch', name: 'Stretch Limousine', capacity: 10, priceFrom: 195 },
      { id: 'sprinter', name: 'Executive Sprinter', capacity: 14, priceFrom: 175 },
      { id: 'party-bus', name: 'Party Bus', capacity: 20, priceFrom: 350 }
    ],
    company: {
      name: 'Elite Limo',
      phone: '+1 (888) 555-LIMO',
      email: 'reservations@elitelimo.com',
      hours: '24/7'
    }
  })
}
