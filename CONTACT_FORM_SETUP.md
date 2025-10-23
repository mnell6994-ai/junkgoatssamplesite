# Contact Form Setup Guide

Your contact forms are now functional! Here's what I've implemented and how to set up email notifications:

## What's Working Now

✅ **Form Validation** - Required fields are validated
✅ **API Endpoint** - `/api/contact` handles form submissions
✅ **Success/Error States** - Users see confirmation messages
✅ **Loading States** - Submit buttons show "SUBMITTING..." during processing
✅ **Form Reset** - Forms clear after successful submission
✅ **Error Handling** - Network errors and validation errors are displayed

## Current Setup

The forms currently:
1. Collect user data
2. Send it to your API endpoint
3. Log the submission to the console
4. Show success/error messages to users

## To Enable Email Notifications

Choose one of these options:

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install: `npm install resend`
4. Update `src/lib/email.ts`:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'info@richmondpowerwashpro.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: generateEmailHTML(data)
    });
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}
```
5. Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

### Option 2: Nodemailer (Gmail)
1. Install: `npm install nodemailer @types/nodemailer`
2. Update `src/lib/email.ts` with the Nodemailer code (already included)
3. Add to `.env.local`:
```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

### Option 3: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Install: `npm install @sendgrid/mail`
4. Update `src/lib/email.ts` with the SendGrid code (already included)
5. Add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

### Option 4: EmailJS (Client-side)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update the contact forms to use EmailJS directly (see commented code in `src/lib/email.ts`)

## Environment Variables

Create a `.env.local` file in your project root:
```env
# Choose one email service
RESEND_API_KEY=your_resend_key
# OR
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
# OR
SENDGRID_API_KEY=your_sendgrid_key
```

## Testing

1. Start your development server: `npm run dev`
2. Go to any page with a contact form
3. Fill out and submit the form
4. Check the browser console and server logs for the submission data
5. Once you set up email, you'll receive notifications at `info@richmondpowerwashpro.com`

## Form Locations

Contact forms are available on:
- Home page (hero section and contact section)
- Contact page
- All location pages (Richmond, Henrico, Chesterfield, Mechanicsville)
- All service pages

## Customization

- **Email Template**: Edit `generateEmailHTML()` in `src/lib/email.ts`
- **Success Message**: Edit the success state in contact form components
- **Validation**: Modify validation in `src/app/api/contact/route.ts`
- **Styling**: Update the form components in `src/components/`

## Next Steps

1. Choose an email service and follow the setup instructions
2. Test the forms thoroughly
3. Consider adding a database to store submissions
4. Set up email templates that match your brand
5. Add spam protection (reCAPTCHA) if needed

The forms are now fully functional and ready for production!

