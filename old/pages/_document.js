import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="favicon" />
        {/* <link href="/static/favicons/site.webmanifest" rel="manifest" /> */}
        <script
          defer
          data-domain="robindeneef.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
