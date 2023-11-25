import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Split from "../Split";

const ContactWithMap = ({ theme = "dark", language }) => {
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
        <>
            <section className="contact section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form md-mb50">
                                <h4 className="extra-title mb-50">
                                    {language === "en"
                                        ? "Get In Touch."
                                        : "Ponte en contacto"}
                                </h4>

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
                                                <div className="form-group">
                                                    <Field
                                                        id="form_name"
                                                        type="text"
                                                        name="name"
                                                        placeholder={
                                                            language === "en"
                                                                ? "Name"
                                                                : "Nombre"
                                                        }
                                                        required="required"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        validate={validateEmail}
                                                        id="form_email"
                                                        type="email"
                                                        name="email"
                                                        placeholder={
                                                            language === "en"
                                                                ? "Email"
                                                                : "Correo electronico"
                                                        }
                                                        required="required"
                                                    />
                                                    {errors.email &&
                                                        touched.email && (
                                                            <div>
                                                                {errors.email}
                                                            </div>
                                                        )}
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        as="textarea"
                                                        id="form_message"
                                                        name="message"
                                                        placeholder={
                                                            language === "en"
                                                                ? "Message"
                                                                : "Mensaje"
                                                        }
                                                        rows="4"
                                                        required="required"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className={`btn-curve ${
                                                        theme === "dark"
                                                            ? "btn-lit"
                                                            : "btn-color"
                                                    } disabled`}
                                                >
                                                    <span>
                                                        {language === "en"
                                                            ? "Send Message"
                                                            : "Enviar mensaje"}
                                                    </span>
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="cont-info">
                                <h4 className="extra-title mb-50">
                                    {language === "en"
                                        ? "Contact Info."
                                        : "Información de contacto"}
                                </h4>
                                <Split>
                                    <h3
                                        className="custom-font wow"
                                        data-splitting
                                    >
                                        {language === "en" ? (
                                            <>Let&apos;s Talk.</>
                                        ) : (
                                            <>Hablanos.</>
                                        )}
                                    </h3>
                                </Split>
                                <div className="item mb-40">
                                    <h5>
                                        <a href="mailto:cevasquezf22@gmail.com?subject=Inquiry About Hiring&body=Hello, I would like to inquire about your services.">
                                            info@creadtiveagency.com
                                        </a>
                                    </h5>
                                    <h5>+4.930.705.5448</h5>
                                </div>
                                {/* <Split>
                                    <h3
                                        className="custom-font wow"
                                        data-splitting
                                    >
                                        Visit Us.
                                    </h3>
                                </Split>
                                <div className="item">
                                    <h6>
                                        295 Witting Streets Suite 666,
                                        <br />
                                        Melbourne, Australia
                                    </h6>
                                </div> */}
                                <div className="social mt-50">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    {/* <a href="#0" className="icon">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="map" id="ieatmaps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.687203718404!2d-0.14297520856388865!3d51.502466162777694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1644772966009!5m2!1sen!2seg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div> */}

            <footer className="footer-half sub-bg">
                <div className="container">
                    <div className="copyrights text-center mt-0">
                        <p>
                            © 2023 - creADtive media ❤️
                            <a href="#0">ThemesCamp</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ContactWithMap;
