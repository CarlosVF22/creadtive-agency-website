import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    try {
        return NextResponse.json(
            { message: "creating quote", body },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Server error", error },
            { status: 500 }
        );
    }
}
