import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

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

    // TODO: Implement email sending or store in database
    // Examples:
    // - Send email via SendGrid, Mailgun, AWS SES
    // - Store in Supabase, Firebase, or MongoDB
    // - Send to Slack channel

    console.log("Contact form submission:", {
      name,
      email,
      company,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // For now, return success response
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
