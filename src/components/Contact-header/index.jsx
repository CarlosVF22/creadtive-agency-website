import React from "react";
import addParlx from "../../common/addParlx";

const ContactHeader = ({ sliderRef, language }) => {
    const [pageLoaded, setPageLoaded] = React.useState(false);
    React.useEffect(() => {
        setPageLoaded(true);
        if (pageLoaded) {
            addParlx();
        }
    }, [pageLoaded]);
    return (
        <header
            ref={sliderRef}
            className="works-header fixed-slider hfixd valign"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-11 static">
                        <div className="capt mt-50">
                            <div className="parlx">
                                <h2 className="custom-font">
                                    {language === "en" ? (
                                        <>
                                            <span>Let&apos;s</span>Talk About
                                            Your project.
                                        </>
                                    ) : (
                                        <>
                                            <span>Adelante</span> Hablanos de tu
                                            proyecto.
                                        </>
                                    )}
                                </h2>
                                <p>
                                    {language === "en" ? (
                                        <>
                                            Feel free to ask me any question or
                                            let&apos;s do to talk about our
                                            future collaboration.
                                        </>
                                    ) : (
                                        <>
                                            No dudes en hacerme cualquier
                                            pregunta o hablemos sobre nuestra
                                            futura colaboración.
                                        </>
                                    )}
                                </p>
                            </div>

                            <div className="bactxt custom-font valign">
                                <span className="full-width">
                                    {language === "en" ? "Contact" : "Contacto"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ContactHeader;
