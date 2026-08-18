import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pousadakuarasy.com"),
  title: "Pousada Kuarasy | Japaratinga, Alagoas",
  description: "Pousada de charme à beira-mar em Japaratinga, com bangalôs e gastronomia autoral.",
  openGraph: {
    title: "Pousada Kuarasy | O luxo de viver sem pressa",
    description: "Bangalôs à beira-mar, gastronomia autoral e a tranquilidade de Japaratinga.",
    images: [{ url: "/og.png", width: 1743, height: 913, alt: "Pousada Kuarasy em Japaratinga, Alagoas" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pousada Kuarasy | O luxo de viver sem pressa",
    description: "Bangalôs à beira-mar, gastronomia autoral e a tranquilidade de Japaratinga.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
