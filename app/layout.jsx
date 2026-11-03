import "./globals.css";
import { publicAsset } from "@/data/site";

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
  url: "https://chrispincelmagico.com.br/",
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
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
