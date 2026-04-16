import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Gem, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import { bookingLink, heroHighlights, publicAsset } from "@/data/site";

const heroStats = [
  { value: "10+", label: "anos de experiência" },
  { value: "2", label: "unidades de atendimento" },
  { value: "100%", label: "hora marcada" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen min-h-[100svh] lg:h-[100svh] bg-[linear-gradient(170deg,#fff9f4_0%,#fff5ef_42%,#fff7f2_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.1] lg:opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_85%)]" />
      <div className="animate-hero-drift pointer-events-none absolute left-[-9rem] top-[-7rem] h-[23rem] w-[23rem] rounded-full bg-[#ffb6c1]/36 blur-3xl" />
      <div className="animate-hero-drift-delay pointer-events-none absolute right-[-10rem] top-[8%] h-[24rem] w-[24rem] rounded-full bg-[#0c6e70]/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-[30%] h-[26rem] w-[26rem] rounded-full bg-[#ffe1e8]/42 blur-3xl" />

      <div className="absolute inset-x-0 top-0 h-[100svh] overflow-hidden lg:hidden">
        <Image
          src={publicAsset("/src/img/chris-salao.png")}
          alt="Chris Pincel Mágico em seu studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[43%_18%]"
        />
        <div className="pointer-events-none absolute right-[-4rem] top-[3rem] h-44 w-44 rounded-full bg-[#0c6e70]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,22,22,0.44)_0%,rgba(28,22,22,0.18)_26%,rgba(255,248,244,0.76)_56%,rgba(255,248,244,0.95)_79%,#fff8f4_100%)]" />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-[56vw] lg:block">
        <div className="relative h-full w-full overflow-hidden rounded-l-[4rem] border-l border-white/55 shadow-[-22px_0_76px_rgba(41,26,26,0.12)]">
          <Image
            src={publicAsset("/src/img/chris-salao.png")}
            alt="Chris Pincel Mágico em seu studio"
            fill
            priority
            sizes="56vw"
            className="object-cover object-[37%_18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,244,0.96)_0%,rgba(255,248,244,0.56)_14%,rgba(255,248,244,0.12)_33%,rgba(24,18,18,0.04)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_50%,rgba(0,0,0,0)_22%,rgba(0,0,0,0.16)_100%)]" />
        </div>
      </div>

      <Container className="relative z-10 h-full">
        <div className="grid min-h-screen min-h-[100svh] items-end gap-8 pb-7 pt-[6.05rem] sm:gap-10 sm:pb-12 sm:pt-[7rem] lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10 lg:pb-5 lg:pt-[7.1rem]">
          <div className="space-y-6 sm:space-y-8 lg:max-w-[40rem] lg:space-y-5 lg:rounded-[2rem] lg:border lg:border-white/65 lg:bg-white/56 lg:p-5 lg:shadow-[0_26px_72px_rgba(41,26,26,0.11)] lg:backdrop-blur-xl">
            <div className="space-y-4 sm:space-y-5 lg:space-y-3">
              <span className="section-kicker">
                <Gem size={14} />
                Floriano-PI e Barão-MA
              </span>

              <div className="space-y-4 sm:space-y-5 lg:space-y-3">
                <h1 className="font-display text-[2.7rem] leading-[0.9] text-[#2d2625] text-balance sm:text-[4rem] lg:max-w-[10ch] lg:text-[3.9rem]">
                  O olhar certo muda tudo. <span className="text-[#0c6e70]">Comece por você.</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[#6d615d] sm:text-lg lg:max-w-[33rem] lg:text-[0.98rem] lg:leading-6">
                  Sobrancelhas, cílios, pele e cuidados autorais em uma experiência de
                  studio criada para valorizar sua beleza com leveza, técnica e
                  sofisticação.
                </p>
              </div>
            </div>

            <ul className="space-y-2 lg:max-w-[34rem]">
              {heroHighlights.map((highlight, index) => (
                <li
                  key={highlight}
                  className={[
                    "items-start gap-2.5 text-sm text-[#4f4643] sm:text-[0.95rem] lg:text-[0.84rem]",
                    index === 2 ? "hidden xl:flex" : "flex",
                  ].join(" ")}
                >
                  <BadgeCheck className="mt-[2px] h-4 w-4 shrink-0 text-[#0c6e70]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary lg:px-5 lg:py-3 lg:text-[0.9rem]"
              >
                Agendar atendimento
                <ArrowUpRight size={16} />
              </a>
              <a href="#services" className="btn-secondary lg:px-5 lg:py-3 lg:text-[0.9rem]">
                Conhecer serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:max-w-[34rem]">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel luxury-outline rounded-[1.4rem] px-3 py-3 sm:rounded-[1.5rem] sm:px-5 sm:py-5 lg:px-4 lg:py-3.5"
                >
                  <p className="text-[1.5rem] font-semibold text-[#2d2625] sm:text-3xl lg:text-[1.62rem]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-4 text-[#6d615d] sm:text-sm sm:leading-5 lg:text-[0.74rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-full xl:block">
            <div className="animate-hero-float glass-panel luxury-outline absolute bottom-[20%] right-[4%] w-[16.5rem] rounded-[1.75rem] p-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#0c6e70]/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#0c6e70]">
                <Sparkles size={12} className="animate-hero-pulse" />
                atendimento premium
              </p>
              <h3 className="mt-3 font-display text-[1.6rem] leading-[0.95] text-[#2d2625]">
                Agenda com vagas limitadas
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5d524f]">
                Sessões personalizadas para quem busca resultado elegante e natural.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
