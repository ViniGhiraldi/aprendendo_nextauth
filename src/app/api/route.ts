import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    const token = req.cookies.get('token');

    console.log(req.cookies);

    return new Response ('Hello, NextJs!', {
        status: 200,
        headers: {'set-cookie': `eita=${token?.value}`}
    })
}

export async function POST (req: Request) {
    const { name } = await req.json();

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });

    const data = await res.json();

    return NextResponse.json(data);
}