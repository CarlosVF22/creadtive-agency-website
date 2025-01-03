/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const BlogDetails = ({ language }) => {
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));
    return (
        <section className="blog-pg single section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="post">
                            <div className="img">
                                <img src="/img/blog/3.png" alt="" />
                            </div>
                            <div className="content pt-20">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="cont">
                                            {/* <div className="spacial">
                                                <p>
                                                    In the vast ocean of the
                                                    internet, your website is
                                                    your virtual ship. It’s a
                                                    vessel through which you
                                                    sail to reach your audience
                                                    and achieve your goals, be
                                                    it sharing knowledge,
                                                    selling products, or
                                                    connecting with like-minded
                                                    individuals. But how do you
                                                    know if your ship is on the
                                                    right course and making
                                                    progress? The answer lies in
                                                    measurement. In this blog,
                                                    we’ll dive into the
                                                    fascinating world of website
                                                    analytics and explore why
                                                    measuring your website’s
                                                    performance is essential.
                                                </p>
                                            </div> */}
                                            <p>
                                                {language === "en"
                                                    ? "Are you starting a new business or thinking about rebranding your existing one? One crucial element you can’t afford to overlook is your logo. Your logo is often the first impression customers have of your brand, so it’s essential to get it right. In this blog post, we’ll discuss five key things you need to know to find a great logo for your business."
                                                    : "¿Está iniciando un nuevo negocio o está pensando en cambiar el nombre del que ya tiene? Un elemento crucial que no puede pasar por alto es su logotipo. Su logotipo suele ser la primera impresión que los clientes tienen de su marca, por lo que es esencial hacerlo bien. En esta publicación de blog, analizaremos cinco cosas clave que necesita saber para encontrar un excelente logotipo para su empresa."}
                                            </p>

                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Understand Your Brand"
                                                        : "- Comprenda su marca"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Before you dive into the world of logo design, take the time to understand your brand thoroughly. Your logo should reflect your brand’s personality, values, and mission. Are you a playful and creative brand, or are you more serious and professional? Knowing your brand’s identity will help guide the design process."
                                                        : "Antes de sumergirte en el mundo del diseño de logotipos, tómate el tiempo para comprender a fondo tu marca. Su logotipo debe reflejar la personalidad, los valores y la misión de su marca. ¿Eres una marca divertida y creativa, o eres más seria y profesional? Conocer la identidad de su marca ayudará a guiar el proceso de diseño."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Simplicity Is Key"
                                                        : "- La simplicidad es clave"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "One of the most critical aspects of a successful logo is simplicity. Think about some of the most iconic logos in the world, like Apple or Nike. They are simple, memorable, and instantly recognizable. A cluttered or overly complex logo can confuse your audience and make it less memorable."
                                                        : "Uno de los aspectos más críticos de un logotipo exitoso es la simplicidad. Piense en algunos de los logotipos más emblemáticos del mundo, como Apple o Nike. Son simples, memorables y reconocibles al instante. Un logotipo desordenado o demasiado complejo puede confundir a su audiencia y hacerlo menos memorable."}
                                                </p>
                                            </div>

                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Versatility Matters"
                                                        : "- La versatilidad importa"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Your logo will appear on various platforms and materials, from business cards to billboards. It’s crucial to have a logo that works well in different sizes and formats. Test your logo design in various contexts to ensure it remains effective and recognizable."
                                                        : "Su logotipo aparecerá en diversas plataformas y materiales, desde tarjetas de presentación hasta vallas publicitarias. Es fundamental tener un logotipo que funcione bien en diferentes tamaños y formatos. Pruebe el diseño de su logotipo en varios contextos para asegurarse de que siga siendo efectivo y reconocible."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Professional Design Is Worth It"
                                                        : "- El diseño profesional lo vale"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "While DIY logo design tools are readily available, investing in a professional designer is often worth the cost. Experienced designers understand the nuances of logo design, including color psychology and typography, and can create a logo that truly represents your brand."
                                                        : "Si bien las herramientas de diseño de logotipos de bricolaje están disponibles, invertir en un diseñador profesional a menudo vale la pena. Los diseñadores experimentados comprenden los matices del diseño de logotipos, incluida la psicología del color y la tipografía, y pueden crear un logotipo que realmente represente su marca."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Your Logo Should Stand the Test of Time"
                                                        : "- Su logotipo debe resistir la prueba del tiempo"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Avoid trendy design elements that may quickly go out of style. Your logo should be timeless and able to withstand the changes and trends in your industry. A logo that stands the test of time can become a valuable asset for your brand."
                                                        : "Evite los elementos de diseño de moda que pueden pasar de moda rápidamente. Su logotipo debe ser atemporal y capaz de resistir los cambios y tendencias de su industria. Un logotipo que resiste el paso del tiempo puede convertirse en un activo valioso para su marca."}
                                                </p>
                                            </div>
                                            {/* <div>
                                                <h6>- Engage Your Audience</h6>

                                                <p>
                                                    Encourage interaction with
                                                    your video by asking
                                                    questions, running polls, or
                                                    including a call to action.
                                                    Prompt your viewers to like,
                                                    comment, share, or visit
                                                    your website for more
                                                    information.
                                                </p>
                                            </div> */}
                                            {/* <div>
                                                <h6>- Edit Thoughtfully</h6>

                                                <p>
                                                    Editing is where you can
                                                    really bring your video to
                                                    life. Use video editing
                                                    software to trim out
                                                    unnecessary parts, add music
                                                    or sound effects, and
                                                    incorporate transitions or
                                                    text overlays. Keep your
                                                    edits smooth and seamless.
                                                </p>
                                            </div> */}
                                            {/* <div>
                                                <h6>- Consistency Is Key</h6>

                                                <p>
                                                    To build a loyal audience,
                                                    maintain a consistent
                                                    posting schedule. Whether
                                                    it’s daily, weekly, or
                                                    monthly, your audience will
                                                    come to expect your content
                                                    regularly.
                                                </p>
                                            </div> */}
                                            {/* <div>
                                                <h6>- Analyze and Adapt</h6>

                                                <p>
                                                    Pay attention to the
                                                    performance of your videos.
                                                    Most social media platforms
                                                    provide analytics that can
                                                    help you understand what’s
                                                    working and what’s not. Use
                                                    this data to refine your
                                                    approach and cater to your
                                                    audience’s preferences.
                                                </p>
                                            </div> */}
                                            {/* <div>
                                                <h6>- Have Fun</h6>

                                                <p>
                                                    Lastly, remember to enjoy
                                                    the process. Authenticity
                                                    and enthusiasm are
                                                    infectious, so let your
                                                    passion shine through in
                                                    your videos. Have fun
                                                    experimenting with different
                                                    styles and formats to see
                                                    what resonates most with
                                                    your audience.
                                                </p>
                                            </div> */}
                                            {/* <div>
                                                <h6>
                                                    - Stay Informed and Adapt
                                                </h6>

                                                <p>
                                                    The digital landscape is
                                                    ever-changing. Stay informed
                                                    about the latest trends and
                                                    updates in web analytics. Be
                                                    prepared to adapt your
                                                    strategies based on the
                                                    insights you gather. In
                                                    conclusion, measuring your
                                                    website’s performance is not
                                                    just about numbers; it’s
                                                    about understanding your
                                                    audience, optimizing your
                                                    content, and steering your
                                                    digital ship toward success.
                                                    Embrace the world of web
                                                    analytics as your compass,
                                                    and with each data point,
                                                    you’ll chart a course
                                                    towards a more effective and
                                                    impactful online presence.
                                                </p>
                                            </div> */}

                                            {/* <ul>
                                                <li>
                                                    <span>01</span> Integer in
                                                    volutpat libero.
                                                </li>
                                                <li>
                                                    <span>02</span> Vivamus
                                                    maximus ultricies pulvinar.
                                                </li>
                                                <li>
                                                    <span>03</span> priorities
                                                    that will pop up in any
                                                    particular month.
                                                </li>
                                                <li>
                                                    <span>04</span> We all
                                                    intend to plan ahead.
                                                </li>
                                                <li>
                                                    <span>05</span> The main
                                                    component of a healthy env
                                                    for self esteem.
                                                </li>
                                            </ul> */}

                                            <div className="quotes text-center">
                                                <p>
                                                    {language === "en"
                                                        ? "In conclusion, finding a great logo for your business is a crucial step in establishing a strong brand identity. By understanding your brand, keeping the design simple and versatile, investing in professional design, and prioritizing timelessness, you’ll be well on your way to creating a logo that makes a lasting impact on your audience. Remember, your logo is more than just an image; it’s a representation of your brand’s values and identity."
                                                        : "En conclusión, encontrar un gran logotipo para su empresa es un paso crucial para establecer una identidad de marca sólida. Si comprende su marca, mantiene el diseño simple y versátil, invierte en diseño profesional y prioriza la atemporalidad, estará bien encaminado para crear un logotipo que tenga un impacto duradero en su audiencia. Recuerde, su logotipo es más que una simple imagen; es una representación de los valores y la identidad de su marca."}
                                                </p>
                                            </div>
                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-10">
                                                        <img
                                                            src="/img/blog/single.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-10">
                                                        <img
                                                            src="/img/blog/single.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <p>
                                                We all intend to plan ahead, but
                                                too often let the day-to-day
                                                minutia get in the way of making
                                                a calendar for the year. Sure,
                                                you can’t know every detail to
                                                anticipate. Heck, you can’t know
                                                half the priorities that will
                                                pop up in any particular month.
                                                But you can plan for big picture
                                                seasonality, busy-times, and
                                                events.
                                            </p> */}
                                            <div className="share-info">
                                                <div className="social">
                                                    <a href="#0">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a href="#0">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                    {/* <a href="#0">
                                                        <i className="fab fa-behance"></i>
                                                    </a> */}
                                                </div>
                                                {/* <div className="tags">
                                                    <a href="#0">Web</a>,
                                                    <a href="#0">Themeforest</a>
                                                    ,<a href="#0">ThemesCamp</a>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* <div className="author">
                                            <div className="author-img">
                                                <img
                                                    src="/img/blog/01.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="info">
                                                <h6>
                                                    <span>author :</span> Jorden
                                                    Griffin
                                                </h6>
                                                <p>
                                                    the main component of a
                                                    healthy environment for self
                                                    esteem is that it needs be
                                                    nurturing. The main compont
                                                    of a healthy environment.
                                                </p>
                                                <div className="social">
                                                    <a href="#0">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a href="#0">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="pagination">
                                <span>
                                    <a href="/blog-details/blog-details-light-2">
                                        {language === "en"
                                            ? "Prev Post"
                                            : "Anterior Post"}
                                    </a>
                                </span>
                                <span className="icon">
                                    <Link href="#">
                                        <i className="fas fa-th-large"></i>
                                    </Link>
                                </span>
                                <span className="text-right">
                                    <a href="#">
                                        {language === "en"
                                            ? "Next Post"
                                            : "Siguiente Post"}
                                    </a>
                                </span>
                            </div>

                            {/* <div className="comments-area">
                                <h5>Comments :</h5>
                                <div className="item">
                                    <div className="comment-img">
                                        <img src="/img/blog/01.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>
                                            Jorden Griffin -{" "}
                                            <span> 6 Aug 2022</span>
                                        </h6>
                                        <span className="replay">
                                            <a href="#0">
                                                Replay{" "}
                                                <i className="fas fa-reply"></i>
                                            </a>
                                        </span>
                                        <p>
                                            the main component of a healthy
                                            environment for self esteem is that
                                            it needs be nurturing. The main
                                            compont of a healthy environment.
                                        </p>
                                    </div>
                                </div>
                                <div className="item relped">
                                    <div className="comment-img">
                                        <img src="/img/blog/01.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>
                                            Jorden Griffin -{" "}
                                            <span> 6 Aug 2022</span>
                                        </h6>
                                        <span className="replay">
                                            <a href="#0">
                                                Replay{" "}
                                                <i className="fas fa-reply"></i>
                                            </a>
                                        </span>
                                        <p>
                                            the main component of a healthy
                                            environment for self esteem is that
                                            it needs be nurturing. The main
                                            compont of a healthy environment.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="comment-img">
                                        <img src="/img/blog/01.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>
                                            Jorden Griffin -{" "}
                                            <span> 6 Aug 2022</span>
                                        </h6>
                                        <span className="replay">
                                            <a href="#0">
                                                Replay{" "}
                                                <i className="fas fa-reply"></i>
                                            </a>
                                        </span>
                                        <p>
                                            the main component of a healthy
                                            environment for self esteem is that
                                            it needs be nurturing. The main
                                            compont of a healthy environment.
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                            <div className="comment-form">
                                <h5>Contact me :</h5>
                                <div className="form">
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            comment: "",
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
                                                messageRef.current.innerText =
                                                    "";
                                            }, 3000);
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form>
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
                                                            <button className="btn-curve btn-color btn-lg">
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
    );
};

export default BlogDetails;
