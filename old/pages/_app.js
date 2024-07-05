import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Robin De Neef"
        description="Hi! My name is Robin De Neef, I'm a developer and a maker."
        openGraph={{
          type: "website",
          locale: "en_EN",
          url: "https://robindeneef.com/",
          site_name: "Robin De Neef",
          images: [
            {
              url: "https://robindeneef.com/images/cover.png",
              width: 1440,
              height: 800,
              alt: "Robin De Neef Portfolio",
            },
          ],
        }}
        twitter={{
          handle: "@RobinDeNeef",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
