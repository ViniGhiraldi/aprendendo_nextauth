import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest, {params}: {params: {slug: string}}) {
    return NextResponse.json({slug: params.slug});
}

export async function POST (request: Request, {params}: {params: {slug: string}}) {
    const slug = params.slug;
    const { teste } = await request.json();

    return NextResponse.json({slug, teste});
}