import { NextResponse } from "next/server";
import db from "../../../libs/prisma.js";

export async function GET() {
    const allProducts = await db.product.findMany();

    try {
        return NextResponse.json(
            { message: "Products", allProducts },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Server error", error },
            { status: 500 }
        );
    }
}
