# Chris Pincel Mágico

Site institucional da Chris Pincel Mágico em `Next.js` com export estático pronto para deploy no `GitHub Pages`.

## Stack

- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Framer Motion`

## Estrutura ativa

- `app/`: rotas e layout do App Router
- `components/`: componentes de interface
- `data/`: conteúdo estruturado do site
- `public/`: imagens e vídeos servidos no build

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O build gera a pasta `out/`, compatível com `GitHub Pages`.

## Deploy no GitHub Pages

1. Envie o projeto para a branch `main`.
2. No repositório do GitHub, abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. O workflow `.github/workflows/deploy-pages.yml` fará o deploy automaticamente.

## Observações

- O projeto já detecta automaticamente o nome do repositório no GitHub Actions para ajustar `basePath` e assets.
- Arquivos legados como `index.html` e a pasta `src/` não fazem parte da aplicação `Next.js` atual.
