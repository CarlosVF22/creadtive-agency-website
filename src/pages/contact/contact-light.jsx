import React from "react";
import ContactHeader from "../../components/Contact-header";
import ContactWithMap from "../../components/Contact-with-map";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";
import { useLanguage } from "../../common/languageContext";

const Contact = () => {
    const fixedHeader = React.useRef(null);
    const MainContent = React.useRef(null);
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    const { language, toggleLanguage } = useLanguage();
    React.useEffect(() => {
        document.querySelector("body").classList.add("menubarblack");
        setInterval(() => {
            if (fixedHeader.current) {
                var slidHeight = fixedHeader.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, []);
    return (
        <LightTheme>
            <Navbar
                nr={navbarRef}
                lr={logoRef}
                language={language}
                toggleLanguage={toggleLanguage}
            />
            <ContactHeader sliderRef={fixedHeader} language={language} />
            <div className="main-content" ref={MainContent}>
                <ContactWithMap theme="light" language={language} />
            </div>
        </LightTheme>
    );
};

export default Contact;
