import type { Metadata } from "next";
import { Lato, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drfeelgoodchile.cl"),
  title: { default: "Clínica estética en Las Condes | Dr. Feelgood", template: "%s | Dr. Feelgood" },
  description: "Estética facial natural, tratamientos corporales y podología clínica en Las Condes, Santiago. Conoce nuestros tratamientos y agenda una evaluación.",
  openGraph: { locale: "es_CL", type: "website", siteName: "Dr. Feelgood" },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { CartProvider } from "@/components/CartProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18483383351" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18483383351');` }} />
      </head>
      <body className={`${lato.variable} ${playfair.variable} ${montserrat.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatbotWidget />
        </CartProvider>
      </body>
    </html>
  );
}
