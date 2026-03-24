# Brand Showcase Hero - Backend Setup

This project uses Supabase as the backend service for database management, authentication, and serverless functions.

## Backend Features

- **Database**: PostgreSQL database hosted on Supabase
- **Contact Form**: Stores contact submissions with email notifications
- **Products Management**: Dynamic product catalog with categories
- **Blog System**: Content management for blog posts
- **Admin Dashboard**: Web interface for managing content
- **Edge Functions**: Serverless functions for notifications

## Database Schema

### Tables

1. **contact_submissions**
   - Stores contact form submissions
   - Fields: id, name, email, phone, message, created_at

2. **products**
   - Product catalog
   - Fields: id, name, description, image_url, category, price, featured, created_at, updated_at

3. **blog_posts**
   - Blog content management
   - Fields: id, title, excerpt, content, image_url, published_at, created_at, updated_at

## Setup Instructions

### 1. Install Supabase CLI

For Windows, download the CLI from: https://github.com/supabase/cli/releases

Or use npm (may have permission issues):
```bash
npm install -g supabase
```

### 2. Login to Supabase

```bash
supabase login
```

### 3. Link to your project

```bash
supabase link --project-ref boniuafxbgddcedizslj
```

### 4. Run Migrations

```bash
supabase db push
```

This will apply all migrations in the `supabase/migrations/` directory.

### 5. Deploy Edge Functions (Optional)

```bash
supabase functions deploy send-contact-notification
```

### 6. Start Local Development (Optional)

For local development with Docker:

```bash
supabase start
```

## Environment Variables

The following environment variables are already configured in `.env`:

- `VITE_SUPABASE_PROJECT_ID`: Your Supabase project ID
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Public API key for client-side operations
- `VITE_SUPABASE_URL`: Your Supabase project URL

## Admin Dashboard

Access the admin dashboard at `/admin` to:
- Add/edit/delete products
- Manage blog posts
- View contact submissions

## API Endpoints

### Products
- `GET /products` - Fetch all products
- `POST /products` - Add new product (admin only)

### Blog Posts
- `GET /blog_posts` - Fetch published blog posts
- `POST /blog_posts` - Add new blog post (admin only)

### Contact Submissions
- `POST /contact_submissions` - Submit contact form
- `GET /contact_submissions` - View submissions (admin only)

## Security

- Row Level Security (RLS) is enabled on all tables
- Public read access for products and blog posts
- Anonymous insert access for contact submissions
- Admin operations require authentication

## Development

### Running the Frontend

```bash
npm install
npm run dev
```

### Database Changes

When making database schema changes:
1. Create a new migration file in `supabase/migrations/`
2. Run `supabase db push` to apply changes
3. Update TypeScript types: `supabase gen types typescript --local > src/integrations/supabase/types.ts`

## Deployment

The project is configured for deployment on Netlify with the following features:
- Frontend deployed automatically
- Supabase backend is cloud-hosted
- Contact form submissions trigger email notifications via Edge Functions

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Edge Functions)
- **Deployment**: Netlify

## Support

For issues with the Supabase backend:
- Check the Supabase dashboard at https://supabase.com/dashboard
- View logs in the Edge Functions section
- Monitor database performance and usage
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
