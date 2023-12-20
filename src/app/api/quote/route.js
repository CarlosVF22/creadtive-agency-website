import { NextResponse } from "next/server";
import db from "../../../libs/prisma.js";

export async function POST(req) {
    try {
        const body = await req.json();
        const { quote } = body;
        const { name, language, currency, products_in_quote } = quote;

        const base_path = "/quote/";

        const processedName = name.toLowerCase().replace(/ /g, "-");
        const urlPath = `${base_path}${processedName}`;

        const createdQuote = await db.quote.create({
            data: {
                name,
                url_path: urlPath, // Debes generar una URL única
                language_id: language,
                currency_id: currency,
                user_id: 1, // Supongamos que es el ID de un usuario existente
                // ... otros campos si es necesario
            },
        });

        for (const product of products_in_quote) {
            await db.quote_Product.create({
                data: {
                    quote_id: createdQuote.id,
                    product_id: product.id,
                    product_text: product.text,
                    product_price: product.product_price,
                    // product_price: ... si es necesario
                },
            });
        }
        return NextResponse.json(
            { message: "Cotización creada con éxito", quote: createdQuote },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error al crear la cotización", error: error.message },
            { status: 500 }
        );
    }
}

export async function GET(req) {
    const page = parseInt(req.nextUrl.searchParams.get("page")) || 1;
    const limit = parseInt(req.nextUrl.searchParams.get("limit")) || 4;
    const offset = (page - 1) * limit;
    try {
        const totalQuotes = await db.quote.count();
        const quotes = await db.quote.findMany({
            skip: offset,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(
            {
                message: "Consulta exitosa",
                quotes,
                total: totalQuotes, // Enviar el total de cotizaciones
                currentPage: page,
                totalPages: Math.ceil(totalQuotes / limit), // Enviar el total de páginas
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error en la consulta", error },
            { status: 500 }
        );
    }
}

export async function DELETE(req) {
    const id = parseInt(req.nextUrl.searchParams.get("id"));

    try {
        // Eliminar la cotización con el ID proporcionado
        const deleteQuote = await db.quote.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json(
            { message: "Cotización eliminada con exito", deleteQuote },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error al eliminar la cotización:", error);
        return NextResponse.json(
            { message: "Error al eliminar la cotización", deleteQuote },
            { status: 500 }
        );
    }
}
