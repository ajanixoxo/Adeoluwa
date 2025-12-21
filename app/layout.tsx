import type { Metadata } from "next";
import { Poppins, Gugi, Agbalumo, Questrial } from "next/font/google";
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
  title: "Portfolio - Adeoluwa",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${gugi.variable} ${agbalumo.variable} ${questrial.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
