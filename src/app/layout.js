import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ASM Jewellery | Exquisite & Custom Crafted Jewelry",
  description: "Discover our breathtaking collection of handcrafted diamond, gold, and silver jewelry at ASM Jewellery. Perfect for weddings, gifts, and special occasions.",
  keywords: ["jewelry", "ASM Jewellery", "custom jewelry", "diamond rings", "gold necklaces", "silver earrings", "luxury accessories", "wedding bands", "engagement rings"],
  openGraph: {
    title: "ASM Jewellery | Exquisite & Custom Crafted Jewelry",
    description: "Discover our breathtaking collection of handcrafted diamond, gold, and silver jewelry at ASM Jewellery.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "ASM Jewellery",
    "image": "https://www.asmjewellery.com/logo.png",
    "description": "Discover our breathtaking collection of handcrafted diamond, gold, and silver jewelry at ASM Jewellery.",
    "telephone": "+918147349242",
    "url": "https://www.asmjewellery.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
