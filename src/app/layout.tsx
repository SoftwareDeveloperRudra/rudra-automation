import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudra Umra — Full Stack Developer & AI Automation Engineer",
  description:
    "Rudra Umra builds high-performance websites, AI automations, booking systems and intelligent business workflows in Surat, Gujarat & worldwide.",
  keywords: [
    "Rudra Umra",
    "Full Stack Developer",
    "AI Automation Engineer",
    "Surat Developer",
    "n8n Workflows",
    "Business Automation",
    "WhatsApp Automation",
    "Next.js Developer",
    "Gujarat Web Developer",
  ],
  authors: [{ name: "Rudra Umra" }],
  creator: "Rudra Umra",
  openGraph: {
    title: "Rudra Umra — Full Stack Developer & AI Automation Engineer",
    description:
      "Turn repetitive manual business work into automated digital systems.",
    url: "https://rudraumra.com",
    siteName: "Rudra Umra Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Umra — Full Stack Developer & AI Automation Engineer",
    description:
      "High-performance websites, n8n automations, and AI business workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rudra Umra",
  jobTitle: "Full Stack Developer & AI Automation Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "India",
  },
  description:
    "Rudra Umra builds high-performance websites, AI automations, booking systems and intelligent business workflows.",
  url: "https://rudraumra.com",
  knowsAbout: [
    "Web Development",
    "AI Automation",
    "n8n Workflows",
    "React",
    "Next.js",
    "Python",
    "Gemini AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#030712] text-gray-100 antialiased selection:bg-cyan-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
