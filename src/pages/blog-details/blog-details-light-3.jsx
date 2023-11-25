import React from "react";
import BlogDetails from "../../components/Blog-details/blog-3";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";
import { useLanguage } from "../../common/languageContext";

const BlogDetailsLight = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    const { language, toggleLanguage } = useLanguage();
    React.useEffect(() => {
        document.querySelector("body").classList.add("menubarblack");
        var navbar = navbarRef.current,
            logo = logoRef.current;
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
    }, [navbarRef]);
    return (
        <LightTheme>
            <Navbar
                nr={navbarRef}
                lr={logoRef}
                language={language}
                toggleLanguage={toggleLanguage}
            />
            <section className="page-header blg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="cont text-center">
                                <h2>
                                    {language === "en"
                                        ? "Things you need to know to find a great Logo"
                                        : "Cosas que necesitas saber para encontrar un gran logotipo"}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BlogDetails language={language} />
            <Footer />
        </LightTheme>
    );
};

export default BlogDetailsLight;
