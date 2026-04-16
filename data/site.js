export const bookingLink = "https://www.contate.me/chrispincelmagico";
export const whatsappDirectLink = "https://wa.me/5589994221565";
export const instagramLink = "https://www.instagram.com/chrispincelmagico/";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = repositoryName === "" || repositoryName.endsWith(".github.io");
const assetBasePath = isGithubActions && !isUserOrOrgPage ? `/${repositoryName}` : "";

export const publicAsset = (path) => `${assetBasePath}${path}`;

export const navLinks = [
  { label: "Início", href: "#home", id: "home" },
  { label: "Serviços", href: "#services", id: "services" },
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Galeria", href: "#gallery", id: "gallery" },
  { label: "Contato", href: "#contact", id: "contact" },
];

export const heroHighlights = [
  "Atendimento com hora marcada e acabamento impecável.",
  "Duas unidades para receber você com conforto e cuidado.",
  "Protocolos pensados para realçar sua beleza com naturalidade.",
];

export const serviceCategories = [
  {
    id: "sobrancelha",
    title: "Sobrancelha",
    icon: "Sparkles",
    priceLabel: "A partir de R$ 35,00",
    description:
      "Design, cor, alinhamento e micropigmentação com execução pensada para respeitar a expressão natural do rosto.",
    items: [
      { name: "Design Simples", price: "R$ 35,00" },
      { name: "Design com Henna", price: "R$ 45,00" },
      { name: "Tintura", price: "R$ 60,00" },
      { name: "Brow Lamination", price: "R$ 75,00" },
      { name: "Micropigmentação", price: "R$ 300,00" },
    ],
  },
  {
    id: "cilios",
    title: "Cílios",
    icon: "Eye",
    priceLabel: "A partir de R$ 80,00",
    description:
      "Leveza, curvatura e presença para um olhar mais marcante sem perder a elegância do resultado.",
    items: [
      { name: "Lash Lifting", price: "R$ 80,00" },
      { name: "Extensão de Cílios", price: "R$ 110,00" },
    ],
  },
  {
    id: "boca",
    title: "Boca",
    icon: "Smile",
    priceLabel: "A partir de R$ 150,00",
    description:
      "Tratamentos labiais para realçar cor, viço e contorno com acabamento suave e sofisticado.",
    items: [
      { name: "Hidra Gloss", price: "R$ 150,00" },
      { name: "Micro Labial", price: "R$ 250,00" },
    ],
  },
  {
    id: "pele",
    title: "Pele",
    icon: "Leaf",
    priceLabel: "R$ 100,00",
    description:
      "Protocolos de limpeza com sensação de frescor, viço e toque suave para uma pele bem cuidada.",
    items: [{ name: "Limpeza de Pele Vegana", price: "R$ 100,00" }],
  },
];

export const serviceOptions = serviceCategories.flatMap((category) =>
  category.items.map((item) => item.name),
);

export const aboutStats = [
  { value: "8 anos", label: "de atuação no universo da beleza" },
  { value: "2 studios", label: "em Floriano-PI e Barão-MA" },
  { value: "Atendimento autoral", label: "com escuta, técnica e delicadeza" },
];

