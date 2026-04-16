import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { publicAsset } from "@/data/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Chris Pincel Mágico | Studio de Beleza Premium",
  description:
    "Experiências de beleza personalizadas em Floriano-PI e Barão-MA com sobrancelhas, cílios, pele, depilação e atendimento com hora marcada.",
  icons: {
    icon: publicAsset("/src/img/site-icon.png"),
    shortcut: publicAsset("/src/img/site-icon.png"),
    apple: publicAsset("/src/img/site-icon.png"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
