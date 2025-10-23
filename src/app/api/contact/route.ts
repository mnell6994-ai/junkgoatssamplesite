import { NextRequest, NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/contact-storage';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, propertySize } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Supabase database
    const dbResult = await saveContactSubmission({
      name,
      email,
      phone,
      service,
      message,
      property_size: propertySize
    });

    if (!dbResult.success) {
      console.error('Database save failed:', dbResult.error);
      return NextResponse.json(
        { error: 'Failed to save submission to database' },
        { status: 500 }
      );
    }

    // Send email notification (optional)
    try {
      await sendContactEmail({
        name,
        email,
        phone,
        service,
        message,
        propertySize
      });
    } catch (emailError) {
      console.warn('Email sending failed, but submission was saved to database:', emailError);
    }

    console.log('Contact form submission saved successfully:', {
      id: dbResult.data?.[0]?.id,
      name,
      email,
      phone,
      service,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will contact you soon.',
        submissionId: dbResult.data?.[0]?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
