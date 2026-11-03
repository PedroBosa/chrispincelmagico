import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { publicAsset } from "@/data/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title:
    "Chris Pincel Mágico | Sobrancelhas, Cílios e Micropigmentação em Floriano-PI e Barão de Grajaú-MA",
  description:
    "Studio de beleza especializado em design de sobrancelhas, micropigmentação fio a fio e labial, lash lifting, extensão de cílios e limpeza de pele em Floriano-PI e Barão de Grajaú-MA.",
  openGraph: {
    title: "Chris Pincel Mágico | Studio de Beleza do Olhar",
    description:
      "Design de sobrancelhas, micropigmentação, cílios e estética facial com hora marcada em Floriano-PI e Barão de Grajaú-MA.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: publicAsset("/src/img/site-icon.png"),
    shortcut: publicAsset("/src/img/site-icon.png"),
    apple: publicAsset("/src/img/site-icon.png"),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Chris Pincel Mágico",
  description:
    "Design de sobrancelhas, micropigmentação fio a fio e labial, cílios e cuidados faciais em Floriano-PI e Barão de Grajaú-MA.",
  telephone: "+55-89-99422-1565",
  url: "https://pedrobosa.github.io/chrispincelmagico/",
  sameAs: ["https://www.instagram.com/chrispincelmagico/"],
  priceRange: "$$",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Avenida Bucar Neto, 1984 - Bairro Cancela",
      addressLocality: "Floriano",
      addressRegion: "PI",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "Avenida Santa Filomena, 209 - Bairro Nossa Senhora da Guia",
      addressLocality: "Barão de Grajaú",
      addressRegion: "MA",
      addressCountry: "BR",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
