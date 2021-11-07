import { Html, Head, Main, NextScript } from 'next/document';
import Navigation from '../components/Navigation'


export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="favicon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
      </Head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <Navigation/>
        <Main />
        <NextScript/>
      </body>
    </Html>
  );
}