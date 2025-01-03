import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import { LanguageProvider } from "../common/languageContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <LanguageProvider>
                <Head>
                    <title>Creadtive Agency</title>
                    <link rel="icon" href="/img/favicon.ico" />
                </Head>
                <Cursor />
                <LoadingScreen />
                <ScrollToTop />
                <Component {...pageProps} />

                <Script
                    strategy="beforeInteractive"
                    id="wow"
                    src="/js/wow.min.js"
                ></Script>
                <Script
                    strategy="beforeInteractive"
                    id="splitting"
                    src="/js/splitting.min.js"
                ></Script>
                <Script
                    id="simpleParallax"
                    src="/js/simpleParallax.min.js"
                ></Script>
                <Script
                    strategy="beforeInteractive"
                    id="isotope"
                    src="/js/isotope.pkgd.min.js"
                ></Script>
                <Script
                    strategy="lazyOnload"
                    id="initWow"
                    src="/js/initWow.js"
                ></Script>
            </LanguageProvider>
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default MyApp;
