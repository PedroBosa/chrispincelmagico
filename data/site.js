export const bookingLink = "https://www.contate.me/chrispincelmagico";
export const whatsappDirectLink = "https://wa.me/5589994221565";
export const instagramLink = "https://www.instagram.com/chrispincelmagico/";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = repositoryName === "" || repositoryName.endsWith(".github.io");
const isCustomDomain = process.env.CUSTOM_DOMAIN === "1" || typeof window !== "undefined" && !window.location.pathname.startsWith(`/${repositoryName}`);
const assetBasePath = isCustomDomain ? "" : (isGithubActions && !isUserOrOrgPage ? `/${repositoryName}` : "");

export const publicAsset = (path) => `${assetBasePath}${path}`;

export const navLinks = [
  { label: "Início", href: "#home", id: "home" },
  { label: "Serviços", href: "#services", id: "services" },
  { label: "Sobre a Chris", href: "#about", id: "about" },
  { label: "Resultados", href: "#gallery", id: "gallery" },
  { label: "Studios & Contato", href: "#contact", id: "contact" },
];

export const heroHighlights = [
  "Atendimento individual com hora marcada",
  "Studios próprios em Floriano-PI e Barão de Grajaú-MA",
  "Resultados naturais que valorizam a sua beleza real",
];

export const serviceCategories = [
  {
    id: "sobrancelha",
    title: "Sobrancelhas",
    icon: "Sparkles",
    priceLabel: "A partir de R$ 35,00",
    description:
      "Técnicas personalizadas para harmonizar o seu olhar, respeitando o formato natural do seu rosto.",
    items: [
      { name: "Design Simples", price: "R$ 35,00" },
      { name: "Design com Henna", price: "R$ 45,00" },
      { name: "Tintura de Sobrancelhas", price: "R$ 60,00" },
      { name: "Brow Lamination", price: "R$ 75,00" },
      { name: "Micropigmentação Fio a Fio", price: "R$ 300,00" },
    ],
  },
  {
    id: "cilios",
    title: "Cílios",
    icon: "Eye",
    priceLabel: "A partir de R$ 80,00",
    description:
      "Curvatura, volume e definição para você acordar todos os dias pronta e com olhar marcante.",
    items: [
      { name: "Lash Lifting", price: "R$ 80,00" },
      { name: "Extensão de Cílios", price: "R$ 110,00" },
    ],
  },
  {
    id: "boca",
    title: "Lábios",
    icon: "Smile",
    priceLabel: "A partir de R$ 150,00",
    description:
      "Hidratação profunda, cor saudável e contorno sutil para valorizar seus lábios com naturalidade.",
    items: [
      { name: "Hidra Gloss", price: "R$ 150,00" },
      { name: "Micropigmentação Labial", price: "R$ 250,00" },
    ],
  },
  {
    id: "pele",
    title: "Pele & Depilação",
    icon: "Leaf",
    priceLabel: "A partir de R$ 25,00",
    description:
      "Cuidados faciais com produtos veganos e depilação suave para deixar sua pele limpa, macia e renovada.",
    items: [
      { name: "Limpeza de Pele Vegana", price: "R$ 100,00" },
      { name: "Depilação de Buço", price: "R$ 25,00" },
      { name: "Depilação de Axila", price: "R$ 35,00" },
    ],
  },
];

export const serviceOptions = serviceCategories.flatMap((category) =>
  category.items.map((item) => item.name),
);

export const aboutStats = [
  { value: "10+ anos", label: "dedicados à estética e ao olhar" },
  { value: "2 studios", label: "em Floriano-PI e Barão-MA" },
  { value: "1 a 1", label: "atendimento exclusivo e humanizado" },
];

export const galleryItems = [
  {
    id: "galeria-1",
    type: "image",
    title: "Design de Sobrancelhas Autoral",
    description: "Alinhamento e preenchimento respeitando a simetria única do rosto.",
    src: publicAsset("/src/img/galeria1.jpg"),
    alt: "Design de sobrancelhas com acabamento natural",
    layout: "md:col-span-5 md:row-span-5",
    minHeight: "min-h-[320px] md:min-h-0",
  },
  {
    id: "galeria-2",
    type: "image",
    title: "Olhar Marcante e Definido",
    description: "Curvatura dos cílios combinada com sobrancelhas desenhadas com precisão.",
    src: publicAsset("/src/img/galeria2.jpeg"),
    alt: "Produção de sobrancelhas e cílios em close",
    layout: "md:col-span-3 md:row-span-4",
    minHeight: "min-h-[280px] md:min-h-0",
  },
  {
    id: "galeria-3",
    type: "image",
    title: "Acabamento Suave e Elegante",
    description: "Sem traços pesados ou artificiais: você linda e natural.",
    src: publicAsset("/src/img/galeria3.jpeg"),
    alt: "Resultado de procedimento com acabamento suave",
    layout: "md:col-span-4 md:row-span-5",
    minHeight: "min-h-[340px] md:min-h-0",
  },
  {
    id: "galeria-4",
    type: "image",
    title: "Micropigmentação Fio a Fio",
    description: "Fios desenhados um a um acompanhando o sentido do pelo real.",
    src: publicAsset("/src/img/galeria4.jpeg"),
    alt: "Micropigmentação de sobrancelha em close",
    layout: "md:col-span-4 md:row-span-4",
    minHeight: "min-h-[280px] md:min-h-0",
  },
  {
    id: "galeria-5",
    type: "image",
    title: "Definição e Preenchimento com Henna",
    description: "Coloração sob medida para realçar a tonalidade da pele e dos pelos.",
    src: publicAsset("/src/img/galeria5.jpeg"),
    alt: "Procedimento de henna em sobrancelha",
    layout: "md:col-span-5 md:row-span-5",
    minHeight: "min-h-[320px] md:min-h-0",
  },
  {
    id: "galeria-6",
    type: "image",
    title: "Lábios com Cor e Contorno Saudável",
    description: "Efeito revitalizado com tom suave que dispensa o batom diário.",
    src: publicAsset("/src/img/galeria6.jpeg"),
    alt: "Resultado de micropigmentação labial",
    layout: "md:col-span-3 md:row-span-4",
    minHeight: "min-h-[280px] md:min-h-0",
  },
  {
    id: "video-1",
    type: "video",
    title: "Atendimento Real no Studio",
    description: "Veja de perto o carinho e o cuidado em cada etapa do atendimento.",
    src: publicAsset("/src/videos/video1.mp4"),
    poster: publicAsset("/src/img/thumbnail-video1.jpeg"),
    alt: "Vídeo mostrando atendimento no studio",
    layout: "md:col-span-6 md:row-span-5",
    minHeight: "min-h-[360px] md:min-h-0",
  },
  {
    id: "video-2",
    type: "video",
    title: "Detalhes de Textura e Brilho",
    description: "O acabamento impecável que só uma técnica refinada entrega.",
    src: publicAsset("/src/videos/video2.mp4"),
    poster: publicAsset("/src/img/thumbnail-video2.jpeg"),
    alt: "Vídeo com resultado final de sobrancelhas",
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
