import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="favicon" />
        {/* <link href="/static/favicons/site.webmanifest" rel="manifest" /> */}
      </Head>
      <body className="bg-white dark:bg-gray-800 text-black dark:text-white">
        <Main />
        <NextScript/>
      </body>
    </Html>
  );
}