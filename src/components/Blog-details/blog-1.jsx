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
                                <img src="/img/blog/1.png" alt="" />
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
                                                    ? "In the vast ocean of the internet, your website is your virtual ship. It’s a vessel through which you sail to reach your audience and achieve your goals, be it sharing knowledge, selling products, or connecting with like-minded individuals. But how do you know if your ship is on the right course and making progress? The answer lies in measurement. In this blog, we’ll dive into the fascinating world of website analytics and explore why measuring your website’s performance is essential."
                                                    : "En el vasto océano de Internet, su sitio web es su barco virtual. Es un barco a través del cual navegas para llegar a tu audiencia y lograr tus objetivos, ya sea compartir conocimientos, vender productos o conectarte con personas con ideas afines. Pero, ¿cómo saber si su barco está en el rumbo correcto y avanzando? La respuesta está en la medición. En este blog, nos sumergiremos en el fascinante mundo del análisis de sitios web y exploraremos por qué es esencial medir el rendimiento de su sitio web."}
                                            </p>

                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Define Your Goals"
                                                        : "- Defina sus objetivos"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Before you start measuring, you need to know what you’re measuring for. What are your website’s objectives? Are you aiming to increase sales, generate leads, boost user engagement, or simply spread awareness? Clearly defined goals will guide your measurement efforts."
                                                        : "Antes de comenzar a medir, necesita saber qué está midiendo. ¿Cuáles son los objetivos de su sitio web? ¿Su objetivo es aumentar las ventas, generar clientes potenciales, aumentar la participación de los usuarios o simplemente generar conciencia? Los objetivos claramente definidos guiarán sus esfuerzos de medición."}
                                                </p>
                                            </div>

                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Monitor Your Traffic"
                                                        : "- Controle su tráfico"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Google Analytics is your trusty compass in the digital wilderness. It tracks the number of visitors to your website, where they come from, and how long they stay. This data helps you understand your audience and tailor your content accordingly."
                                                        : "Google Analytics es su brújula confiable en el desierto digital. Realiza un seguimiento de la cantidad de visitantes a su sitio web, de dónde provienen y cuánto tiempo permanecen. Estos datos le ayudan a comprender a su audiencia y adaptar su contenido en consecuencia."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Assess User Behavior"
                                                        : "- Evaluar el comportamiento del usuario"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Understanding what users do on your site is like having a sonar system for the deep sea. Analyze user behavior to see which pages are most popular, where visitors drop off, and what actions they take (e.g., signing up for a newsletter or making a purchase). This information can reveal opportunities for improvement"
                                                        : "Comprender lo que hacen los usuarios en su sitio es como tener un sistema de sonar para las profundidades del mar. Analice el comportamiento del usuario para ver qué páginas son más populares, dónde abandonan los visitantes y qué acciones realizan (por ejemplo, suscribirse a un boletín informativo o realizar una compra). Esta información puede revelar oportunidades de mejora."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Conversion Tracking"
                                                        : "- Seguimiento de conversiones"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Are your visitors taking the desired actions on your site? Whether it’s completing a purchase or filling out a contact form, tracking conversions is crucial. Tools like Google Tag Manager can help you set up conversion tracking effortlessly"
                                                        : "¿Están sus visitantes realizando las acciones deseadas en su sitio? Ya sea al completar una compra o completar un formulario de contacto, el seguimiento de las conversiones es crucial. Herramientas como Google Tag Manager pueden ayudarle a configurar el seguimiento de conversiones sin esfuerzo"}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Measure Engagement"
                                                        : "- Medir el compromiso"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Engagement metrics, such as bounce rate, time on page, and social shares, indicate how well your content resonates with your audience. High bounce rates might signal that your content needs adjustment, while increased time on page suggests your audience finds your content valuable."
                                                        : "Las métricas de participación, como la tasa de rebote, el tiempo en la página y las acciones compartidas en redes sociales, indican qué tan bien resuena su contenido con su audiencia. Las altas tasas de rebote pueden indicar que su contenido necesita ajustes, mientras que un mayor tiempo en la página sugiere que su audiencia encuentra valioso su contenido."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Mobile Performance"
                                                        : "- Rendimiento móvil"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "With mobile devices being a dominant force on the web, it’s essential to measure your site’s mobile performance. Ensure your site is responsive and loads quickly on various devices."
                                                        : "Dado que los dispositivos móviles son una fuerza dominante en la web, es esencial medir el rendimiento móvil de su sitio. Asegúrese de que su sitio responda y se cargue rápidamente en varios dispositivos."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- SEO Performance"
                                                        : "- Excelente SEO"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Optimizing for search engines is paramount. Track your site’s search engine rankings, organic traffic, and the keywords driving visitors to your site. Tools like SEMrush or Moz can provide valuable insights."
                                                        : "La optimización para los motores de búsqueda es primordial. Realice un seguimiento de la clasificación de su sitio en los motores de búsqueda, el tráfico orgánico y las palabras clave que atraen visitantes a su sitio. Herramientas como SEMrush o Moz pueden proporcionar información valiosa."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Security and Performance"
                                                        : "- Seguridad y rendimiento"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Website speed and security are critical. Slow-loading pages can deter visitors, and security breaches can damage your reputation. Regularly monitor and optimize these aspects of your site."
                                                        : "La velocidad y la seguridad del sitio web son fundamentales. Las páginas de carga lenta pueden disuadir a los visitantes y las violaciones de seguridad pueden dañar su reputación. Supervise y optimice periódicamente estos aspectos de su sitio."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Social Media Integration"
                                                        : "- Integración en redes sociales"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Measure the impact of your social media efforts. Track referral traffic from social platforms and monitor engagement metrics like likes, shares, and comments."
                                                        : "Mida el impacto de sus esfuerzos en las redes sociales. Realice un seguimiento del tráfico de referencias desde plataformas sociales y supervise las métricas de participación, como me gusta, acciones y comentarios."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Stay Informed and Adapt"
                                                        : "- Manténgase informado y adaptese"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "The digital landscape is ever-changing. Stay informed about the latest trends and updates in web analytics. Be prepared to adapt your strategies based on the insights you gather. In conclusion, measuring your website’s performance is not just about numbers; it’s about understanding your audience, optimizing your content, and steering your digital ship toward success. Embrace the world of web analytics as your compass, and with each data point, you’ll chart a course towards a more effective and impactful online presence."
                                                        : "El panorama digital está en constante cambio. Manténgase informado sobre las últimas tendencias y actualizaciones en analítica web. Esté preparado para adaptar sus estrategias en función de los conocimientos que recopile. En conclusión, medir el rendimiento de su sitio web no se trata sólo de números; se trata de comprender a su audiencia, optimizar su contenido y dirigir su barco digital hacia el éxito. Adopte el mundo de la analítica web como su brújula y, con cada punto de datos, trazará el rumbo hacia una presencia en línea más efectiva e impactante."}
                                                </p>
                                            </div>

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
                                                        ? "In conclusion, measuring your website’s performance is not just about numbers; it’s about understanding your audience, optimizing your content, and steering your digital ship toward success. Embrace the world of web analytics as your compass, and with each data point, you’ll chart a course towards a more effective and impactful online presence."
                                                        : "En conclusión, medir el rendimiento de su sitio web no se trata sólo de números; se trata de comprender a su audiencia, optimizar su contenido y dirigir su barco digital hacia el éxito. Adopte el mundo de la analítica web como su brújula y, con cada punto de datos, trazará el rumbo hacia una presencia en línea más efectiva e impactante."}
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
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="pagination">
                                <span>
                                    <a href="#0">
                                        {language === "en"
                                            ? "Prev Post"
                                            : "Anterior Post"}
                                    </a>
                                </span>
                                <span className="icon">
                                    <Link href="/blog-details/blog-details-light-2">
                                        <a>
                                            <i className="fas fa-th-large"></i>
                                        </a>
                                    </Link>
                                </span>
                                <span className="text-right">
                                    <a href="/blog-details/blog-details-light-2">
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
