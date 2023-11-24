import React from "react";
import AboutUs1 from "../../components/About-us1";
import BlogsThreeColumn2 from "../../components/Blogs-three-column2";
import ContactSection from "../../components/Contact-section";
import Footer from "../../components/Footer";
import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services4 from "../../components/Services4";
import TeamWithSkills from "../../components/Team-with-skills";
import Testimonials1 from "../../components/Testimonials1";
import LightTheme from "../../layouts/Light";
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import { useLanguage } from "../../common/languageContext";

const Homepage4 = () => {
    const fixedSlider = React.useRef(null);
    const MainContent = React.useRef(null);
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    // language
    const { language, toggleLanguage } = useLanguage();

    React.useEffect(() => {
        setInterval(() => {
            if (fixedSlider.current) {
                var slidHeight = fixedSlider.current.offsetHeight;
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
    }, [fixedSlider, MainContent, navbarRef]);

    return (
        <LightTheme>
            <Navbar
                nr={navbarRef}
                lr={logoRef}
                language={language}
                toggleLanguage={toggleLanguage}
            />
            <IntroWithSlider1 sliderRef={fixedSlider} language={language} />
            <div ref={MainContent} className="main-content">
                <Services4 withBG withPadding language={language} />
                <ShowcasesOneCenter language={language} />
                <AboutUs1 language={language} />
                <BlogsThreeColumn2 subBG />
                <ContactSection />
                <Footer />
            </div>
        </LightTheme>
    );
};

export default Homepage4;
