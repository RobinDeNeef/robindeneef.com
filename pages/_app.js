import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Robin De Neef</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="robindeneef.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
