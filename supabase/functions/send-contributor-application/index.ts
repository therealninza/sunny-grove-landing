import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContributorApplication {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: ContributorApplication = await req.json();

    console.log("Received contributor application:", { name, email });

    // Send email to project owner
    const emailResponse = await resend.emails.send({
      from: "Frog Chilling Place <onboarding@resend.dev>",
      to: ["therealninza@gmail.com"],
      subject: "New Contributor Application",
      html: `
        <h1>New Contributor Application</h1>
        <p>Someone has applied to become a contributor to the Frog Chilling Place project.</p>
        
        <h2>Application Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        
        <p>Please reach out to them to discuss their potential contribution to the project.</p>
        
        <p>Best regards,<br>Frog Chilling Place System</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contributor-application function:", error);
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
