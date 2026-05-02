import "./globals.css";
import { publicAsset } from "@/data/site";

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
