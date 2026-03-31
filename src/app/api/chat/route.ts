import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

// Initialize ZAI instance
let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null;

async function getZAI() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create();
  }
  return zaiInstance;
}

// Comprehensive system prompt with training data for S NEW ROOF
const SYSTEM_PROMPT = `You are Samuel's AI assistant for S NEW ROOF, a family-owned roofing company based in Santa Ana, Orange County, California. You are friendly, helpful, and knowledgeable about all roofing services.

## ABOUT S NEW ROOF
- Family-owned and operated since 2010
- Owner: Samuel (Santa Ana resident since 1995)
- Location: Santa Ana, Orange County, CA
- Phone: (714) 770-4756
- Service Area: All of Orange County including Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, Tustin, Orange, Westminster

## SERVICES OFFERED
1. **Roof Repair** - Leaks, damaged shingles, flashing issues, fast reliable repairs
2. **Roof Replacement** - Complete roof replacement with premium materials, 50-year warranties
3. **Emergency Leak Repair** - 24/7 emergency service, response within 1-2 hours
4. **Roof Inspection** - FREE comprehensive inspections with detailed reports
5. **Storm Damage Repair** - Insurance claim assistance, works with all major carriers
6. **Tile Roofing** - Clay and concrete tile installation/repair, perfect for California climate
7. **Shingle Roofing** - Asphalt shingles, affordable and reliable, various styles
8. **Gutter Services** - Installation, repair, cleaning

## RESPONSE GUIDELINES
- Be warm, friendly, and neighborly - use "we" and "our team"
- Always offer to help schedule a FREE inspection
- For emergencies, emphasize the 24/7 availability and provide the phone number
- Keep responses concise but helpful (2-4 sentences)
- Always end with a call to action

Remember: You represent a trusted local roofing company. Be helpful, professional, and always encourage homeowners to protect their homes with proper roof care.`;

