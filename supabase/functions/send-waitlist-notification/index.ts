import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistNotificationRequest {
  name?: string;
  email: string;
  company?: string;
  interest_level: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, interest_level }: WaitlistNotificationRequest = await req.json();

    console.log("Sending waitlist notification for:", { name, email, company, interest_level });

    const emailResponse = await resend.emails.send({
      from: "AI GTM SAAS <onboarding@resend.dev>",
      to: ["tomzeev@gmail.com"],
      subject: "New Waitlist Signup!",
      html: `
        <h1>New Waitlist Signup!</h1>
        <p>Someone just joined your waitlist:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          ${name ? `<li><strong>Name:</strong> ${name}</li>` : ''}
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
          <li><strong>Interest Level:</strong> ${interest_level}/10</li>
        </ul>
        <p>Check your admin panel to see all waitlist entries!</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-waitlist-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);