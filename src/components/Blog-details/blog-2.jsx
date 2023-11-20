/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const BlogDetails = () => {
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
                                <img src="/img/blog/single.jpg" alt="" />
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
                                                In today’s digital age, video
                                                content is king on social media
                                                platforms. Whether you’re
                                                promoting your business, sharing
                                                your passion, or just having
                                                fun, creating engaging videos
                                                can help you connect with your
                                                audience. To help you make the
                                                most of your social media video
                                                content, here are some creative
                                                tips and tricks.
                                            </p>

                                            <div>
                                                <h6>- Plan Your Content</h6>

                                                <p>
                                                    Before hitting the record
                                                    button, have a clear idea of
                                                    what you want to convey in
                                                    your video. Outline your key
                                                    messages, decide on the
                                                    style or tone you want to
                                                    achieve, and plan any visual
                                                    elements or props you’ll
                                                    need. A well-thought-out
                                                    plan will make the shooting
                                                    process smoother.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    - Choose the Right Equipment
                                                </h6>

                                                <p>
                                                    You don’t need fancy gear to
                                                    create great social media
                                                    videos, but having the right
                                                    equipment can make a
                                                    significant difference.
                                                    Consider investing in a good
                                                    smartphone with a quality
                                                    camera, a tripod to
                                                    stabilize your shots, and
                                                    external microphones for
                                                    better audio.
                                                </p>
                                            </div>

                                            <div>
                                                <h6>- Mind Your Lighting</h6>

                                                <p>
                                                    Proper lighting is crucial
                                                    for video quality. Shoot in
                                                    natural light when possible,
                                                    and if you’re indoors,
                                                    position yourself facing a
                                                    window or use soft, diffused
                                                    lighting. Avoid shooting
                                                    with your back to a strong
                                                    light source, as this can
                                                    create unflattering shadows.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    - Get Creative with Angles
                                                </h6>

                                                <p>
                                                    Don’t be afraid to
                                                    experiment with different
                                                    camera angles. Try shooting
                                                    from low angles for a
                                                    dramatic effect or use
                                                    overhead shots to show your
                                                    workspace or process.
                                                    Changing perspectives can
                                                    add visual interest to your
                                                    videos.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    - Keep it Short and Sweet
                                                </h6>

                                                <p>
                                                    Social media users have
                                                    short attention spans, so
                                                    aim for concise videos.
                                                    Focus on delivering your
                                                    message quickly and
                                                    engagingly. If you have more
                                                    to say, consider breaking it
                                                    into a series of shorter
                                                    videos.
                                                </p>
                                            </div>
                                            <div>
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
                                            </div>
                                            <div>
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
                                            </div>
                                            <div>
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
                                            </div>
                                            <div>
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
                                            </div>
                                            <div>
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
                                                    In the world of social
                                                    media, video content has the
                                                    power to captivate and
                                                    connect with viewers like no
                                                    other medium. By following
                                                    these tips and letting your
                                                    creativity flow, you’ll be
                                                    well on your way to
                                                    producing engaging and
                                                    shareable videos that make
                                                    an impact on your social
                                                    media presence.
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
                                                        <i className="fab fa-twitter"></i>
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
                                        <div className="author">
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
                                                    {/* <a href="#0">
                                                        <i className="fab fa-behance"></i>
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pagination">
                                <span>
                                    <a href="/blog-details/blog-details-light-1">
                                        Prev Post
                                    </a>
                                </span>
                                <span className="icon">
                                    <Link href="/blog-details/blog-details-light-3">
                                        <a>
                                            <i className="fas fa-th-large"></i>
                                        </a>
                                    </Link>
                                </span>
                                <span className="text-right">
                                    <a href="/blog-details/blog-details-light-3">
                                        Next Post
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
                                                                placeholder="Your Comment"
                                                                name="comment"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Field
                                                                type="text"
                                                                placeholder="Your Name"
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
                                                                placeholder="Your Email"
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
                                                                    Submit
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
