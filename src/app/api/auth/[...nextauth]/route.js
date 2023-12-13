import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../libs/prisma.js";
import bcrypt from "bcrypt";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "*****",
                },
            },
            async authorize(credentials, req) {
                try {
                    const userFound = await db.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    if (!userFound) throw new Error("No user found");

                    if (
                        userFound &&
                        bcrypt.compareSync(
                            credentials.password,
                            userFound.password
                        )
                    ) {
                        return {
                            id: userFound.id,
                            name: userFound.username,
                            email: userFound.email,
                        }; // Devuelve el usuario si la contraseña es correcta
                    } else {
                        throw new Error("Credenciales incorrectas"); // Lanza un error si la contraseña es incorrecta
                    }
                } catch (error) {
                    console.error(error);
                }
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
