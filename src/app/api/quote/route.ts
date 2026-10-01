import { NextRequest, NextResponse } from "next/server";

/**
 * ─── QUOTE ENQUIRY API ROUTE ───────────────────────────────────────────────
 *
 * This route handles POST requests from the quote form.
 * To make it functional, connect one of the integration options below:
 *
 * ── Option 1: Email via Resend ─────────────────────────────────────────────
 *   npm install resend
 *   Set RESEND_API_KEY in .env.local
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ ... });
 *
 * ── Option 2: Email via Nodemailer (SMTP) ──────────────────────────────────
 *   npm install nodemailer @types/nodemailer
 *   Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local
 *
 * ── Option 3: WhatsApp via Twilio ─────────────────────────────────────────
 *   Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM in .env.local
 *
 * ── Option 4: Google Sheets via Google API ────────────────────────────────
 *   Use googleapis npm package + service account
 *
 * ── Required Environment Variables ────────────────────────────────────────
 * (Add these to .env.local)
 *   RESEND_API_KEY=          # If using Resend
 *   CONTACT_EMAIL=Jahangir.construction85@gmail.com
 *   SMTP_HOST=               # If using SMTP
 *   SMTP_PORT=               # If using SMTP
 *   SMTP_USER=               # If using SMTP
 *   SMTP_PASS=               # If using SMTP
 * ──────────────────────────────────────────────────────────────────────────
 */

interface QuoteFormData {
  name: string;
  mobile: string;
  location: string;
  projectType: string;
  budget: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteFormData = await request.json();

    // Basic server-side validation
    if (!body.name || !body.mobile || !body.location || !body.projectType || !body.message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Mobile number validation
    const cleanMobile = body.mobile.replace(/\s|-/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return NextResponse.json(
        { error: "Invalid mobile number." },
        { status: 400 }
      );
    }

    // ── CONNECT YOUR EMAIL / CRM INTEGRATION HERE ──────────────────────────
    //
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@jahangirconstruction.com",
    //   to: process.env.CONTACT_EMAIL ?? "Jahangir.construction85@gmail.com",
    //   subject: `New Quote Enquiry from ${body.name}`,
    //   html: `
    //     <h2>New Construction Enquiry</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Mobile:</strong> ${body.mobile}</p>
    //     <p><strong>Location:</strong> ${body.location}</p>
    //     <p><strong>Project Type:</strong> ${body.projectType}</p>
    //     <p><strong>Budget:</strong> ${body.budget || "Not specified"}</p>
    //     <p><strong>Requirement:</strong> ${body.message}</p>
    //   `,
    // });
    //
    // ── END INTEGRATION ────────────────────────────────────────────────────

    // Log to console for development (remove in production)
    if (process.env.NODE_ENV === "development") {
      console.log("[Quote Enquiry]", {
        name: body.name,
        mobile: body.mobile,
        location: body.location,
        projectType: body.projectType,
        budget: body.budget,
        message: body.message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Quote API Error]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
