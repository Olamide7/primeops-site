import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.PRIMEOPS_WEBHOOK_URL ?? "https://uthmantex87.app.n8n.cloud/webhook/audit-submission";

const allowedSources = new Set(["audit", "contact"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = {
      source: allowedSources.has(body.source) ? body.source : "contact",
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      phone: String(body.phone ?? ""),
      company: String(body.company ?? ""),
      serviceInterest: String(body.serviceInterest ?? ""),
      bottleneck: String(body.bottleneck ?? ""),
      budgetRange: String(body.budgetRange ?? ""),
      market: body.market === "ng" ? "ng" : "intl",
      message: String(body.message ?? ""),
      timestamp: String(body.timestamp ?? new Date().toISOString())
    };

    if (!payload.name || !payload.email) {
      return NextResponse.json({ error: "name and email are required" }, { status: 400 });
    }

    const webhook = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!webhook.ok) {
      return NextResponse.json({ error: "webhook rejected submission" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "invalid submission" }, { status: 400 });
  }
}
