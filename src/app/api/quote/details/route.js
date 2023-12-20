import { NextResponse } from "next/server";
import db from "../../../../libs/prisma";

export async function GET(req) {
    const id = parseInt(req.nextUrl.searchParams.get("id"));

    try {
        const quote = await db.quote.findUnique({
            where: {
                id,
            },
            include: {
                Language: true, // Incluir los detalles del idioma asociado
                Quote_Product: {
                    include: {
                        Product: true, // Incluir los detalles del producto asociado
                    },
                },
            },
        });
        if (!quote) {
            return NextResponse.json(
                { message: "Cotización no encontrada" },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: "Cotización consultada exitosamente", quote },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Consulta no exitosa" },
            { status: 500 }
        );
    }
}
