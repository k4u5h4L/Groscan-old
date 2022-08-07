import Loader from "@/components/Loader/Loader";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin=""
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="/css/bootstrap.css"
                        rel="stylesheet"
                        type="text/css"
                    />

                    <link href="/css/ui.css" rel="stylesheet" type="text/css" />

                    <link
                        href="/fonts/material-icon/css/round.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                    <Loader />
                    <Main />
                    <NextScript />

                    <script
                        src="/js/jquery-3.5.0.min.js"
                        type="text/javascript"
                    ></script>

                    <script
                        src="/js/bootstrap.bundle.js"
                        type="text/javascript"
                    ></script>

                    <script src="/js/script.js" type="text/javascript"></script>
                </body>
            </Html>
        );
    }
}
