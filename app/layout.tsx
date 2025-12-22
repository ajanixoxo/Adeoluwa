import type { Metadata } from "next";
import { Poppins, Gugi, Agbalumo, Questrial } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gugi",
  display: "swap",
});

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-agbalumo",
  display: "swap",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Adeoluwa Gberno - Full Stack Developer & Software Engineer",
    template: "%s | Adeoluwa Gberno"
  },
  description: "Full Stack Developer and Software Engineer specializing in modern web applications. Building scalable solutions with React, Next.js, Node.js, and MongoDB. Explore my projects and work experience.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "TypeScript",
    "Portfolio",
    "Adeoluwa Gberno",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Adeoluwa Gberno" }],
  creator: "Adeoluwa Gberno",
  publisher: "Adeoluwa Gberno",
  metadataBase: new URL("https://adeoluwa.dev"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeoluwa.dev", // Update with your actual domain
    title: "Adeoluwa Gberno - Full Stack Developer & Software Engineer",
    description: "Full Stack Developer and Software Engineer specializing in modern web applications. Building scalable solutions with React, Next.js, Node.js, and MongoDB.",
    siteName: "Adeoluwa Gberno Portfolio",
    images: [
      {
        url: "/og-image.png", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Adeoluwa Gberno - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeoluwa Gberno - Full Stack Developer & Software Engineer",
    description: "Full Stack Developer and Software Engineer specializing in modern web applications.",
    creator: "@dexcoded01", // Your Twitter handle
    images: ["/og-image.png"], // Add your OG image
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
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'web-app-manifest',
        url: '/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adeoluwa Gberno",
    "jobTitle": "Full Stack Developer & Software Engineer",
    "url": "https://adeoluwa.dev", // Update with your actual domain
    "sameAs": [
      "https://github.com/ajanixoxo",
      "https://www.linkedin.com/in/adeoluwa-gberno-4b755525a/",
      "https://x.com/dexcoded01",
      "https://www.tiktok.com/@certifiedtechbrvh"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Full Stack Development"
    ],
    "email": "joelayomide35@gmail.com"
  }

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f8e8e8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${gugi.variable} ${agbalumo.variable} ${questrial.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
