import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Amplify } from "aws-amplify";

const roboto = Roboto({
  weight: ["300"], // Specify font weights you want to include
  subsets: ["latin"], // Include character subsets you need (e.g., 'latin')
});

export const metadata: Metadata = {
  title: "Relaxing Spa 舒心养生馆",
  description: "The best spa in Flushing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/SPA.svg" />

        {/* Google Tag Manager Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16938350783"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16938350783');
          `}
        </Script>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}