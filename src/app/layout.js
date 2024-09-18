import { Inter } from "next/font/google";
import PlausibleProvider from 'next-plausible'
import "./globals.css";
import config from "@/utils/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robin De Neef | Data/AI Consultant",
  description: config.siteDescription,
  // name:"viewport",
  // content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
};

export default function RootLayout({ children }) {
  return (
    <PlausibleProvider domain="robindeneef.com">

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </PlausibleProvider>
  );
}