// Smart fallback responses based on keywords
function getSmartFallback(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Emergency keywords
  if (lowerMessage.includes('emergency') || lowerMessage.includes('leak') || lowerMessage.includes('water') || lowerMessage.includes('flooding') || lowerMessage.includes('urgent')) {
    return `🚨 Emergency? Call us NOW at (714) 770-4756! Our 24/7 emergency team can be at your door within 1-2 hours. We handle emergency leaks, storm damage, and urgent roof repairs throughout Orange County. Don't wait - let us protect your home!`;
  }
  
  // Service area questions
  if (lowerMessage.includes('area') || lowerMessage.includes('serve') || lowerMessage.includes('location') || lowerMessage.includes('anaheim') || lowerMessage.includes('irvine') || lowerMessage.includes('santa ana') || lowerMessage.includes('garden grove') || lowerMessage.includes('orange county')) {
    return `We proudly serve ALL of Orange County! 📍 Our service area includes Santa Ana, Anaheim, Irvine, Garden Grove, Fullerton, Costa Mesa, Newport Beach, Huntington Beach, Tustin, Orange, Westminster, and surrounding communities. Call (714) 770-4756 to schedule your FREE inspection!`;
  }
  
  // Pricing questions
  if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('how much') || lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
    return `Great question! Roof costs vary based on size and materials. Asphalt shingles typically run $5-$10/sq ft, while tile roofs are $12-$20/sq ft. The best way to get an accurate price? Our FREE inspection! Call (714) 770-4756 to schedule yours today!`;
  }
  
  // Insurance questions
  if (lowerMessage.includes('insurance') || lowerMessage.includes('claim') || lowerMessage.includes('storm damage') || lowerMessage.includes('hail') || lowerMessage.includes('wind damage')) {
    return `Yes, we work with ALL major insurance carriers! 🏠 We handle the entire claims process - from documentation to meeting adjusters. No out-of-pocket expense until your claim is approved. Call (714) 770-4756 for a FREE storm damage inspection!`;
  }
  
  // Financing questions
  if (lowerMessage.includes('financing') || lowerMessage.includes('payment') || lowerMessage.includes('monthly') || lowerMessage.includes('afford')) {
    return `Yes, we offer flexible financing! 💳 0% interest for 18 months on approved credit, with payments starting at just $99/month. Quick approval in minutes! Call (714) 770-4756 to learn more and get started!`;
  }
  
  // Inspection/schedule
  if (lowerMessage.includes('inspection') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
    return `Let's get your FREE roof inspection scheduled! 📅 Our comprehensive inspections include detailed reports and photos. Call us at (714) 770-4756 or fill out our contact form. We'll find a time that works for you!`;
  }
  
  // Services
  if (lowerMessage.includes('service') || lowerMessage.includes('repair') || lowerMessage.includes('replace') || lowerMessage.includes('install') || lowerMessage.includes('roof')) {
    return `We offer complete roofing services! 🔧 From repairs and replacements to inspections and emergency services - we do it all. Call (714) 770-4756 for your FREE inspection and let our family protect yours!`;
  }
  
  // Tile roof
  if (lowerMessage.includes('tile') || lowerMessage.includes('clay') || lowerMessage.includes('concrete tile')) {
    return `Tile roofs are our specialty! 🏛️ We install and repair clay and concrete tile roofs - perfect for California's climate. With 50+ year lifespan and fire resistance, it's a smart investment. Call (714) 770-4756 for your FREE inspection!`;
  }
  
  // Warranty
  if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
    return `We stand behind our work! ✅ 10-Year Workmanship Guarantee (100% covered), 50-Year Manufacturer Warranty (transferable), and our Satisfaction Guarantee. Call (714) 770-4756 to learn more!`;
  }
  
  // Phone number request
  if (lowerMessage.includes('phone') || lowerMessage.includes('number') || lowerMessage.includes('call') || lowerMessage.includes('contact')) {
    return `Here's our contact info! 📞 Phone: (714) 770-4756 | Email: info@snewroof.com | Location: Santa Ana, Orange County, CA. We're available 24/7 for emergencies. Call us anytime!`;
  }
  
  // Default friendly response
  return `Thanks for reaching out! 👋 I'm here to help with your roofing questions. For immediate assistance or to schedule your FREE inspection, please call us at (714) 770-4756. We serve all of Orange County and are ready to help protect your home!`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    console.log('[Chat API] Received message:', message);
    
    try {
      const zai = await getZAI();
      console.log('[Chat API] ZAI instance created successfully');

      // Build messages array with conversation history
      const messages: Array<{ role: 'assistant' | 'user'; content: string }> = [
        {
          role: 'assistant',
          content: SYSTEM_PROMPT
        }
      ];

      // Add conversation history if provided
      if (history && Array.isArray(history)) {
        for (const msg of history.slice(-10)) {
          if (msg.role === 'user' || msg.role === 'assistant') {
            messages.push({
              role: msg.role as 'user' | 'assistant',
              content: msg.content
            });
          }
        }
      }

      // Add current user message
      messages.push({
        role: 'user',
        content: message
      });

      console.log('[Chat API] Sending request to AI...');

      // Get completion from AI
      const completion = await zai.chat.completions.create({
        messages: messages,
        thinking: { type: 'disabled' }
      });

      const aiResponse = completion.choices[0]?.message?.content;

      if (aiResponse) {
        console.log('[Chat API] AI response received successfully');
        return NextResponse.json({ response: aiResponse });
      }
    } catch (apiError) {
      console.log('[Chat API] API error, using smart fallback:', (apiError as Error).message);
    }

    // Use smart fallback based on message content
    const fallbackResponse = getSmartFallback(message);
    return NextResponse.json({ response: fallbackResponse });

  } catch (error) {
    console.error('[Chat API] Error:', error);
    
    // Return a helpful response based on the message
    const body = await request.clone().json().catch(() => ({ message: '' }));
    const fallbackResponse = getSmartFallback(body.message || '');
    return NextResponse.json({ response: fallbackResponse });
  }
}
