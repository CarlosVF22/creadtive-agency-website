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
                                <img src="/img/blog/2.png" alt="" />
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
                                                    ? "In today’s digital age, video content is king on social media platforms. Whether you’re promoting your business, sharing your passion, or just having fun, creating engaging videos can help you connect with your audience. To help you make the most of your social media video content, here are some creative tips and tricks."
                                                    : "En la era digital actual, el contenido de vídeo es el rey en las plataformas de redes sociales. Ya sea que esté promocionando su negocio, compartiendo su pasión o simplemente divirtiéndose, crear videos atractivos puede ayudarlo a conectarse con su audiencia. Para ayudarle a aprovechar al máximo el contenido de vídeo de sus redes sociales, aquí le ofrecemos algunos consejos y trucos creativos."}
                                            </p>

                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Plan Your Content"
                                                        : "- Planifica tu contenido"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Before hitting the record button, have a clear idea of what you want to convey in your video. Outline your key messages, decide on the style or tone you want to achieve, and plan any visual elements or props you’ll need. A well-thought-out plan will make the shooting process smoother."
                                                        : "Antes de darle al botón de grabar, ten una idea clara de lo que quieres transmitir en tu vídeo. Describe tus mensajes clave, decide el estilo o tono que deseas lograr y planifica los elementos visuales o accesorios que necesitarás. Un plan bien pensado hará que el proceso de rodaje sea más sencillo."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Choose the Right Equipment"
                                                        : "- Elija el equipo adecuado"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "You don’t need fancy gear to create great social media videos, but having the right equipment can make a significant difference. Consider investing in a good smartphone with a quality camera, a tripod to stabilize your shots, and external microphones for better audio."
                                                        : "No necesitas equipo sofisticado para crear excelentes videos para redes sociales, pero tener el equipo adecuado puede marcar una diferencia significativa. Considere invertir en un buen teléfono inteligente con una cámara de calidad, un trípode para estabilizar sus tomas y micrófonos externos para un mejor audio."}
                                                </p>
                                            </div>

                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Mind Your Lighting"
                                                        : "- Cuida tu iluminación"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Proper lighting is crucial for video quality. Shoot in natural light when possible, and if you’re indoors, position yourself facing a window or use soft, diffused lighting. Avoid shooting with your back to a strong light source, as this can create unflattering shadows."
                                                        : "La iluminación adecuada es crucial para la calidad del vídeo. Dispare con luz natural cuando sea posible y, si está en interiores, colóquese frente a una ventana o utilice una iluminación suave y difusa. Evite disparar de espaldas a una fuente de luz intensa, ya que esto puede crear sombras poco favorecedoras."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Get Creative with Angles"
                                                        : "- Ser creativo con ángulos"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Don’t be afraid to experiment with different camera angles. Try shooting from low angles for a dramatic effect or use overhead shots to show your workspace or process. Changing perspectives can add visual interest to your videos."
                                                        : "No tengas miedo de experimentar con diferentes ángulos de cámara. Intente disparar desde ángulos bajos para obtener un efecto dramático o utilice tomas aéreas para mostrar su espacio de trabajo o proceso. Cambiar las perspectivas puede agregar interés visual a tus videos."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Keep it Short and Sweet"
                                                        : "- Mantenlo corto y dulce"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Social media users have short attention spans, so aim for concise videos. Focus on delivering your message quickly and engagingly. If you have more to say, consider breaking it into a series of shorter videos."
                                                        : "Los usuarios de las redes sociales tienen períodos de atención cortos, así que busque videos concisos. Concéntrese en transmitir su mensaje de forma rápida y atractiva. Si tiene más que decir, considere dividirlo en una serie de videos más cortos."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Engage Your Audience"
                                                        : "- Involucre a su audiencia"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Encourage interaction with your video by asking questions, running polls, or including a call to action. Prompt your viewers to like, comment, share, or visit your website for more information."
                                                        : "Fomente la interacción con su video haciendo preguntas, realizando encuestas o incluyendo un llamado a la acción. Solicite a sus espectadores que den me gusta, comenten, compartan o visiten su sitio web para obtener más información."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Edit Thoughtfully"
                                                        : "- Editar cuidadosamente"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Editing is where you can really bring your video to life. Use video editing software to trim out unnecessary parts, add music or sound effects, and incorporate transitions or text overlays. Keep your edits smooth and seamless."
                                                        : "La edición es donde realmente puedes darle vida a tu video. Utilice software de edición de video para recortar partes innecesarias, agregar música o efectos de sonido e incorporar transiciones o superposiciones de texto. Mantenga sus ediciones fluidas y fluidas."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Consistency Is Key"
                                                        : "- La consistencia es clave"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "To build a loyal audience, maintain a consistent posting schedule. Whether it’s daily, weekly, or monthly, your audience will come to expect your content regularly."
                                                        : "Para crear una audiencia leal, mantenga un calendario de publicaciones constante. Ya sea diario, semanal o mensual, su audiencia esperará su contenido con regularidad."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Analyze and Adapt"
                                                        : "- Analizar y adaptar"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Pay attention to the performance of your videos. Most social media platforms provide analytics that can help you understand what’s working and what’s not. Use this data to refine your approach and cater to your audience’s preferences."
                                                        : "Presta atención al rendimiento de tus vídeos. La mayoría de las plataformas de redes sociales brindan análisis que pueden ayudarlo a comprender qué funciona y qué no. Utilice estos datos para perfeccionar su enfoque y satisfacer las preferencias de su audiencia."}
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    {language === "en"
                                                        ? "- Have Fun"
                                                        : "- Divertirse"}
                                                </h6>

                                                <p>
                                                    {language === "en"
                                                        ? "Lastly, remember to enjoy the process. Authenticity and enthusiasm are infectious, so let your passion shine through in your videos. Have fun experimenting with different styles and formats to see what resonates most with your audience."
                                                        : "Por último, recuerda disfrutar el proceso. La autenticidad y el entusiasmo son contagiosos, así que deja que tu pasión brille en tus videos. Diviértete experimentando con diferentes estilos y formatos para ver qué resuena más con tu audiencia."}
                                                </p>
                                            </div>
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
                                                        ? "In the world of social media, video content has the power to captivate and connect with viewers like no other medium. By following these tips and letting your creativity flow, you’ll be well on your way to producing engaging and shareable videos that make an impact on your social media presence."
                                                        : "En el mundo de las redes sociales, el contenido de vídeo tiene el poder de cautivar y conectar con los espectadores como ningún otro medio. Si sigue estos consejos y deja fluir su creatividad, estará bien encaminado para producir videos atractivos y compartibles que tengan un impacto en su presencia en las redes sociales."}
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
                                    <a href="/blog-details/blog-details-light-1">
                                        {language === "en"
                                            ? "Prev Post"
                                            : "Anterior Post"}
                                    </a>
                                </span>
                                <span className="icon">
                                    <Link href="/blog-details/blog-details-light-3">
                                        <i className="fas fa-th-large"></i>
                                    </Link>
                                </span>
                                <span className="text-right">
                                    <a href="/blog-details/blog-details-light-3">
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
