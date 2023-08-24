import { NextRequest, NextResponse } from "next/server";

export default function middleware (req: NextRequest) {
    console.log(req);
    /* return NextResponse.rewrite(new URL('/', req.url)) */
}

export const config = {
    matcher: '/privateroute'
}