export const galleryItems = [
  {
    id: "galeria-1",
    type: "image",
    title: "Detalhes que valorizam a expressão",
    description: "Resultados reais com acabamento leve e sofisticado.",
    src: publicAsset("/src/img/galeria1.jpg"),
    alt: "Resultado de design de sobrancelhas com acabamento delicado",
    layout: "md:col-span-5 md:row-span-5",
    minHeight: "min-h-[320px] md:min-h-0",
  },
  {
    id: "galeria-2",
    type: "image",
    title: "Curadoria de formatos",
    description: "Cada aplicação respeita traços, simetria e estilo pessoal.",
    src: publicAsset("/src/img/galeria2.jpeg"),
    alt: "Produção de beleza para sobrancelhas e olhar em close",
    layout: "md:col-span-3 md:row-span-4",
    minHeight: "min-h-[280px] md:min-h-0",
  },
  {
    id: "galeria-3",
    type: "image",
    title: "Acabamento natural",
    description: "Suavidade visual com presença elegante.",
    src: publicAsset("/src/img/galeria3.jpeg"),
    alt: "Resultado de procedimento de beleza com acabamento natural",
    layout: "md:col-span-4 md:row-span-5",
    minHeight: "min-h-[340px] md:min-h-0",
  },
  {
    id: "galeria-4",
    type: "image",
    title: "Harmonia em cada ângulo",
    description: "Beleza pensada para o rosto como um todo.",
    src: publicAsset("/src/img/galeria4.jpeg"),
    alt: "Aplicação de procedimento estético em close",
    layout: "md:col-span-4 md:row-span-4",
    minHeight: "min-h-[280px] md:min-h-0",
  },
  {
    id: "galeria-5",
    type: "image",
    title: "Texturas e definição",
    description: "Arquitetura com desenho preciso e expressão suave.",
    src: publicAsset("/src/img/galeria5.jpeg"),
    alt: "Procedimento de sobrancelhas com desenho refinado",
    layout: "md:col-span-5 md:row-span-5",
    minHeight: "min-h-[320px] md:min-h-0",
  },
  {
    id: "galeria-6",
    type: "image",
    title: "Presença feminina e polida",
    description: "Resultados que unem técnica, conforto e confiança.",
    src: publicAsset("/src/img/galeria6.jpeg"),
    alt: "Resultado final de serviço de beleza em close",
    layout: "md:col-span-3 md:row-span-4",
    minHeight: "min-h-[280px] md:min-h-0",
  },
  {
    id: "video-1",
    type: "video",
    title: "Movimento, brilho e acabamento",
    description: "Vídeo de resultado real do atendimento no studio.",
    src: publicAsset("/src/videos/video1.mp4"),
    poster: publicAsset("/src/img/thumbnail-video1.jpeg"),
    alt: "Vídeo mostrando resultado de procedimento estético",
    layout: "md:col-span-6 md:row-span-5",
    minHeight: "min-h-[360px] md:min-h-0",
  },
  {
    id: "video-2",
    type: "video",
    title: "A experiência além da foto",
    description: "Registros com textura, profundidade e brilho natural.",
    src: publicAsset("/src/videos/video2.mp4"),
    poster: publicAsset("/src/img/thumbnail-video2.jpeg"),
    alt: "Vídeo de acabamento de serviço de beleza",
    layout: "md:col-span-6 md:row-span-5",
    minHeight: "min-h-[360px] md:min-h-0",
  },
];

export const contactMethods = [
  {
    label: "WhatsApp",
    value: "(89) 99422-1565",
    href: whatsappDirectLink,
    icon: "MessageCircle",
  },
  {
    label: "Telefone",
    value: "(89) 99422-1565",
    href: "tel:+5589994221565",
    icon: "PhoneCall",
  },
  {
    label: "E-mail",
    value: "christiannebosa@hotmail.com",
    href: "mailto:christiannebosa@hotmail.com",
    icon: "Mail",
  },
];

export const studioLocations = [
  {
    id: "floriano",
    city: "Floriano-PI",
    title: "Studio em Floriano",
    address: "Avenida Bucar Neto, 1984 - Bairro Cancela, Floriano - PI",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d824.1120688071155!2d-43.00588073049223!3d-6.778563667845623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDYnNDIuOCJTIDQzwrAwMCcxOC45Ilc!5e1!3m2!1spt-BR!2sbr!4v1739486217036!5m2!1spt-BR!2sbr",
    mapLink:
      "https://maps.google.com/?q=Avenida+Bucar+Neto+1984+Cancela+Floriano+PI",
  },
  {
    id: "barao",
    city: "Barão-MA",
    title: "Studio no Barão",
    address:
      "Avenida Santa Filomena, 209 - Bairro Nossa Senhora da Guia, Barão - MA",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d824.1631011713695!2d-43.03700573049225!3d-6.748648667764998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDQnNTUuMSJTIDQzwrAwMicxMC45Ilc!5e1!3m2!1spt-BR!2sbr!4v1739486153913!5m2!1spt-BR!2sbr",
    mapLink:
      "https://maps.google.com/?q=Avenida+Santa+Filomena+209+Nossa+Senhora+da+Guia+Barao+MA",
  },
];

export const footerSocials = [
  {
    label: "Instagram",
    href: instagramLink,
    icon: "Camera",
  },
  {
    label: "WhatsApp",
    href: whatsappDirectLink,
    icon: "MessageCircle",
  },
  {
    label: "E-mail",
    href: "mailto:christiannebosa@hotmail.com",
    icon: "AtSign",
  },
];

export const paymentMethods = [
  { label: "Pix", src: publicAsset("/src/img/pix.png") },
  { label: "Crédito", src: publicAsset("/src/img/credito.png") },
  { label: "Débito", src: publicAsset("/src/img/debito.png") },
];
