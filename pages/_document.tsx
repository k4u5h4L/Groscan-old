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

                    <link
                        rel="stylesheet"
                        id="rtl-link"
                        type="text/css"
                        href="/assets/css/vendors/bootstrap.css"
                    />

                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/assets/css/iconly.css"
                    />

                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/assets/css/vendors/slick.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/assets/css/vendors/slick-theme.css"
                    />

                    <link
                        rel="stylesheet"
                        id="change-link"
                        type="text/css"
                        href="/assets/css/style.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="/assets/js/jquery-3.6.0.min.js"></script>

                    <script src="/assets/js/bootstrap.bundle.min.js"></script>

                    <script src="/assets/js/lord-icon-2.1.0.js"></script>

                    <script src="/assets/js/feather.min.js"></script>

                    <script src="/assets/js/slick.js"></script>
                    <script src="/assets/js/slick.min.js"></script>
                    <script src="/assets/js/slick-custom.js"></script>

                    <script src="/assets/js/theme-setting.js"></script>

                    <script src="/assets/js/script.js"></script>
                </body>
            </Html>
        );
    }
}
