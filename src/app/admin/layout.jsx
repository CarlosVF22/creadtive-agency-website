import "./globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "Administrador Creadtive Agency",
    description: "Welcome",
};
export default function RootLayout({ children }) {
    return (
        <html className="h-full bg-white" lang="en">
            <body className={`${barlow.className} h-full`}>{children}</body>
        </html>
    );
}
