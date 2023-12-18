import { NextResponse } from "next/server";
import db from "../../../libs/prisma.js";

export async function GET() {
    const allCurrency = await db.currency.findMany();

    try {
        return NextResponse.json(
            { message: "Currency", allCurrency },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Server error", error },
            { status: 500 }
        );
    }
}
