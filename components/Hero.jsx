import Image from "next/image";
import { ArrowUpRight, Gem } from "lucide-react";
import Container from "@/components/Container";
import { bookingLink, publicAsset } from "@/data/site";

const heroStats = [
  { value: "10+", label: "anos de experiência" },
  { value: "2", label: "unidades de atendimento" },
  { value: "100%", label: "hora marcada" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f4_0%,#fffaf6_58%,#fff7f2_100%)] pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute left-[-7rem] top-0 h-[22rem] w-[22rem] rounded-full bg-[#ffb6c1]/24 blur-3xl" />
      <div className="pointer-events-none absolute right-[-9rem] top-[6rem] hidden h-[26rem] w-[26rem] rounded-full bg-[#0c6e70]/12 blur-3xl lg:block" />

      <div className="absolute inset-x-0 top-0 h-[47vh] overflow-hidden lg:hidden">
        <Image
          src={publicAsset("/src/img/chris-salao.png")}
          alt="Chris Pincel Mágico em seu studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[32%_18%]"
        />
        <div className="pointer-events-none absolute right-[-4rem] top-[3rem] h-44 w-44 rounded-full bg-[#0c6e70]/14 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,18,0.16)_0%,rgba(24,18,18,0.08)_36%,rgba(255,248,244,0.74)_72%,rgba(255,248,244,0.96)_90%,#fff8f4_100%)]" />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-[56vw] overflow-hidden lg:block">
        <Image
          src={publicAsset("/src/img/chris-salao.png")}
          alt="Chris Pincel Mágico em seu studio"
          fill
          priority
          sizes="56vw"
          className="object-cover object-[36%_18%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8f4_0%,rgba(255,248,244,0.88)_14%,rgba(255,248,244,0.28)_34%,rgba(24,18,18,0.06)_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-6rem)] items-end gap-10 pb-14 sm:pb-16 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:pb-20">
          <div className="space-y-8 pt-[38vh] sm:pt-[40vh] lg:pt-0">
            <div className="space-y-5">
              <span className="section-kicker">
                <Gem size={14} />
                Floriano-PI e Barão-MA
              </span>

              <div className="space-y-5">
                <h1 className="font-display text-[3rem] leading-[0.9] text-[#2d2625] text-balance sm:text-[4.15rem] lg:max-w-[11ch] lg:text-[5.15rem]">
                  Design Personalizado a partir de R$ 35,00
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[#6d615d] sm:text-lg lg:text-xl">
                  Sobrancelhas, cílios, pele e cuidados autorais em uma experiência de
                  studio criada para valorizar sua beleza com leveza, técnica e
                  sofisticação.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={bookingLink} target="_blank" rel="noreferrer" className="btn-primary">
                Agendar atendimento
                <ArrowUpRight size={16} />
              </a>
              <a href="#services" className="btn-secondary">
                Conhecer serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:max-w-[36rem]">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel luxury-outline rounded-[1.5rem] px-4 py-4 sm:px-5 sm:py-5"
                >
                  <p className="text-2xl font-semibold text-[#2d2625] sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-5 text-[#6d615d] sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}
