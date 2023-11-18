export default function handler(req, res) {
    if (req.method === "POST") {
        // Procesa la solicitud POST
        const data = req.body;
        console.log(data);

        // Realiza las operaciones necesarias con 'data'
        // ...

        // Envía una respuesta
        res.status(200).json({
            message: "Datos recibidos con éxito",
            recibido: data,
        });
    } else {
        // Maneja cualquier solicitud que no sea POST
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}
