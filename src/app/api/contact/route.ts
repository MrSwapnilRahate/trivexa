import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, company, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "TRIVEXA Contact Form <onboarding@resend.dev>",
      to: "hello@trivexa.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #E1C564 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #050816; margin: 0; font-size: 24px;">New Inquiry Received</h1>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #050816; font-size: 18px; margin-top: 0;">Contact Details</h2>

              <div style="background: white; padding: 15px; border-left: 3px solid #D4AF37; margin-bottom: 15px;">
                <p style="margin: 8px 0; color: #333;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 8px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a></p>
                ${company ? `<p style="margin: 8px 0; color: #333;"><strong>Company:</strong> ${company}</p>` : ""}
                ${budget ? `<p style="margin: 8px 0; color: #333;"><strong>Budget Range:</strong> ${budget}</p>` : ""}
              </div>

              <h3 style="color: #050816; font-size: 16px; margin-top: 20px;">Project Details</h3>
              <div style="background: white; padding: 15px; border-left: 3px solid #D4AF37; white-space: pre-wrap; color: #555; line-height: 1.6;">
${message}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 13px; margin: 0;">
                <strong>Quick Actions:</strong>
                <a href="mailto:${email}?subject=Re:%20Your%20TRIVEXA%20Inquiry" style="color: #D4AF37; text-decoration: none; margin: 0 10px;">Reply to ${name}</a>
              </p>
              <p style="color: #999; font-size: 12px; margin: 10px 0 0 0;">
                Submission received at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error("Admin email error:", adminEmailResult.error);
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "TRIVEXA <onboarding@resend.dev>",
      to: email,
      subject: "We received your inquiry — TRIVEXA",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #E1C564 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #050816; margin: 0;">TRIVEXA</h1>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="color: #333; font-size: 16px;">Hi ${name},</p>

            <p style="color: #555; line-height: 1.6;">
              Thank you for reaching out to TRIVEXA! We've received your inquiry and appreciate your interest in working with us.
            </p>

            <p style="color: #555; line-height: 1.6;">
              Our team will review your project details and get back to you within <strong>24 hours</strong> with next steps and a customized proposal.
            </p>

            <div style="background: white; padding: 20px; border-left: 3px solid #D4AF37; margin: 20px 0; border-radius: 4px;">
              <p style="color: #666; margin: 0;"><strong>What happens next:</strong></p>
              <ul style="color: #555; margin: 10px 0; padding-left: 20px;">
                <li>Initial review of your project requirements</li>
                <li>Schedule a free 30-minute discovery call</li>
                <li>Receive a tailored proposal with timeline & pricing</li>
              </ul>
            </div>

            <p style="color: #555; line-height: 1.6;">
              Questions in the meantime? Feel free to reply to this email or reach out to <strong>hello@trivexa.com</strong>.
            </p>

            <p style="color: #555; margin-top: 30px;">Best regards,<br><strong>The TRIVEXA Team</strong></p>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              TRIVEXA — Engineering Premium Digital Experiences
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your submission. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact request" },
      { status: 500 }
    );
  }
}
