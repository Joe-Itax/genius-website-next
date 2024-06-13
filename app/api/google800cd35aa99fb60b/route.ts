import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    ` google-site-verification: google800cd35aa99fb60b.html`
  );
}
