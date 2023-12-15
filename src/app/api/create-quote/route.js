import { NextResponse } from "next/server";

export function POST() {
    return NextResponse.json({ message: "creating quote" }, { status: 200 });
    // try {
    //     const textStates = req.body;
    //     // Aquí puedes procesar los datos recibidos en textStates
    //     // Por ejemplo, guardar en una base de datos, realizar alguna lógica, etc.

    //     // Envía una respuesta de éxito
    //     res.status(200).json({
    //         message: "Cotización creada exitosamente",
    //         data: textStates,
    //     });
    // } catch (error) {
    //     // Manejo de errores
    //     res.status(500).json({
    //         message: "Error al procesar la solicitud",
    //         error: error.message,
    //     });
    // }
}
