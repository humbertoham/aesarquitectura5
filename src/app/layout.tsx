import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import ServiceArea from "@/components/servicesarea";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "AES Arquitectos";
const SITE_DESC =
  "Estudio de arquitectura en Chiapas, México. Más de 3 años trabajando 100% en línea con +400 clientes en México y EE. UU. Diseño de fachadas, área social y proyectos completos.";
const SITE_URL = "https://tu-dominio.com"; // <-- cámbialo

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "arquitectura",
    "diseño de fachada",
    "renders",
    "planos arquitectónicos",
    "modelado 3D",
    "Chiapas",
    "proyecto arquitectónico",
    "estudio de arquitectura",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESC,
    locale: "es_MX",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: `${SITE_NAME}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Navbar/>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#content" className="skip-link">
          Skip to content
        </a>

        {/* Navbar (si es client component, está ok importarlo aquí) */}
        {/* <Navbar /> */}

        <main id="content">{children}</main>
        {/* <Footer /> */}
      </body>
        {/* CTA (componente) */}
      <CTA />

      {/* FAQ (componente) */}
      <FAQ />

      {/* Service Area (componente con mapa) */}
      <ServiceArea />

      <Footer/>

    </html>
  );
}
