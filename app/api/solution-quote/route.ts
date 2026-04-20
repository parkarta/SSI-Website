import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

// Microsoft 365: set SMTP_USER / SMTP_PASS (app password if MFA is on).
// Optional: SMTP_HOST (default smtp.office365.com), SMTP_PORT (587), QUOTE_EMAIL_TO.

const bodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(120).optional().default(""),
  locations: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(8000).optional().default(""),
})

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function POST(req: NextRequest) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 })
  }

  const { name, company, email, phone, locations, message } = parsed.data

  const to = process.env.QUOTE_EMAIL_TO ?? "hello@sensorytics.com"
  const host = process.env.SMTP_HOST ?? "smtp.office365.com"
  const port = Number(process.env.SMTP_PORT ?? "587")
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    return NextResponse.json(
      { error: "Server email is not configured (SMTP_USER / SMTP_PASS)." },
      { status: 503 },
    )
  }

  const textBody = [
    "New quote request (website form)",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone || "—"}`,
    `Number of locations: ${locations || "—"}`,
    "",
    "Message:",
    message || "—",
  ].join("\n")

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: user,
      to,
      replyTo: email,
      subject: `Website quote: ${company} — ${name}`,
      text: textBody,
      html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(
        textBody,
      )}</pre>`,
    })
  } catch (err) {
    console.error("solution-quote email error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
