import React from "react";
import Split from "../Split";
import services4Data from "../../data/sections/services4.json";

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle, language }) => {
    return (
        <section
            className={`services ${withPadding ? "section-padding" : ""} ${
                withBG ? "sub-bg" : ""
            }`}
            id="section-services"
        >
            <div className="container">
                {!withOutTitle && (
                    <div className="sec-head custom-font text-center">
                        <h6 className="wow fadeIn" data-wow-delay=".5s">
                            {language === "en"
                                ? "Best feactures"
                                : "Excelentes productos"}
                        </h6>
                        <Split>
                            <h3
                                className="wow words chars splitting"
                                data-splitting
                            >
                                {language === "en" ? "Services" : "Servicios"}
                            </h3>
                        </Split>
                        <span className="tbg">
                            {language === "en" ? "Services" : "Servicios"}
                        </span>
                    </div>
                )}
                <div className="row">
                    {services4Data.map((item, index) => (
                        <div
                            className="col-lg-4"
                            key={item.id}
                            style={{ marginTop: "10px", display: "flex" }}
                        >
                            <div
                                className={`item ${
                                    index != services4Data.length - 1
                                        ? "md-mb50"
                                        : ""
                                } wow fadeInUp`}
                                data-wow-delay={
                                    item.id == 1
                                        ? ".5s"
                                        : item.id == 2
                                        ? ".3s"
                                        : ".8s"
                                }
                            >
                                <span className={`icon ${item.icon}`}></span>
                                {/* <h6>{item.title}</h6> */}
                                <h6>
                                    {item.title[language]
                                        ? item.title[language]
                                        : "Without title"}
                                </h6>
                                <p>
                                    {item.content[language]
                                        ? item.content[language]
                                        : "Without content"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {halfBG && <div className="half-bg bottom"></div>}
        </section>
    );
};

export default Services4;
