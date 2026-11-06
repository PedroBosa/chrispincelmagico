export const bookingLink = "https://www.contate.me/chrispincelmagico";
export const whatsappDirectLink = "https://wa.me/5589994221565";
export const instagramLink = "https://www.instagram.com/chrispincelmagico/";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage =
  repositoryName === "" || repositoryName.endsWith(".github.io");
const isCustomDomain =
  process.env.CUSTOM_DOMAIN === "1" ||
  (typeof window !== "undefined" &&
    !window.location.pathname.startsWith(`/${repositoryName}`));
const assetBasePath = isCustomDomain
  ? ""
  : isGithubActions && !isUserOrOrgPage
    ? `/${repositoryName}`
    : "";

export const publicAsset = (path) => `${assetBasePath}${path}`;

export const navLinks = [
  { label: "Início", href: "#home", id: "home" },
  { label: "Procedimentos", href: "#services", id: "services" },
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Resultados", href: "#gallery", id: "gallery" },
  { label: "Contato", href: "#contact", id: "contact" },
];

export const serviceCategories = [
  {
    id: "sobrancelha",
    number: "01",
    title: "Sobrancelhas",
    description:
      "Alinhamento, preenchimento e definição sob medida para o formato do seu rosto.",
    items: [
      { name: "Design Simples", price: "R$ 35" },
      { name: "Design com Henna", price: "R$ 45" },
      { name: "Tintura de Sobrancelhas", price: "R$ 60" },
      { name: "Brow Lamination", price: "R$ 75" },
      { name: "Micropigmentação Fio a Fio", price: "R$ 300" },
    ],
  },
  {
    id: "cilios",
    number: "02",
    title: "Cílios",
    description:
      "Curvatura natural e extensão delicada para destacar o olhar no dia a dia.",
    items: [
      { name: "Lash Lifting", price: "R$ 80" },
      { name: "Extensão de Cílios", price: "R$ 110" },
    ],
  },
  {
    id: "boca",
    number: "03",
    title: "Lábios",
    description:
      "Hidratação intensiva e revitalização de cor com acabamento suave.",
    items: [
      { name: "Hidra Gloss", price: "R$ 150" },
      { name: "Micropigmentação Labial", price: "R$ 250" },
    ],
  },
  {
    id: "pele",
    number: "04",
    title: "Pele & Depilação",
    description:
      "Cuidados faciais com ativos veganos e epilação delicada.",
    items: [
      { name: "Limpeza de Pele Vegana", price: "R$ 100" },
      { name: "Depilação de Buço", price: "R$ 15" },
      { name: "Depilação de Axila", price: "R$ 20" },
    ],
  },
];

export const serviceOptions = serviceCategories.flatMap((category) =>
  category.items.map((item) => item.name),
);

export const galleryItems = [
  {
    id: "galeria-1",
    type: "image",
    title: "Design de sobrancelhas",
    tag: "Sobrancelhas",
    src: publicAsset("/src/img/galeria1.jpg"),
    alt: "Antes e depois de design de sobrancelhas com acabamento natural",
  },
  {
    id: "galeria-2",
    type: "image",
    title: "Alinhamento e definição do olhar",
    tag: "Sobrancelhas",
    src: publicAsset("/src/img/galeria2.jpeg"),
    alt: "Resultado de design de sobrancelhas em close",
  },
  {
    id: "galeria-3",
    type: "image",
    title: "Design com henna sob medida",
    tag: "Henna",
    src: publicAsset("/src/img/galeria3.jpeg"),
    alt: "Resultado de design com henna suave",
  },
  {
    id: "galeria-4",
    type: "image",
    title: "Micropigmentação fio a fio",
    tag: "Micropigmentação",
    src: publicAsset("/src/img/galeria4.jpeg"),
    alt: "Micropigmentação de sobrancelha fio a fio em close",
  },
  {
    id: "galeria-5",
    type: "image",
    title: "Lash lifting e sobrancelhas",
    tag: "Cílios & Olhar",
    src: publicAsset("/src/img/galeria5.jpeg"),
    alt: "Procedimento de lash lifting e sobrancelhas alinhadas",
  },
  {
    id: "galeria-6",
    type: "image",
    title: "Micropigmentação labial e design",
    tag: "Lábios & Olhar",
    src: publicAsset("/src/img/galeria6.jpeg"),
    alt: "Resultado de micropigmentação labial e design de sobrancelhas",
  },
  {
    id: "video-1",
    type: "video",
    title: "Acabamento de design no studio",
    tag: "Em atendimento",
    src: publicAsset("/src/videos/video1.mp4"),
    poster: publicAsset("/src/img/thumbnail-video1.jpeg"),
    alt: "Vídeo mostrando procedimento de sobrancelhas no studio",
  },
  {
    id: "video-2",
    type: "video",
    title: "Detalhes de lash lifting e sobrancelhas",
    tag: "Resultado em vídeo",
    src: publicAsset("/src/videos/video2.mp4"),
    poster: publicAsset("/src/img/thumbnail-video2.jpeg"),
    alt: "Vídeo em close com resultado final de cílios e sobrancelhas",
  },
];

export const contactMethods = [
  {
    label: "WhatsApp & Telefone",
    value: "(89) 99422-1565",
    href: whatsappDirectLink,
  },
  {
    label: "Instagram",
    value: "@chrispincelmagico",
    href: instagramLink,
  },
  {
    label: "E-mail",
    value: "christiannebosa@hotmail.com",
    href: "mailto:christiannebosa@hotmail.com",
  },
];

export const studioLocations = [
  {
    id: "floriano",
    city: "Floriano-PI",
    title: "Studio em Floriano",
    address: "Avenida Bucar Neto, 1984 — Bairro Cancela, Floriano-PI",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d824.1120688071155!2d-43.00588073049223!3d-6.778563667845623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDYnNDIuOCJTIDQzwrAwMCcxOC45Ilc!5e1!3m2!1spt-BR!2sbr!4v1739486217036!5m2!1spt-BR!2sbr",
    mapLink:
      "https://maps.google.com/?q=Avenida+Bucar+Neto+1984+Cancela+Floriano+PI",
  },
  {
    id: "barao",
    city: "Barão de Grajaú-MA",
    title: "Studio em Barão de Grajaú",
    address:
      "Avenida Santa Filomena, 209 — Bairro Nossa Senhora da Guia, Barão de Grajaú-MA",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d824.1631011713695!2d-43.03700573049225!3d-6.748648667764998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDQnNTUuMSJTIDQzwrAwMicxMC45Ilc!5e1!3m2!1spt-BR!2sbr!4v1739486153913!5m2!1spt-BR!2sbr",
    mapLink:
      "https://maps.google.com/?q=Avenida+Santa+Filomena+209+Nossa+Senhora+da+Guia+Barao+de+Grajau+MA",
  },
];

export const footerSocials = [
  {
    label: "Instagram",
    value: "@chrispincelmagico",
    href: instagramLink,
  },
  {
    label: "WhatsApp",
    value: "(89) 99422-1565",
    href: whatsappDirectLink,
  },
  {
    label: "E-mail",
    value: "christiannebosa@hotmail.com",
    href: "mailto:christiannebosa@hotmail.com",
  },
];
