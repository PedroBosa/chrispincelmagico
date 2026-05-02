
// Detecta domínio personalizado para corrigir basePath/assetPrefix
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repositoryName === "" || repositoryName.endsWith(".github.io");
const customDomain = process.env.CUSTOM_DOMAIN || false;
const basePath = customDomain ? "" : (isGithubActions && !isUserOrOrgPage ? `/${repositoryName}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
