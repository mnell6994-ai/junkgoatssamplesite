#!/bin/bash

# Power Washing Template Deployment Script
# This script helps you deploy the power washing template for new clients

echo "🚀 Power Washing Template Deployment Script"
echo "=========================================="

# Get client information
read -p "Client Business Name: " CLIENT_NAME
read -p "Client Domain (e.g., clientname.com): " CLIENT_DOMAIN
read -p "Client Email: " CLIENT_EMAIL
read -p "Client Phone: " CLIENT_PHONE
read -p "Client City: " CLIENT_CITY
read -p "Client State: " CLIENT_STATE

# Create project directory name
PROJECT_NAME=$(echo "$CLIENT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
PROJECT_DIR="../client-sites/$PROJECT_NAME"

echo ""
echo "📁 Creating project directory: $PROJECT_DIR"
mkdir -p "$PROJECT_DIR"

echo "📋 Copying template files..."
cp -r . "$PROJECT_DIR/"

echo "🔧 Updating client information..."

# Update package.json
sed -i.bak "s/Powerwashing Sample Site/$CLIENT_NAME/g" "$PROJECT_DIR/package.json"

# Update README
cat > "$PROJECT_DIR/README.md" << EOF
# $CLIENT_NAME Website

Professional power washing website for $CLIENT_NAME.

## Client Information
- **Business**: $CLIENT_NAME
- **Domain**: $CLIENT_DOMAIN
- **Email**: $CLIENT_EMAIL
- **Phone**: $CLIENT_PHONE
- **Location**: $CLIENT_CITY, $CLIENT_STATE

## Setup Instructions

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Set up environment variables:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

3. Start development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Deploy to production:
   \`\`\`bash
   npm run build
   \`\`\`
EOF

echo "✅ Template deployed successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Navigate to: cd $PROJECT_DIR"
echo "2. Install dependencies: npm install"
echo "3. Set up Supabase project for client"
echo "4. Update environment variables"
echo "5. Customize branding and content"
echo "6. Deploy to Vercel"
echo ""
echo "🎯 Client Dashboard will be available at: $CLIENT_DOMAIN/client-dashboard"
echo "📧 Contact form will send leads to: $CLIENT_EMAIL"

