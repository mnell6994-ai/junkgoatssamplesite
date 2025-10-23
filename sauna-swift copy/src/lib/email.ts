// Email utility functions
// You can integrate with various email services here

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  propertySize?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Option 1: Using Resend (recommended for production)
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'info@richmondpowerwashpro.com',
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   html: generateEmailHTML(data)
    // });

    // Option 2: Using Nodemailer
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: 'info@richmondpowerwashpro.com',
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   html: generateEmailHTML(data)
    // });

    // Option 3: Using SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'info@richmondpowerwashpro.com',
    //   from: 'noreply@yourdomain.com',
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   html: generateEmailHTML(data)
    // });

    // For now, just log the data (replace with actual email sending)
    console.log('Email would be sent with data:', data);
    return true;

  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

function generateEmailHTML(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Contact Form Submission</h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service || 'Not specified'}</p>
        <p><strong>Property Size:</strong> ${data.propertySize || 'Not specified'}</p>
        <p><strong>Message:</strong> ${data.message || 'No additional details'}</p>
      </div>
      <p style="color: #666; font-size: 14px;">
        This email was sent from your website contact form.
      </p>
    </div>
  `;
}

// Alternative: Simple email using EmailJS (client-side)
export function sendEmailWithEmailJS(data: ContactFormData): Promise<boolean> {
  return new Promise((resolve) => {
    // You would need to install emailjs-com and set up EmailJS
    // import emailjs from 'emailjs-com';
    
    // emailjs.send(
    //   'YOUR_SERVICE_ID',
    //   'YOUR_TEMPLATE_ID',
    //   {
    //     from_name: data.name,
    //     from_email: data.email,
    //     phone: data.phone,
    //     service: data.service,
    //     message: data.message,
    //     to_email: 'info@richmondpowerwashpro.com'
    //   },
    //   'YOUR_USER_ID'
    // ).then(() => {
    //   resolve(true);
    // }).catch(() => {
    //   resolve(false);
    // });

    // For now, just resolve true
    console.log('EmailJS would send:', data);
    resolve(true);
  });
}

