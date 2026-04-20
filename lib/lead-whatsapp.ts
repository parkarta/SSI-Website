const WHATSAPP_E164 =
  process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "601114300120"

export function whatsappUrlForSummary(summary: string) {
  const max = 1500
  const body =
    summary.length > max ? `${summary.slice(0, max - 1)}…` : summary
  const params = new URLSearchParams({ text: body })
  return `https://wa.me/${WHATSAPP_E164}?${params.toString()}`
}
