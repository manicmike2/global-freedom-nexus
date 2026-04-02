import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return new Response(
      JSON.stringify({ error: 'Email service not configured' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  try {
    const { name, email, phone, type, interest, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, message' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const typeLabels: Record<string, string> = {
      individual: 'Individual / Family',
      attorney: 'Immigration Attorney',
      advisor: 'Wealth Advisor / Family Office',
      developer: 'Developer / Program Stakeholder',
      other: 'Other',
    }

    const interestLabels: Record<string, string> = {
      cbi: 'Citizenship by Investment',
      'golden-visa': 'Golden Visa / Residency',
      both: 'Both / Not Sure',
      'attorney-partnership': 'Attorney Partnership',
      'market-entry': 'U.S. Market Entry (for CBI firms)',
    }

    const htmlBody = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 28px; background-color: #ffffff;">
        <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: bold; color: #0d0f1a; margin: 0 0 16px;">
          New Contact Form Inquiry
        </h1>
        <p style="font-size: 14px; color: #55575d; line-height: 1.6; margin: 0 0 16px;">
          A new inquiry has been submitted on Global Freedom Capital.
        </p>
        <hr style="border: none; border-top: 1px solid hsl(40, 60%, 38%); margin: 24px 0; opacity: 0.3;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; padding: 12px 0 2px;">Name</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #0d0f1a; padding: 0 0 8px; line-height: 1.5;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; padding: 12px 0 2px;">Email</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #0d0f1a; padding: 0 0 8px; line-height: 1.5;">${escapeHtml(email)}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; padding: 12px 0 2px;">Phone</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #0d0f1a; padding: 0 0 8px; line-height: 1.5;">${escapeHtml(phone)}</td>
          </tr>` : ''}
          <tr>
            <td style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; padding: 12px 0 2px;">Enquiry Type</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #0d0f1a; padding: 0 0 8px; line-height: 1.5;">${escapeHtml(typeLabels[type] || type || '—')}</td>
          </tr>
          ${interest ? `
          <tr>
            <td style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; padding: 12px 0 2px;">Primary Interest</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #0d0f1a; padding: 0 0 8px; line-height: 1.5;">${escapeHtml(interestLabels[interest] || interest)}</td>
          </tr>` : ''}
          <tr>
            <td style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; padding: 12px 0 2px;">Message</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #0d0f1a; padding: 0 0 8px; line-height: 1.5;">${escapeHtml(message)}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid hsl(40, 60%, 38%); margin: 24px 0; opacity: 0.3;" />
        <p style="font-size: 12px; color: #999; margin: 24px 0 0;">
          This is an automated notification from Global Freedom Capital.
        </p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Global Freedom Capital <noreply@globalfreedomcapital.com>',
        to: ['contact@globalfreedomcapital.com'],
        subject: `New enquiry — ${name}`,
        html: htmlBody,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend API error:', data)
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: data }),
        { status: res.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Email sent successfully:', data)
    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Unexpected error:', err)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
