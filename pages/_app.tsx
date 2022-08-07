import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";

import NextNprogress from "nextjs-progressbar";

import "@/styles/scanner.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    // const [showChild, setShowChild] = useState(false);
    // useEffect(() => {
    //     setShowChild(true);
    // }, []);

    // if (!showChild) {
    //     return null;
    // }
    // if (typeof window === "undefined") {
    //     return <></>;
    // } else {
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
                color="#ffffff"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
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
