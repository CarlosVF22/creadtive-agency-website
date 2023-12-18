import { NextResponse } from "next/server";
import db from "../../../libs/prisma.js";

export async function GET() {
    const allLanguages = await db.language.findMany();

    try {
        return NextResponse.json(
            { message: "language", allLanguages },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Server error", error },
            { status: 500 }
        );
    }
}
