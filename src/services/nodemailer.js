import nodemailer from "nodemailer";
import * as aws from "@aws-sdk/client-ses";
import { defaultProvider } from "@aws-sdk/credential-provider-node";

class MailService {
    constructor() {
        const ses = new aws.SES({
            region: "us-east-1",
            credentials: defaultProvider({}),
        });

        this.transporter = nodemailer.createTransport({
            SES: { ses, aws },
        });
    }

    async sendMail(to, subject, body) {
        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL_TRANSPORTER, // Debe ser el mismo correo que en el auth
            to: to,
            subject: subject,
            html: body, // Puede ser un texto simple o HTML
        };

        try {
            const res = await this.transporter.sendMail(mailOptions);
            const { envelope } = res;
            return envelope;
        } catch (error) {
            console.error("Error to send email:", error);
            throw new Error("Failed to send email", error);
        }
    }
}

export default MailService;
