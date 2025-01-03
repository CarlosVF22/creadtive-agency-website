/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";
import Image from "next/image";

const AboutUs1 = ({ language }) => {
    return (
        <div className="about section-padding" style={{ marginTop: "4rem" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img-mons">
                            <div className="row">
                                <div className="col-md-5 cmd-padding valign">
                                    <div
                                        className="img1 wow imago"
                                        data-wow-delay=".5s"
                                    >
                                        <Image
                                            src={AboutUs1Date.image1}
                                            width={602}
                                            height={402}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-7 cmd-padding">
                                    <div
                                        className="img2 wow imago"
                                        data-wow-delay=".3s"
                                    >
                                        <Image
                                            src={AboutUs1Date.image2}
                                            width={600}
                                            height={400}
                                        />
                                    </div>
                                    <div
                                        className="img3 wow imago"
                                        data-wow-delay=".8s"
                                    >
                                        <Image
                                            src={AboutUs1Date.image3}
                                            width={602}
                                            height={402}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 valign">
                        <div className="content">
                            <div className="sub-title">
                                <h6>
                                    {language === "en"
                                        ? AboutUs1Date.smallTitle_en
                                        : AboutUs1Date.smallTitle_es}
                                </h6>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Split>
                                <h3
                                    className="words chars splitting main-title wow"
                                    data-splitting
                                >
                                    {language === "en"
                                        ? AboutUs1Date.title_en.first
                                        : AboutUs1Date.title_es.first}
                                </h3>
                                <h3
                                    className="words chars splitting main-title wow"
                                    data-splitting
                                >
                                    {language === "en"
                                        ? AboutUs1Date.title_en.second
                                        : AboutUs1Date.title_es.second}
                                </h3>
                            </Split>
                            <Split>
                                <p
                                    className="words chars splitting wow txt"
                                    data-splitting
                                >
                                    {language === "en"
                                        ? AboutUs1Date.content_en
                                        : AboutUs1Date.content_es}
                                </p>
                            </Split>
                            <div className="ftbox mt-30">
                                <ul>
                                    {AboutUs1Date.features.map((feature) => (
                                        <li
                                            key={feature.id}
                                            className={`wow fadeIn ${
                                                feature.id == 2 ? "space" : ""
                                            }`}
                                            data-wow-delay={feature.wowDelay}
                                            style={{ borderRadius: "20px" }}
                                        >
                                            <span
                                                className={`icon color-font pe-7s-${feature.icon}`}
                                            ></span>
                                            <h6 className="custom-font">
                                                {language === "en"
                                                    ? feature.name_en.first
                                                    : feature.name_es.first}
                                            </h6>
                                            <h6 className="custom-font">
                                                {language === "en"
                                                    ? feature.name_en.second
                                                    : feature.name_es.second}
                                            </h6>
                                            <div className="dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs1;
