/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

export const metadata: Metadata = {
  title: "DS Hair - Espaço Mulher | Beleza e Estilo",
  description:
    "Transforme sua beleza no DS Hair - Espaço Mulher. Cabelos, unhas e estética com profissionais especializados.",
  keywords: ["salão de beleza", "cabelos", "manicure", "estética", "DS Hair"],
  authors: [{ name: "DS Hair", url: "https://ds-hair.vercel.app" }],
  openGraph: {
    title: "DS Hair - Espaço Mulher | Beleza e Estilo",
    description:
      "Transforme sua beleza no DS Hair - Espaço Mulher. Cabelos, unhas e estética com profissionais especializados.",
    url: "https://ds-hair.vercel.app",
    siteName: "DS Hair",
    images: [
      {
        url: "https://ds-hair.vercel.app/assets/logo-dshair.png",
        width: 1200,
        height: 630,
        alt: "Salão DS Hair - Espaço Mulher",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ff69b4" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Navbar />
        {children}
      <Footer />

      </body>
    </html>
  );
}
