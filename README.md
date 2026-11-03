# Chris Pincel Mágico

Site institucional do studio **Chris Pincel Mágico** (Floriano-PI e Barão de Grajaú-MA), construído com **Next.js 16**, **React 19** e **Tailwind CSS 4**, configurado com exportação estática para deploy automático via **GitHub Pages**.

## Tecnologias

- **Next.js 16** (App Router + `output: "export"`)
- **React 19**
- **Tailwind CSS 4**
- **next/font** (`Cormorant Garamond` & `Manrope`)
- **Lucide React**

## Estrutura do Projeto

- `app/` — Layout raiz (`layout.jsx`), metadados SEO + JSON-LD (`BeautySalon`), página inicial (`page.jsx`) e estilos globais (`globals.css`).
- `components/` — Componentes modulares da interface (`Navbar`, `Hero`, `Services`, `About`, `Gallery`, `Contact`, `Footer`, `WhatsAppButton`).
- `data/site.js` — Conteúdo estruturado (procedimentos, valores, portfólio, endereços e links de contato).
- `public/src/` — Imagens otimizadas (`img/`) e vídeos de procedimentos (`videos/`).

## Desenvolvimento Local

```bash
npm install
npm run dev
```

## Build de Produção

```bash
npm run build
```

A versão estática final é gerada na pasta `out/`.
