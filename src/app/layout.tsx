import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Amplify } from 'aws-amplify';
import awsConfig from "./awsConfig"

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
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
