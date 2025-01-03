/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme, language, toggleLanguage }) => {
    return (
        <nav
            ref={nr}
            className={`navbar navbar-expand-lg change ${
                theme === "themeL" ? "light" : ""
            }`}
        >
            <div className="container">
                <Link href="/">
                    <div className="logo">
                        {theme ? (
                            theme === "themeL" ? (
                                <Image
                                    ref={lr}
                                    src={`${appData.darkLogo}`}
                                    alt="Creadtive agency logo"
                                    width={250}
                                    height={70}
                                />
                            ) : (
                                <Image
                                    ref={lr}
                                    src={`${appData.lightLogo}`}
                                    alt="Creadtive agency logo"
                                    width={250}
                                    height={70}
                                />
                            )
                        ) : (
                            <img
                                ref={lr}
                                src={`${appData.lightLogo}`}
                                alt="Creadtive agency logo"
                            />
                        )}
                    </div>
                </Link>

                {/* collapse button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMobileDropdown}
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                {/* Links menu */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <span className="nav-link">
                                    {language === "en" ? "Home" : "Inicio"}
                                </span>
                            </Link>
                        </li>
                        <li
                            className="nav-item dropdown"
                            onClick={handleDropdown}
                        >
                            <span
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Blog
                            </span>
                            <div className="dropdown-menu">
                                <Link
                                    legacyBehavior
                                    href="/blog-details/blog-details-light-1"
                                >
                                    <a className="dropdown-item">
                                        {language === "en" ? (
                                            <>
                                                Measuring Digital Success:
                                                <br /> Your Website Guide
                                            </>
                                        ) : (
                                            <>
                                                Medición del éxito digital:{" "}
                                                <br /> La guía de su sitio web
                                            </>
                                        )}
                                    </a>
                                </Link>
                                <Link
                                    legacyBehavior
                                    href="/blog-details/blog-details-light-2"
                                >
                                    <a className="dropdown-item">
                                        {language === "en" ? (
                                            <>
                                                Lights, Camera, Action: <br />{" "}
                                                Tips for shooting social media
                                                videos
                                            </>
                                        ) : (
                                            <>
                                                Luces, cámara, acción: <br />{" "}
                                                consejos para grabar vídeos en
                                                redes sociales
                                            </>
                                        )}
                                    </a>
                                </Link>
                                <Link
                                    legacyBehavior
                                    href="/blog-details/blog-details-light-3"
                                >
                                    <a className="dropdown-item">
                                        {language === "en" ? (
                                            <>
                                                Things you need to know to find{" "}
                                                <br /> a great Logo
                                            </>
                                        ) : (
                                            <>
                                                Cosas que necesitas saber para
                                                encontrar <br /> un gran
                                                logotipo
                                            </>
                                        )}
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact/contact-light">
                                <span className="nav-link">
                                    {language === "en" ? "Contact" : "Contacto"}
                                </span>
                            </Link>
                        </li>
                        <div className="toggle-container">
                            <div className="lang-switch-label">
                                <span className="lang-label">EN</span>
                                <label className="lang-switch">
                                    <input
                                        type="checkbox"
                                        className="lang-checkbox"
                                        checked={language === "es"}
                                        onChange={() =>
                                            toggleLanguage(
                                                language === "en" ? "es" : "en"
                                            )
                                        }
                                    />
                                    <span className="lang-slider lang-round"></span>
                                </label>
                                <span className="lang-label">ES</span>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* Interruptor de idioma */}
            </div>
        </nav>
    );
};

export default Navbar;
