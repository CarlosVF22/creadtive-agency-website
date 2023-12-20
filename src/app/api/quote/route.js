import { NextResponse } from "next/server";
import db from "../../../libs/prisma.js";

export async function POST(req) {
    try {
        const body = await req.json();
        const { quote } = body;
        const {
            name,
            language,
            currency,
            products_in_quote,
            introductory_text,
            conclusion_text,
        } = quote;

        const base_path = "/quote/";

        const processedName = name.toLowerCase().replace(/ /g, "-");
        const urlPath = `${base_path}${processedName}`;
        const price = products_in_quote.reduce(
            (sum, product) => sum + product.product_price,
            0
        );

        const createdQuote = await db.quote.create({
            data: {
                name,
                url_path: urlPath, // Debes generar una URL única
                language_id: language,
                currency_id: currency,
                user_id: 1, // Supongamos que es el ID de un usuario existente
                introductory_text,
                conclusion_text,
                price,
            },
        });

        for (const product of products_in_quote) {
            await db.quote_Product.create({
                data: {
                    quote_id: createdQuote.id,
                    product_id: product.id,
                    product_text: product.text,
                    product_price: product.product_price,
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

export async function PUT(req) {
    try {
        // Parsea el ID de la cotización de la URL
        const id = parseInt(req.nextUrl.searchParams.get("id"));

        // Parsea el cuerpo de la solicitud para obtener los datos actualizados
        const body = await req.json();
        const {
            name,
            language,
            currency,
            products_in_quote,
            introductory_text,
            conclusion_text,
        } = body;
        const price = products_in_quote.reduce(
            (sum, product) => sum + product.product_price,
            0
        );

        // Actualiza la cotización en la base de datos
        const updatedQuote = await db.quote.update({
            where: { id },
            data: {
                name,
                language_id: language,
                currency_id: currency,
                introductory_text,
                conclusion_text,
                price,
                // Aquí puedes agregar más campos para actualizar si es necesario
            },
        });

        const currentProducts = await db.quote_Product.findMany({
            where: { quote_id: id },
        });

        for (const product of products_in_quote) {
            // Verificar si el producto ya está asociado con la cotización
            const existingProduct = currentProducts.find(
                (p) => p.product_id === product.id
            );

            if (existingProduct) {
                // Actualizar el producto existente
                await db.quote_Product.update({
                    where: { id: existingProduct.id },
                    data: {
                        product_text: product.text,
                        product_price: product.product_price,
                    },
                });
            } else {
                // Crear un nuevo producto asociado con la cotización
                await db.quote_Product.create({
                    data: {
                        quote_id: id,
                        product_id: product.id,
                        product_text: product.text,
                        product_price: product.product_price,
                    },
                });
            }
        }

        const newProductIds = products_in_quote.map((p) => p.id);
        const productsToDelete = currentProducts.filter(
            (p) => !newProductIds.includes(p.product_id)
        );

        for (const productToDelete of productsToDelete) {
            await db.quote_Product.delete({
                where: { id: productToDelete.id },
            });
        }

        return NextResponse.json(
            {
                message: "Cotización actualizada con éxito",
                quote: updatedQuote,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error al actualizar la cotización:", error);
        return NextResponse.json(
            {
                message: "Error al actualizar la cotización",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
