import type { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/api/install", "/api/uninstall"],
};

export async function middleware(req: NextRequest, res: NextResponse) {
  console.log("hello, middleware");
}
