# Power Washing Website Template - Updated for Vercel Deployment

A professional, SEO-optimized website template for power washing and cleaning service businesses. Built with Next.js, Supabase, and Tailwind CSS.

## 🎯 **Template Features**

- ✅ **Professional Design** - Modern, clean, conversion-optimized layout
- ✅ **Mobile Responsive** - Looks great on all devices
- ✅ **SEO Optimized** - Built-in SEO best practices and meta tags
- ✅ **Contact Forms** - Lead generation with Supabase integration
- ✅ **Client Dashboard** - Each client gets their own management dashboard
- ✅ **Analytics Ready** - Google Analytics integration
- ✅ **Fast Loading** - Optimized for speed and performance
- ✅ **Customizable** - Easy to customize colors, content, and branding
- ✅ **Multi-Location Support** - Service area pages for different cities
- ✅ **Service Pages** - Individual pages for each service offered

## 🏗️ **Template Structure**

```
src/
├── app/
│   ├── page.tsx                 # Home page with hero, services, contact
│   ├── client-dashboard/        # Client management dashboard
│   ├── master-admin/            # Master admin for managing all sites
│   ├── new-client/              # Client onboarding wizard
│   ├── services/                # Individual service pages
│   │   ├── house-washing/
│   │   ├── deck-cleaning/
│   │   ├── concrete-cleaning/
│   │   ├── roof-cleaning/
│   │   ├── window-cleaning/
│   │   └── gutter-cleaning/
│   ├── contact/                 # Contact page
│   ├── faq/                     # FAQ page
│   └── [location]/              # Service area pages
├── components/
│   ├── header.tsx              # Site header with navigation
│   ├── footer.tsx              # Site footer
│   ├── contact-form-simple.tsx # Contact form component
│   ├── contact-form.tsx        # Advanced contact form
│   ├── trust-badges.tsx        # Trust indicators
│   ├── reviews-carousel.tsx    # Google reviews carousel
│   ├── services-section.tsx    # Services display section
│   └── ui/                     # Reusable UI components
└── lib/
    ├── supabase.ts             # Database connection
    ├── seo-reports.ts          # SEO reporting system
    ├── site-templates.ts       # Template system
    ├── multi-site-manager.ts   # Multi-site management
    └── deployment-automation.ts # Deployment automation
```

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Supabase account

### **Installation**

1. **Clone this template:**
   ```bash
   git clone https://github.com/yourusername/power-washing-template.git
   cd power-washing-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database:**
   - Create a new Supabase project
   - Run the SQL schema from `database/schema.sql`
   - Update environment variables with your Supabase credentials

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🎨 **Customization Guide**

### **Branding**
- **Colors**: Update in `tailwind.config.js` and component files
- **Logo**: Replace logo images in `public/images/`
- **Fonts**: Update font families in `tailwind.config.js`

### **Content**
- **Business Name**: Update throughout all page components
- **Contact Info**: Update phone, email, address in components
- **Services**: Modify service list and descriptions
- **About Text**: Customize company description
- **Hero Section**: Update main headline and call-to-action

### **Images**
- **Hero Image**: Replace `powerwashing deck.jpg`
- **Service Images**: Update service-specific images
- **Gallery**: Add client work photos
- **Team Photos**: Add team member photos

### **SEO**
- **Meta Tags**: Update in `app/layout.tsx`
- **Keywords**: Update throughout content
- **Descriptions**: Customize meta descriptions
- **Schema Markup**: Add structured data

## 📋 **Deployment Checklist**

- [ ] Update business name throughout site
- [ ] Replace logo with client's logo
- [ ] Update color scheme to match client's branding
- [ ] Customize hero section text and image
- [ ] Update services list and descriptions
- [ ] Replace placeholder images with client's photos
- [ ] Update contact information
- [ ] Customize about section
- [ ] Update SEO meta tags and keywords
- [ ] Set up client's Supabase project
- [ ] Configure contact form
- [ ] Test all functionality
- [ ] Deploy to production

## 🎯 **Available Templates**

This template can be customized for:

- **Power Washing** - House washing, deck cleaning, concrete cleaning
- **Window Cleaning** - Residential and commercial window cleaning
- **Landscaping** - Lawn care, tree services, garden design
- **Cleaning Services** - General cleaning, office cleaning
- **Home Services** - Any home improvement service

## 🔧 **Technical Stack**

- **Framework**: Next.js 14
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)
- **Analytics**: Google Analytics 4
- **Forms**: Supabase + custom components

## 📊 **Features Included**

### **Client Dashboard**
- Lead management and tracking
- SEO reports and analytics
- Performance metrics
- Content management
- Keyword tracking

### **Master Admin (Multi-Site)**
- Manage multiple client sites
- Deploy new client sites
- Cross-site analytics
- Bulk operations
- Revenue tracking

### **SEO & Analytics**
- Automated SEO reporting
- Google Analytics integration
- Performance monitoring
- Keyword tracking
- Lead conversion tracking

## 💰 **Business Model**

Perfect for:
- **Web Development Agencies** - Offer to cleaning service clients
- **Freelancers** - Quick deployment for local businesses
- **SaaS Platforms** - White-label website builder
- **Consultants** - Package with marketing services

## 📞 **Support**

For questions about using this template:
- Create an issue in this repository
- Check the documentation in `/docs`
- Review the customization guide above

## 📄 **License**

This template is available for commercial use. See LICENSE file for details.

---

**Template Version**: 1.0  
**Last Updated**: January 2024  
**Compatible With**: Next.js 14+, Supabase, Vercel

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## 📈 **Changelog**

### v1.0.0
- Initial release
- Complete power washing template
- Client dashboard system
- Master admin functionality
- SEO reporting system
- Multi-site management