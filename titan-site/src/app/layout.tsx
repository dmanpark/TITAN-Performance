import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://titan-performance-three.vercel.app"),
  title: {
    default: "TITAN Performance | Structured Supplement System for Strength Athletes",
    template: "%s | TITAN Performance",
  },
  description:
    "A phased performance supplement system built for strength athletes. Clinically dosed, transparent formulas for pre-training, intra-training, and recovery. No proprietary blends.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TITAN Performance",
    title: "TITAN Performance | Structured Supplement System for Strength Athletes",
    description:
      "A phased performance supplement system built for strength athletes. Clinically dosed, transparent formulas covering every phase of the training cycle.",
    url: "https://titan-performance-three.vercel.app",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "TITAN Performance — Structured Supplement System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TITAN Performance | Structured Supplement System",
    description:
      "Clinically dosed supplements for every phase of the training cycle. No proprietary blends. No hype.",
  },
  alternates: {
    canonical: "/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://titan-performance-three.vercel.app/#organization",
              name: "TITAN Performance",
              url: "https://titan-performance-three.vercel.app",
              logo: "https://titan-performance-three.vercel.app/assets/logo.png",
              description:
                "A structured performance supplement system built for strength athletes. Clinically dosed, transparent formulas for every phase of the training cycle.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://titan-performance-three.vercel.app/#website",
              name: "TITAN Performance",
              url: "https://titan-performance-three.vercel.app",
              publisher: {
                "@id": "https://titan-performance-three.vercel.app/#organization",
              },
            }),
          }}
        />
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
