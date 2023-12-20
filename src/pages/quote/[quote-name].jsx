import db from "../../libs/prisma.js";
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import Image from "next/image.js";
import appData from "../../data/app.json";
import LightTheme from "../../layouts/Light";
import { useLanguage } from "../../common/languageContext";
import axios from "axios";

export default function QuotePage({ quote }) {
    const { language, toggleLanguage } = useLanguage();
    const messageRef = React.useRef(null);

    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
    return (
        <LightTheme>
            <Link href="/">
                <div className="logo logo-quote-container">
                    <div>
                        <Image
                            // ref={lr}
                            src={`${appData.lightLogo}`}
                            alt="Creadtive agency logo"
                            width={250}
                            height={70}
                        />
                    </div>
                </div>
            </Link>
            <section className="page-header blg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="title-quote-container text-center">
                                <h2>{quote.name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-pg single section-padding pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="post">
                                <div className="img">
                                    <img src="/img/blog/1.png" alt="" />
                                </div>
                                <div className="content pt-20">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <div className="cont">
                                                <p>
                                                    {language === "en"
                                                        ? "In the vast ocean of the internet, your website is your virtual ship. It’s a vessel through which you sail to reach your audience and achieve your goals, be it sharing knowledge, selling products, or connecting with like-minded individuals. But how do you know if your ship is on the right course and making progress? The answer lies in measurement. In this blog, we’ll dive into the fascinating world of website analytics and explore why measuring your website’s performance is essential."
                                                        : "En el vasto océano de Internet, su sitio web es su barco virtual. Es un barco a través del cual navegas para llegar a tu audiencia y lograr tus objetivos, ya sea compartir conocimientos, vender productos o conectarte con personas con ideas afines. Pero, ¿cómo saber si su barco está en el rumbo correcto y avanzando? La respuesta está en la medición. En este blog, nos sumergiremos en el fascinante mundo del análisis de sitios web y exploraremos por qué es esencial medir el rendimiento de su sitio web."}
                                                </p>

                                                {quote.Quote_Product.map(
                                                    (product) => {
                                                        return (
                                                            <div>
                                                                <h6>
                                                                    {quote
                                                                        .Language
                                                                        .acronym ===
                                                                    "en"
                                                                        ? product
                                                                              .Product
                                                                              .name_en
                                                                        : product
                                                                              .Product
                                                                              .name_es}
                                                                </h6>

                                                                <p>
                                                                    {
                                                                        product.product_text
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {quote
                                                                        .Language
                                                                        .acronym ===
                                                                    "en"
                                                                        ? `Price: ${product.product_price}`
                                                                        : `Precio: ${product.product_price}`}
                                                                </p>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                                <div className="quotes text-center">
                                                    <p>
                                                        {language === "en"
                                                            ? "In conclusion, measuring your website’s performance is not just about numbers; it’s about understanding your audience, optimizing your content, and steering your digital ship toward success. Embrace the world of web analytics as your compass, and with each data point, you’ll chart a course towards a more effective and impactful online presence."
                                                            : "En conclusión, medir el rendimiento de su sitio web no se trata sólo de números; se trata de comprender a su audiencia, optimizar su contenido y dirigir su barco digital hacia el éxito. Adopte el mundo de la analítica web como su brújula y, con cada punto de datos, trazará el rumbo hacia una presencia en línea más efectiva e impactante."}
                                                    </p>
                                                </div>
                                                <div className="share-info">
                                                    <div className="social">
                                                        <a href="#0">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                        <a href="#0">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-form">
                                    <h5>
                                        {language === "en"
                                            ? "Contact me :"
                                            : "Contactanos: "}
                                    </h5>
                                    <div className="form">
                                        <Formik
                                            initialValues={{
                                                name: "",
                                                email: "",
                                                message: "",
                                            }}
                                            onSubmit={async (values) => {
                                                await sendMessage(100);
                                                // alert(JSON.stringify(values, null, 2));
                                                // show message
                                                try {
                                                    const body = {
                                                        name: values.name,
                                                        email: values.email,
                                                        message: values.message,
                                                    };
                                                    const res =
                                                        await axios.post(
                                                            "/api/contact",
                                                            body
                                                        );

                                                    // Verifica si la respuesta es exitosa
                                                    if (res.status === 200) {
                                                        messageRef.current.innerText =
                                                            "Your Message has been successfully sent. I will contact you soon.";
                                                        messageRef.current.style.backgroundColor =
                                                            "#B0FFAD"; // Fondo verde para éxito
                                                    } else {
                                                        throw new Error(
                                                            "Failed to send email"
                                                        );
                                                    }
                                                } catch (error) {
                                                    console.error(error);
                                                    messageRef.current.innerText =
                                                        "Error: Your message could not be sent."; // Mensaje de error
                                                    messageRef.current.style.backgroundColor =
                                                        "#FF8369"; // Fondo rojo para error
                                                }
                                                // Reset the values
                                                values.name = "";
                                                values.email = "";
                                                values.message = "";
                                                // clear message
                                                setTimeout(() => {
                                                    messageRef.current.innerText =
                                                        "";
                                                }, 3000);
                                            }}
                                        >
                                            {({ errors, touched }) => (
                                                <Form>
                                                    <div
                                                        className="messages"
                                                        ref={messageRef}
                                                    ></div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <Field
                                                                    as="textarea"
                                                                    placeholder={
                                                                        language ===
                                                                        "en"
                                                                            ? "Your Comment"
                                                                            : "Tu comentario"
                                                                    }
                                                                    name="comment"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <Field
                                                                    type="text"
                                                                    placeholder={
                                                                        language ===
                                                                        "en"
                                                                            ? "Your Name"
                                                                            : "Tu nombre"
                                                                    }
                                                                    name="name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <Field
                                                                    type="email"
                                                                    validate={
                                                                        validateEmail
                                                                    }
                                                                    placeholder={
                                                                        language ===
                                                                        "en"
                                                                            ? "Your email"
                                                                            : "Correo electrónico"
                                                                    }
                                                                    name="email"
                                                                />
                                                                {errors.email &&
                                                                    touched.email && (
                                                                        <div>
                                                                            {
                                                                                errors.email
                                                                            }
                                                                        </div>
                                                                    )}
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <button
                                                                    type="submit"
                                                                    className="btn-curve btn-color btn-lg"
                                                                >
                                                                    <span>
                                                                        {language ===
                                                                        "en"
                                                                            ? "Submit"
                                                                            : "Enviar"}
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LightTheme>
    );
}

export async function getStaticPaths() {
    // Obtener las rutas existentes
    const quotes = await db.quote.findMany({ select: { url_path: true } });
    const paths = quotes.map((quote) => ({
        params: { "quote-name": quote.url_path.substring(7) },
    }));

    return {
        paths,
        fallback: "blocking", // ISR activado
    };
}

export async function getStaticProps({ params }) {
    // Obtener los detalles de la cotización basado en el nombre de la cotización
    const quoteDetails = await db.quote.findFirst({
        where: { url_path: `/quote/${params["quote-name"]}` },
        include: {
            Language: true, // Incluir los detalles del idioma asociado
            Quote_Product: {
                include: {
                    Product: true, // Incluir los detalles del producto asociado
                },
            },
        },
    });

    // Si no se encuentra la cotización, retorna un estado 404
    if (!quoteDetails) {
        return { notFound: true };
    }

    // Convertir las fechas a cadenas serializables
    const serializedQuote = {
        ...quoteDetails,
        createdAt: quoteDetails.createdAt.toISOString(),
        updatedAt: quoteDetails.updatedAt.toISOString(),
        Language: {
            ...quoteDetails.Language,
            createdAt: quoteDetails.Language.createdAt.toISOString(),
            updatedAt: quoteDetails.Language.updatedAt.toISOString(),
            // Añade aquí la serialización de campos adicionales si es necesario
        },
        Quote_Product: quoteDetails.Quote_Product.map((quoteProduct) => ({
            ...quoteProduct,
            createdAt: quoteProduct.createdAt.toISOString(),
            updatedAt: quoteProduct.updatedAt.toISOString(),
            Product: {
                ...quoteProduct.Product,
                createdAt: quoteProduct.Product.createdAt.toISOString(),
                updatedAt: quoteProduct.Product.updatedAt.toISOString(),
                // Serializa otros campos de fecha del producto si es necesario
            },
        })),
    };

    return {
        props: {
            quote: serializedQuote, // Pasar la cotización serializada como prop
        },
        revalidate: 60, // ISR: Regenerar la página cada 60 segundos si es necesario
    };
}