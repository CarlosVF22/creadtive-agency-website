import MailService from "../../services/nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // Procesa la solicitud POST
        const data = req.body;

        const mailService = new MailService();
        const envelope = await mailService.sendMail(
            `${data.email}`,
            "Contact from web page",
            `<div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #1A237E;">Nuevo Mensaje de Contacto</h2>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Mensaje:</strong></p>
                <p>${data.message}</p>
                <br>
                <p>Este es un mensaje automático enviado desde el sitio web.</p>
            </div>`
        );

        // Envía una respuesta
        res.status(200).json({
            message: "Datos recibidos con éxito",
            contact_form_data: data,
            envelope: envelope,
        });
    } else {
        // Maneja cualquier solicitud que no sea POST
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}
