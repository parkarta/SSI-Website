import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

// SMTP options:
// - Auth mode (default): set SMTP_USER / SMTP_PASS
// - Relay mode: set SMTP_RELAY_MODE=true and point SMTP_HOST/SMTP_PORT to your relay connector
// Optional: SMTP_FROM, QUOTE_EMAIL_TO.

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
  const relayMode = process.env.SMTP_RELAY_MODE === "true"
  const host = process.env.SMTP_HOST ?? "smtp.office365.com"
  const port = Number(process.env.SMTP_PORT ?? "587")
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM ?? user ?? "hello@sensorytics.com"

  if (!relayMode && (!user || !pass)) {
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

  const transporterConfig = {
    host,
    port,
    secure: port === 465,
    ...(relayMode
      ? {}
      : {
          requireTLS: port === 587,
          auth: { user: user as string, pass: pass as string },
        }),
  }

  const transporter = nodemailer.createTransport(transporterConfig)

  try {
    await transporter.sendMail({
      from,
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
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: `Failed to send email: ${message}` }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
