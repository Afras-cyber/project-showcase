import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello World",
    status: 200,
  });
}

export async function POST(request) {
  try {
    console.log("Request received");
    console.log("Request body:", request.body);
    const { name, email, message } = await request.json();

    //validate the input
    if (!`${name}`.trim() || !`${email}`.trim() || !`${message}`.trim()) {
      return new NextResponse(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    // validate the email address
    if (!/\S+@\S+\.\S+/.test(email)) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
        }
      );
    }
    // need to apply sent email provider

    return NextResponse.json({
      message: "Message sent successfully",
      status: 200,
      data: { name, email, message },
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}
