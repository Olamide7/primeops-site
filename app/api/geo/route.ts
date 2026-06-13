import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const country =
    request.headers.get("x-country-code") ||
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-nf-country") ||
    "";

  return NextResponse.json({
    region: country.toUpperCase() === "NG" ? "ng" : "intl"
  });
}
