import React from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const ContactSection = ({ language }) => {
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
        <section id="contact" className="contact-sec section-padding">
            <div className="container">
                <div className="sec-head custom-font text-center">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">
                        {language === "en" ? "Get In Touch" : "Deja un mensaje"}
                    </h6>
                    <Split>
                        <h3
                            className="wow words chars splitting"
                            data-splitting
                        >
                            {language === "en" ? "Contact Us" : "Contactanos"}
                        </h3>
                    </Split>
                    <span className="tbg">
                        {language === "en" ? "Contact Us" : "Contactanos"}
                    </span>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="form wow fadeInUp" data-wow-delay=".5s">
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
                                        const res = await axios.post(
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
                                        messageRef.current.innerText = "";
                                    }, 3000);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form id="contact-form">
                                        <div
                                            className="messages"
                                            ref={messageRef}
                                        ></div>

                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <Field
                                                            id="form_name"
                                                            type="text"
                                                            name="name"
                                                            placeholder={
                                                                language ===
                                                                "en"
                                                                    ? "Name"
                                                                    : "Nombre"
                                                            }
                                                            required="required"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <Field
                                                            id="form_email"
                                                            type="email"
                                                            name="email"
                                                            validate={
                                                                validateEmail
                                                            }
                                                            placeholder={
                                                                language ===
                                                                "en"
                                                                    ? "Email"
                                                                    : "Correo electronico"
                                                            }
                                                            required="required"
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
                                                        <Field
                                                            as="textarea"
                                                            id="form_message"
                                                            name="message"
                                                            placeholder={
                                                                language ===
                                                                "en"
                                                                    ? "Message"
                                                                    : "Mensaje"
                                                            }
                                                            rows="4"
                                                            required="required"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center">
                                                        <button
                                                            type="submit"
                                                            className="simple-btn custom-font cursor-pointer"
                                                        >
                                                            <span>
                                                                {language ===
                                                                "en"
                                                                    ? "Send Message"
                                                                    : "Enviar Mensaje"}
                                                            </span>
                                                        </button>
                                                    </div>
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
        </section>
    );
};

export default ContactSection;
