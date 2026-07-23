import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gdemservices.com"),
  title: {
    default: "GD Electrical & Mechanical Services | Marine Engineers, Torpoint",
    template: "%s | GD Electrical & Mechanical Services",
  },
  description:
    "Marine electrical and mechanical engineering for private and commercial vessels across Plymouth, Cornwall and South Devon. Fly-by-wire, DC systems, CCTV, engine room inspections and more.",
  keywords: [
    "marine electrician Plymouth",
    "marine engineer Cornwall",
    "marine electrical Torpoint",
    "boat electrician South Devon",
    "fly-by-wire installation",
    "marine CCTV installation",
  ],
  openGraph: {
    title: "GD Electrical & Mechanical Services",
    description:
      "Marine electrical and mechanical engineering for private and commercial vessels across Plymouth, Cornwall and South Devon.",
    url: "https://gdemservices.com",
    siteName: "GD Electrical & Mechanical Services",
    images: ["/images/og-image.jpg"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body bg-abyss text-paper-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
