# Supabase Contact Form Integration

## Step 1: Set up Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once created, go to Settings > API
3. Copy your Project URL and anon/public key

## Step 2: Install Supabase

```bash
npm install @supabase/supabase-js
```

## Step 3: Environment Variables

Create/update `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Step 4: Database Setup

In your Supabase dashboard, go to SQL Editor and run:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT,
  property_size TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'cancelled'))
);

-- Create an index for better performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for form submissions)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to read (for admin dashboard)
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

## Step 5: Install Supabase

```bash
npm install @supabase/supabase-js
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to any contact form and submit it
3. Check your Supabase dashboard > Table Editor > contact_submissions
4. You should see the new submission!

## Step 7: Admin Dashboard

I've created an admin dashboard at `/admin` where you can:
- View all form submissions
- Update submission status (new, contacted, completed, cancelled)
- See submission details and contact information

## Step 8: Email Notifications (Optional)

You can still set up email notifications using the existing email service options:

1. **Supabase Edge Functions** (Recommended for Supabase users)
2. **Resend** (Easy setup)
3. **SendGrid** (Professional)
4. **Nodemailer** (Gmail)

## Step 9: Real-time Updates (Optional)

Supabase supports real-time subscriptions. You can add real-time updates to the admin dashboard:

```typescript
// In your admin dashboard component
useEffect(() => {
  const subscription = supabase
    .channel('contact_submissions')
    .on('postgres_changes', 
      { event: 'INSERT', schema: 'public', table: 'contact_submissions' },
      (payload) => {
        setSubmissions(prev => [payload.new, ...prev]);
      }
    )
    .subscribe();

  return () => subscription.unsubscribe();
}, []);
```

## Benefits of Using Supabase

✅ **Database Storage** - All submissions are safely stored
✅ **Real-time Updates** - See new submissions instantly
✅ **Admin Dashboard** - Manage submissions easily
✅ **Scalable** - Handles high traffic
✅ **Secure** - Built-in security and authentication
✅ **Free Tier** - Generous free usage limits
✅ **Email Integration** - Can trigger emails on new submissions
✅ **Analytics** - Track submission trends

## Next Steps

1. Set up your Supabase project
2. Run the SQL commands to create the table
3. Add your environment variables
4. Test the forms
5. Set up email notifications (optional)
6. Customize the admin dashboard as needed

Your contact forms will now be fully functional with database storage!
