import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";

import NextNprogress from "nextjs-progressbar";

import "@/styles/global.css";
import "@/styles/scanner.css";
// import Navbar from "@/components/Common/Navbar/Navbar";
import { useRouter } from "next/router";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
// import "normalize.css";
import {
    slideUp,
    slideLeft,
    slideRight,
    fadeBack,
    rotateX,
    rotateY,
    rotateZ,
} from "@/helpers/animations";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Common/Navbar/Navbar"), {
    ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const animation = slideLeft;

    return (
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="description"
                    content="A grocery management application"
                />
                <meta
                    name="keywords"
                    content="grocery, management, inventory, tracking"
                />
                <meta name="”theme-color”" content="”#0d6efd" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <title>Groscan</title>
            </Head>
            <NextNprogress
                color="#0d6efd"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                options={{ showSpinner: false }}
            />
            <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter={true}>
                    <m.div
                        key={router.route.concat(animation.name)}
                        // className="page-wrap"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={animation.variants}
                        transition={animation.transition}
                    >
                        <>
                            <Component {...pageProps} />
                            <Navbar route={router.asPath} />
                        </>
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
        </SessionProvider>
    );
    // }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
