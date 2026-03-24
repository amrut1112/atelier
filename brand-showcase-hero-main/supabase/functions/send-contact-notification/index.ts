import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  created_at: string
}

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the authorization header from the request
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    )

    // Get the contact submission data from the request
    const { record }: { record: ContactSubmission } = await req.json()

    // Send email notification (you would integrate with an email service here)
    // For now, we'll just log it. In production, integrate with SendGrid, Resend, etc.
    console.log('New contact submission:', {
      id: record.id,
      name: record.name,
      email: record.email,
      phone: record.phone,
      message: record.message,
      submitted_at: record.created_at
    })

    // You can add email sending logic here
    // Example with Resend:
    /*
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com',
        to: ['admin@yourdomain.com'],
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Phone:</strong> ${record.phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${record.message.replace(/\n/g, '<br>')}</p>
          <p><strong>Submitted at:</strong> ${new Date(record.created_at).toLocaleString()}</p>
        `,
      }),
    })
    */

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error processing contact notification:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})