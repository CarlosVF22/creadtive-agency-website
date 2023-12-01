import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace.js";
import appData from "../../data/app.json";
import Image from "next/image.js";

const LoadingScreen = () => {
    React.useEffect(() => {
        let bodyEl = document.querySelector("body");
        if (appData.showLoading) {
            loadingPace();

            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return (
        <>
            <div
                className={`${
                    appData.showLoading === true ? "showX" : "hideX"
                }`}
            >
                <div id="preloader">
                    <Image
                        src={appData.darkLogo}
                        alt="Logo"
                        className="loading-logo"
                        width={250}
                        height={70}
                    />
                </div>
            </div>
            {appData.showLoading ? (
                <Script
                    id="pace"
                    strategy="beforeInteractive"
                    src="/js/pace.min.js"
                ></Script>
            ) : (
                ""
            )}
        </>
    );
};

export default LoadingScreen;
