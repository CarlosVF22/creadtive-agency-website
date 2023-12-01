/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";
import Image from "next/image";

const Footer = ({ noSubBG }) => {
    return (
        <footer
            className={`footer-half ${
                noSubBG ? "" : "sub-bg"
            } section-padding pb-0`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cont">
                            <div className="logo">
                                <a href="#0">
                                    <Image
                                        width={250}
                                        height={70}
                                        src={`${appData.darkLogo}`}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="con-info custom-font">
                                <ul>
                                    <li>
                                        <span>Email : </span>{" "}
                                        info@creadtiveagency.com
                                    </li>

                                    <li>
                                        <span>Phone : </span> (+1) 2345 678 44
                                        88
                                    </li>
                                </ul>
                            </div>
                            <div className="social-icon">
                                <h6 className="custom-font stit simple-btn">
                                    Follow Us
                                </h6>
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2"></div>
                </div>
                <div className="copyrights text-center">
                    <p>© 2023 - Creadtive media ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
