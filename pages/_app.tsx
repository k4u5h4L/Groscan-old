import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";

import NextNprogress from "nextjs-progressbar";

import "@/styles/scanner.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    if (typeof window === "undefined") {
        return <></>;
    } else {
        return (
            <SessionProvider
                session={pageProps.session}
                refetchInterval={5 * 60}
            >
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>Groscan</title>
                </Head>
                <NextNprogress
                    color="#21aa93"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                />
                <Component {...pageProps} />
            </SessionProvider>
        );
    }
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
