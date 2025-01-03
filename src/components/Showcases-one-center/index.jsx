import React from "react";
import Split from "../Split";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "../../data/showcases-full-screen-slider.json";
import SwiperCore, { Navigation, Parallax } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Parallax]);

const ShowcasesOneCenter = ({ language }) => {
    const [load, setLoad] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setLoad(false);
            removeSlashFromPagination();
        });
    }, []);

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <header className="slider showcase-carus">
            <div className="sec-head custom-font text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                    {language === "en" ? "professionalism" : "Profesionalismo"}
                </h6>
                <Split>
                    <h3 className="wow words chars splitting" data-splitting>
                        {language === "en"
                            ? "Our skills"
                            : "Nuestras habilidades"}
                    </h3>
                </Split>
                <span className="tbg">
                    {language === "en" ? "Our skills" : "Nuestras habilidades"}
                </span>
            </div>
            <div
                id="content-carousel-container-unq-1"
                className="swiper-container"
            >
                {!load ? (
                    <Swiper
                        speed={1000}
                        // mousewheel={true}
                        centeredSlides={true}
                        autoplay={true}
                        loop={true}
                        spaceBetween={30}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 200,
                            },
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl =
                                navigationPrevRef.current;
                            swiper.params.navigation.nextEl =
                                navigationNextRef.current;
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                for (var i = 0; i < swiper.slides.length; i++) {
                                    swiper.slides[i].childNodes[0].setAttribute(
                                        "data-swiper-parallax",
                                        0.75 * swiper.width
                                    );
                                }

                                swiper.params.navigation.prevEl =
                                    navigationPrevRef.current;
                                swiper.params.navigation.nextEl =
                                    navigationNextRef.current;

                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                        className="swiper-wrapper"
                        slidesPerView={4}
                    >
                        {ShowcassesFullScreenData.map((slide) => (
                            <SwiperSlide
                                key={slide.id}
                                className="swiper-slide"
                            >
                                <div
                                    className="bg-img valign"
                                    data-overlay-dark="1"
                                >
                                    {/* Modificación aquí para usar Image */}
                                    <Image
                                        src={slide.image}
                                        alt={`${
                                            language === "en"
                                                ? slide.title_en.second
                                                : slide.title_es.second
                                        }`}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={75}
                                    />

                                    <div className="caption ontop">
                                        <div className="o-hidden">
                                            <h1>
                                                <div className="stroke">
                                                    {language === "en"
                                                        ? slide.title_en.first
                                                        : slide.title_es.first}
                                                </div>
                                                <span>
                                                    {language === "en"
                                                        ? slide.title_en.second
                                                        : slide.title_es.second}
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="copy-cap valign">
                                        <div className="cap">
                                            <h1>
                                                <div className="stroke">
                                                    {language === "en"
                                                        ? slide.title_en.first
                                                        : slide.title_es.first}
                                                </div>
                                                <span>
                                                    {language === "en"
                                                        ? slide.title_en.second
                                                        : slide.title_es.second}
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : null}
                <div className="txt-botm">
                    <div
                        ref={navigationNextRef}
                        className="swiper-button-next swiper-nav-ctrl cursor-pointer"
                    >
                        <div>
                            <span className=" custom-font">
                                {language === "en" ? "Next Slide" : "Siguiente"}
                            </span>
                        </div>
                        <div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div
                        ref={navigationPrevRef}
                        className="swiper-button-prev swiper-nav-ctrl cursor-pointer"
                    >
                        <div>
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div>
                            <span className="custom-font">
                                {language === "en" ? "Prev Slide" : "Atras"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ShowcasesOneCenter;
