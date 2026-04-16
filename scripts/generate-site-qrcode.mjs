import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const defaultSiteUrl = "https://pedrobosa.github.io/chrispincelmagico/";
const siteUrl = process.argv[2]?.trim() || process.env.SITE_URL?.trim() || defaultSiteUrl;

const logoPath = path.resolve(projectRoot, "public/src/img/chris-logo.png");
const cleanQrPath = path.resolve(projectRoot, "public/src/img/qrcode-site.png");
const brandedQrPath = path.resolve(projectRoot, "public/src/img/qrcode-site-logo.png");

const qrSize = 1800;
const logoPanelSize = 360;
const logoMaxWidth = 300;
const logoMaxHeight = 128;
const qrDarkColor = "#0D6768";
const qrLightColor = "#FFFFFFFF";

const panelLeft = Math.round((qrSize - logoPanelSize) / 2);
const panelTop = Math.round((qrSize - logoPanelSize) / 2);

const logoPanelSvg = `
<svg width="${logoPanelSize}" height="${logoPanelSize}" viewBox="0 0 ${logoPanelSize} ${logoPanelSize}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${logoPanelSize}" height="${logoPanelSize}" rx="72" ry="72" fill="#FFFFFF"/>
  <rect x="8" y="8" width="${logoPanelSize - 16}" height="${logoPanelSize - 16}" rx="64" ry="64" fill="none" stroke="#E7EAEE" stroke-width="2"/>
</svg>
`;

await fs.mkdir(path.dirname(brandedQrPath), { recursive: true });

await QRCode.toFile(cleanQrPath, siteUrl, {
  type: "png",
  width: qrSize,
  margin: 3,
  errorCorrectionLevel: "H",
  color: {
    dark: qrDarkColor,
    light: qrLightColor,
  },
});

const resizedLogoBuffer = await sharp(logoPath)
  .resize({
    width: logoMaxWidth,
    height: logoMaxHeight,
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .png()
  .toBuffer();

const resizedLogoMetadata = await sharp(resizedLogoBuffer).metadata();
const logoLeft = Math.round((qrSize - (resizedLogoMetadata.width ?? logoMaxWidth)) / 2);
const logoTop = Math.round((qrSize - (resizedLogoMetadata.height ?? logoMaxHeight)) / 2);

await sharp(cleanQrPath)
  .composite([
    {
      input: Buffer.from(logoPanelSvg),
      left: panelLeft,
      top: panelTop,
    },
    {
      input: resizedLogoBuffer,
      left: logoLeft,
      top: logoTop,
    },
  ])
  .png()
  .toFile(brandedQrPath);

console.log("QR code gerado com sucesso.");
console.log(`URL: ${siteUrl}`);
console.log(`Arquivo sem logo: ${path.relative(projectRoot, cleanQrPath)}`);
console.log(`Arquivo com logo: ${path.relative(projectRoot, brandedQrPath)}`);
