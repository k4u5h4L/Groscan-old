import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                        crossOrigin="anonymous"
                    />
                    {/* <link
                        rel="stylesheet"
                        href="/fonts/material-icon/css/material-design-iconic-font.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css"
                    />

                    <link rel="stylesheet" href="/assets/css/style.min.css" />
                    <link rel="icon" type="image/png" href="/icon.png" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* <script
                        src="/assets/vendor/jquery/jquery-3.5.1.min.js"
                        type="2f67aa58bc6dff0dbcb0a602-text/javascript"
                    ></script> */}
                </body>
            </Html>
        );
    }
}
