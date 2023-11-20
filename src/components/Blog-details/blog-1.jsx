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
                                                In the vast ocean of the
                                                internet, your website is your
                                                virtual ship. It’s a vessel
                                                through which you sail to reach
                                                your audience and achieve your
                                                goals, be it sharing knowledge,
                                                selling products, or connecting
                                                with like-minded individuals.
                                                But how do you know if your ship
                                                is on the right course and
                                                making progress? The answer lies
                                                in measurement. In this blog,
                                                we’ll dive into the fascinating
                                                world of website analytics and
                                                explore why measuring your
                                                website’s performance is
                                                essential.
                                            </p>

                                            <div>
                                                <h6>- Define Your Goals</h6>

                                                <p>
                                                    Before you start measuring,
                                                    you need to know what you’re
                                                    measuring for. What are your
                                                    website’s objectives? Are
                                                    you aiming to increase
                                                    sales, generate leads, boost
                                                    user engagement, or simply
                                                    spread awareness? Clearly
                                                    defined goals will guide
                                                    your measurement efforts.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>- Monitor Your Traffic</h6>

                                                <p>
                                                    Google Analytics is your
                                                    trusty compass in the
                                                    digital wilderness. It
                                                    tracks the number of
                                                    visitors to your website,
                                                    where they come from, and
                                                    how long they stay. This
                                                    data helps you understand
                                                    your audience and tailor
                                                    your content accordingly.
                                                </p>
                                            </div>

                                            <div>
                                                <h6>- Monitor Your Traffic</h6>

                                                <p>
                                                    Google Analytics is your
                                                    trusty compass in the
                                                    digital wilderness. It
                                                    tracks the number of
                                                    visitors to your website,
                                                    where they come from, and
                                                    how long they stay. This
                                                    data helps you understand
                                                    your audience and tailor
                                                    your content accordingly.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>- Assess User Behavior</h6>

                                                <p>
                                                    Understanding what users do
                                                    on your site is like having
                                                    a sonar system for the deep
                                                    sea. Analyze user behavior
                                                    to see which pages are most
                                                    popular, where visitors drop
                                                    off, and what actions they
                                                    take (e.g., signing up for a
                                                    newsletter or making a
                                                    purchase). This information
                                                    can reveal opportunities for
                                                    improvement.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>- Conversion Tracking</h6>

                                                <p>
                                                    Are your visitors taking the
                                                    desired actions on your
                                                    site? Whether it’s
                                                    completing a purchase or
                                                    filling out a contact form,
                                                    tracking conversions is
                                                    crucial. Tools like Google
                                                    Tag Manager can help you set
                                                    up conversion tracking
                                                    effortlessly.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>- Measure Engagement</h6>

                                                <p>
                                                    Engagement metrics, such as
                                                    bounce rate, time on page,
                                                    and social shares, indicate
                                                    how well your content
                                                    resonates with your
                                                    audience. High bounce rates
                                                    might signal that your
                                                    content needs adjustment,
                                                    while increased time on page
                                                    suggests your audience finds
                                                    your content valuable.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>- Mobile Performance</h6>

                                                <p>
                                                    With mobile devices being a
                                                    dominant force on the web,
                                                    it’s essential to measure
                                                    your site’s mobile
                                                    performance. Ensure your
                                                    site is responsive and loads
                                                    quickly on various devices.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>- SEO Performance</h6>

                                                <p>
                                                    Optimizing for search
                                                    engines is paramount. Track
                                                    your site’s search engine
                                                    rankings, organic traffic,
                                                    and the keywords driving
                                                    visitors to your site. Tools
                                                    like SEMrush or Moz can
                                                    provide valuable insights.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    - Security and Performance
                                                </h6>

                                                <p>
                                                    Website speed and security
                                                    are critical. Slow-loading
                                                    pages can deter visitors,
                                                    and security breaches can
                                                    damage your reputation.
                                                    Regularly monitor and
                                                    optimize these aspects of
                                                    your site.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>
                                                    - Social Media Integration
                                                </h6>

                                                <p>
                                                    Measure the impact of your
                                                    social media efforts. Track
                                                    referral traffic from social
                                                    platforms and monitor
                                                    engagement metrics like
                                                    likes, shares, and comments.
                                                </p>
                                            </div>
                                            <div>
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
                                                    In conclusion, measuring
                                                    your website’s performance
                                                    is not just about numbers;
                                                    it’s about understanding
                                                    your audience, optimizing
                                                    your content, and steering
                                                    your digital ship toward
                                                    success. Embrace the world
                                                    of web analytics as your
                                                    compass, and with each data
                                                    point, you’ll chart a course
                                                    towards a more effective and
                                                    impactful online presence.
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
                                    <a href="#0">Prev Post</a>
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
