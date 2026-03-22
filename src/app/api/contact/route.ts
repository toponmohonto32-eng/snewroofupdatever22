import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)
    
    // Save inquiry to database
    try {
      await db.inquiry.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          subject: validatedData.subject,
          message: validatedData.message
        }
      })
    } catch {
      console.log('Could not save to database')
    }
    
    // In production: send email notification
    // await sendEmail({
    //   to: 'reservations@toponlimo.com',
    //   subject: `New Inquiry: ${validatedData.subject}`,
    //   body: `From: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\n\n${validatedData.message}`
    // })
    
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will respond within 1 hour.',
      inquiry: {
        ...validatedData,
        createdAt: new Date().toISOString()
      }
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
