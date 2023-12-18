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
