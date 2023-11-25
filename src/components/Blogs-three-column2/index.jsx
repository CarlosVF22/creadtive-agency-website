/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlogsThreeColumn2 = ({ subBG, language }) => {
    return (
        <section
            className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}
        >
            <div className="container">
                <div className="sec-head custom-font text-center">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">
                        {language === "en" ? "Latest News" : "Noticias nuevas"}
                    </h6>
                    <Split>
                        <h3
                            className="wow words chars splitting"
                            data-splitting
                        >
                            {language === "en" ? "Our Blogs" : "Nuestro Blog"}
                        </h3>
                    </Split>
                    <span className="tbg">Blogs</span>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div
                            className="item list md-mb50 wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <div className="img">
                                <img src="/img/blog/1.png" alt="" />
                            </div>
                            <div className="cont">
                                <a className="date custom-font">
                                    <span>
                                        <i>06</i>{" "}
                                        {language === "en"
                                            ? "August"
                                            : "Agosto"}
                                    </span>
                                </a>

                                <div className="info custom-font">
                                    <span className="author">by / Admin</span>
                                    <span className="tag">Web</span>
                                </div>
                                <h6>
                                    <Link href="/blog-details/blog-details-light-1">
                                        {language === "en"
                                            ? "Measuring Digital Success: Your Website Guide"
                                            : "Medición del éxito digital: La guía de su sitio web"}
                                    </Link>
                                </h6>
                                <div className="btn-more custom-font">
                                    <Link href="/blog-details/blog-details-light-1">
                                        <a className="simple-btn">
                                            {language === "en"
                                                ? "Read More"
                                                : "Leer más"}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className="item list md-mb50 wow fadeInUp"
                            data-wow-delay=".5s"
                        >
                            <div className="img">
                                <img src="/img/blog/2.png" alt="" />
                            </div>
                            <div className="cont">
                                <a className="date custom-font">
                                    <span>
                                        <i>07</i>{" "}
                                        {language === "en"
                                            ? "October"
                                            : "Octubre"}
                                    </span>
                                </a>
                                <div className="info custom-font">
                                    <span className="author">by / Admin</span>
                                    <span className="tag">Social Media</span>
                                </div>
                                <h6>
                                    <Link href="/blog-details/blog-details-light-2">
                                        {language === "en"
                                            ? "Lights, Camera, Action: Tips for shooting social media video"
                                            : "Luces, cámara, acción: consejos para grabar vídeos"}
                                    </Link>
                                </h6>
                                <div className="btn-more custom-font">
                                    <Link href="/blog-details/blog-details-light-2">
                                        <a className="simple-btn">
                                            {language === "en"
                                                ? "Read More"
                                                : "Leer más"}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className="item list wow fadeInUp"
                            data-wow-delay=".8s"
                        >
                            <div className="img">
                                <img src="/img/blog/3.png" alt="" />
                            </div>
                            <div className="cont">
                                <a className="date custom-font">
                                    <span>
                                        <i>08</i>{" "}
                                        {language === "en"
                                            ? "November"
                                            : "Noviembre"}
                                    </span>
                                </a>
                                <div className="info custom-font">
                                    <span className="author">by / Admin</span>
                                    <span className="tag">Branding</span>
                                </div>
                                <h6>
                                    <Link href="/blog-details/blog-details-light-3">
                                        {language === "en"
                                            ? "Things you need to know to find a great Logo"
                                            : "Cosas que necesitas saber para encontrar un gran logotipo"}
                                    </Link>
                                </h6>
                                <div className="btn-more custom-font">
                                    <Link href="/blog-details/blog-details-light-3">
                                        <a className="simple-btn">
                                            {language === "en"
                                                ? "Read More"
                                                : "Leer más"}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsThreeColumn2;
