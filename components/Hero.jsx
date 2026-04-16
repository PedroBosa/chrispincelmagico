import Image from "next/image";
import { ArrowUpRight, Gem } from "lucide-react";
import Container from "@/components/Container";
import { bookingLink, publicAsset } from "@/data/site";

const heroStats = [
  { value: "10+", label: "anos de experiência" },
  { value: "2", label: "unidades de atendimento" },
  { value: "100%", label: "hora marcada" },
];

const heroHighlights = [
  "Atendimento com hora marcada",
  "Acabamento natural e sofisticado",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff9f5_0%,#fff7f3_48%,#fff4ee_100%)] [min-height:100svh]"
    >
      <div className="pointer-events-none absolute -left-28 -top-16 h-[24rem] w-[24rem] rounded-full bg-[#ffb6c1]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[14%] h-[21rem] w-[21rem] rounded-full bg-[#0c6e70]/16 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.14]" />

      <div className="absolute inset-0 overflow-hidden lg:hidden">
        <Image
          src={publicAsset("/src/img/chris-salao.png")}
          alt="Chris Pincel Mágico em seu studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_18%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,17,0.34)_0%,rgba(20,17,17,0.17)_34%,rgba(255,248,244,0.78)_68%,rgba(255,248,244,0.96)_84%,#fff8f4_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-screen items-end gap-8 pb-8 pt-24 [min-height:100svh] sm:pb-12 sm:pt-28 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,0.92fr)] lg:items-center lg:gap-10 lg:pb-16 lg:pt-28">
          <div className="w-full max-w-2xl space-y-5 lg:space-y-6">
            <div className="glass-panel luxury-outline rounded-[2rem] p-6 sm:p-8">
              <div className="space-y-5 sm:space-y-6">
                <span className="section-kicker">
                  <Gem size={14} />
                  Floriano-PI e Barão-MA
                </span>

                <div className="flex flex-wrap gap-2">
                  {heroHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/65 bg-white/74 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#0c6e70]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-[2.7rem] leading-[0.92] text-[#2d2625] text-balance sm:text-[4rem] lg:max-w-[11ch] lg:text-[5.05rem]">
                    Design Personalizado a partir de R$ 35,00
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-[#5f5450] sm:text-lg lg:text-[1.2rem]">
                    Sobrancelhas, cílios, pele e cuidados autorais em uma experiência de
                    studio criada para valorizar sua beleza com leveza, técnica e
                    sofisticação.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Agendar atendimento
                    <ArrowUpRight size={16} />
                  </a>
                  <a href="#services" className="btn-secondary w-full sm:w-auto">
                    Conhecer serviços
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel luxury-outline rounded-[1.35rem] px-4 py-4 sm:px-5 sm:py-5"
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

          <div className="relative hidden lg:block">
            <div className="pointer-events-none absolute -left-12 top-20 h-40 w-40 rounded-full bg-[#0c6e70]/16 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-14 h-44 w-44 rounded-full bg-[#ffb6c1]/28 blur-3xl" />

            <div className="glass-panel luxury-outline relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[2.4rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src={publicAsset("/src/img/chris-salao.png")}
                  alt="Chris Pincel Mágico em seu studio"
                  fill
                  priority
                  sizes="(max-width: 1279px) 46vw, 34rem"
                  className="object-cover object-[36%_18%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,14,0.14)_0%,rgba(18,14,14,0)_40%,rgba(18,14,14,0.22)_100%)]" />
              </div>

              <div className="pointer-events-none absolute inset-x-7 bottom-7 rounded-[1.15rem] border border-white/45 bg-[#111111]/24 px-4 py-3 backdrop-blur-lg">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/84">
                  Assinatura Chris Pincel Mágico
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Delicadeza, técnica e acabamento premium em cada detalhe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
