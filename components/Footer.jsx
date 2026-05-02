import Image from "next/image";
import {
  AtSign,
  BadgeCheck,
  Banknote,
  Camera,
  CreditCard,
  MapPinned,
  MessageCircle,
  ScanQrCode,
} from "lucide-react";
import Container from "@/components/Container";
import {
  footerSocials,
  navLinks,
  paymentMethods,
  publicAsset,
  studioLocations,
} from "@/data/site";

const iconMap = {
  Camera,
  MessageCircle,
  AtSign,
};

const paymentMeta = {
  Pix: {
    title: "Pix",
    description: "Pagamento instantâneo para confirmar o atendimento com agilidade.",
  },
  Crédito: {
    title: "Cartão de crédito",
    description: "Flexibilidade para organizar seu cuidado com mais conforto.",
  },
  Débito: {
    title: "Cartão de débito",
    description: "Uma opção prática para finalizar o atendimento no studio.",
  },
};

const paymentVisuals = {
  Pix: {
    Icon: ScanQrCode,
    iconSurface: "bg-[#19e4c4]/18 text-[#8effef]",
    badge: "instantaneo",
  },
  Crédito: {
    Icon: CreditCard,
    iconSurface: "bg-[#86d9ff]/18 text-[#c9f0ff]",
    badge: "parcelamento",
  },
  Débito: {
    Icon: Banknote,
    iconSurface: "bg-[#b7f07b]/20 text-[#dffcc4]",
    badge: "a vista",
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#123f41] text-[#fff6ef]">
      <div className="pointer-events-none absolute left-[-4rem] top-[-3rem] h-44 w-44 rounded-full bg-white/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-4rem] right-[-4rem] h-56 w-56 rounded-full bg-[#ffb6c1]/12 blur-3xl" />

      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.72fr_0.9fr] lg:gap-10">
          <div className="space-y-6">
            <div className="relative h-16 w-[170px]">
              <Image
                src={publicAsset("/src/img/chris-logo-2.png")}
                alt="Logo secundária Chris Pincel Mágico"
                fill
                loading="eager"
                sizes="170px"
                className="object-contain object-left"
              />
            </div>

            <p className="max-w-md text-sm leading-7 text-white/74">
              Um studio de beleza pensado para mulheres que valorizam acabamento limpo,
              atendimento gentil e uma presença visual elegante em cada detalhe.
            </p>

            <div className="flex flex-wrap gap-3">
              {studioLocations.map((location) => (
                <span
                  key={location.id}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/82"
                >
                  <MapPinned size={15} />
                  {location.city}
                </span>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-[#ffdfd0]" size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffdfd0]">
                  Formas de pagamento
                </p>
              </div>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                Atendimento com confirmação simples e opções práticas para você finalizar
                tudo com clareza.
              </p>

              <div className="mt-5 grid gap-3">
                {paymentMethods.map((method) => {
                  const meta = paymentMeta[method.label] ?? {
                    title: method.label,
                    description: "Disponível no atendimento.",
                  };
                  const visual = paymentVisuals[method.label] ?? paymentVisuals.Pix;
                  const PaymentIcon = visual.Icon;

                  return (
                    <div
                      key={method.label}
                      className="group rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.05))] px-4 py-4"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] border border-white/12 ${visual.iconSurface}`}
                        >
                          <PaymentIcon size={20} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-white/92">{meta.title}</p>
                            <span className="rounded-full border border-white/12 bg-white/8 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/66">
                              {visual.badge}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-white/64">
                            {meta.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffdfd0]">
                Navegação
              </p>
              <nav className="mt-5 grid gap-3">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/76 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffdfd0]">
              Social & Contato
            </p>
            <div className="mt-5 grid gap-3">
              {footerSocials.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/82 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
              <div className="flex items-center gap-3">
                <CreditCard className="text-[#ffdfd0]" size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffdfd0]">
                  Atendimento
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Confirmação rápida, horário reservado e acolhimento pensado para sua
                experiência do início ao final.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/58">
          <p>© 2026 Chris Pincel Mágico. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
