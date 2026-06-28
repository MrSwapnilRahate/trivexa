import { NextResponse } from "next/server";

export async function GET() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  return NextResponse.json({
    message: "Test endpoint",
    hasAccessKey: !!accessKey,
    keyLength: accessKey ? accessKey.length : 0,
    keyStart: accessKey ? accessKey.substring(0, 10) + "..." : "NOT SET",
  });
}
