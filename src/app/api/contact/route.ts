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

    // Check if access key is set
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    console.log("🔑 Checking Web3Forms key:", accessKey ? "✅ Set" : "❌ Missing");

    if (!accessKey) {
      console.error("❌ NEXT_PUBLIC_WEB3FORMS_KEY is not set in environment");
      return NextResponse.json(
        { error: "Contact form is not configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY" },
        { status: 500 }
      );
    }

    // Prepare data for Web3Forms (using JSON)
    const web3formsData = {
      access_key: accessKey,
      name: name,
      email: email,
      company: company || "Not provided",
      budget: budget || "Not specified",
      message: message,
      from_name: "TRIVEXA Contact Form",
      subject: `New Inquiry from ${name}`,
    };

    console.log("📤 Sending to Web3Forms:", {
      name,
      email,
      company,
      budget,
      accessKeyLength: accessKey.length
    });

    // Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(web3formsData),
    });

    const result = await response.json();

    console.log("📨 Web3Forms Response:", {
      success: result.success,
      message: result.message,
      status: response.status,
    });

    if (!result.success) {
      console.error("❌ Web3Forms submission failed:", result);
      return NextResponse.json(
        { error: result.message || "Failed to submit form to Web3Forms" },
        { status: 500 }
      );
    }

    console.log("✅ Form submitted successfully to Web3Forms");

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
