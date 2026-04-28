import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StickySideCTA from "@/components/home/StickySideCta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "CMIC – Coal & Mineral Inspection, Testing & Liaisoning Services",
    template: "%s | CMIC",
  },
  description:
    "CMIC provides NABL-accredited coal and mineral testing, joint sampling, inspection, and liaisoning services across India. Trusted for accurate analysis, supervision, and logistics coordination.",

  keywords: [
    "coal testing India",
    "mineral analysis laboratory",
    "NABL accredited lab coal",
    "joint sampling inspection",
    "coal inspection services",
    "coal logistics supervision",
    "liaisoning coal India",
    "GCV testing coal",
    "proximate analysis coal",
    "mineral testing services India",
  ],

  authors: [{ name: "CMIC" }],
  creator: "CMIC",
  publisher: "CMIC",

  metadataBase: new URL("https://www.carbonson.in"), // 🔁 change to your domain

  openGraph: {
    title: "CMIC – Coal & Mineral Inspection Services",
    description:
      "Accurate mineral analysis, joint sampling, and inspection services through NABL-accredited labs across India.",
    url: "https://www.carbonson.in",
    siteName: "CMIC",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "CMIC Coal & Mineral Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CMIC – Coal & Mineral Testing & Inspection",
    description:
      "Trusted NABL-accredited coal testing, joint inspection, and liaisoning services across India.",
    images: ["/logo2.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <StickySideCTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
