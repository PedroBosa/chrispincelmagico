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
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(180deg,#fff8f4_0%,#fffaf6_58%,#fff7f2_100%)] pt-20"
    >
      {/* Elementos Decorativos */}
      <div className="pointer-events-none absolute left-[-10vw] top-[-5vh] h-[40vw] w-[40vw] rounded-full bg-[#ffb6c1]/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-10vh] right-[-10vw] hidden h-[45vw] w-[45vw] rounded-full bg-[#0c6e70]/10 blur-[120px] lg:block" />

      {/* Imagem Mobile (Cobre a tela inteira em Mobile) */}
      <div className="absolute inset-0 block h-full w-full lg:hidden">
        <Image
          src={publicAsset("/src/img/chris-salao.png")}
          alt="Chris Pincel Mágico em seu studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_20%]"
        />
        {/* Gradiente forte para dar leitura ao texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f4] via-[#fff8f4]/90 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Imagem Desktop (Metade direita) */}
      <div className="absolute inset-y-0 right-0 hidden w-[55vw] lg:block">
        <Image
          src={publicAsset("/src/img/chris-salao.png")}
          alt="Chris Pincel Mágico em seu studio"
          fill
          priority
          sizes="55vw"
          className="object-cover object-[40%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f4] via-[#fff8f4]/80 to-transparent" />
      </div>

      <Container className="relative z-10 flex h-full grow flex-col justify-end pb-12 pt-[40vh] lg:block lg:justify-center lg:pb-0 lg:pt-0">
        <div className="grid h-full items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#ffb6c1]/40 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#d07584] shadow-sm backdrop-blur-md">
                <Gem size={14} className="text-[#0c6e70]" />
                Floriano-PI e Barão-MA
              </span>

              <div className="space-y-6">
                <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-[#2d2625] sm:text-6xl lg:text-[5.5rem]">
                  Design Personalizado a partir de <i className="font-serif italic text-[#0c6e70]">R$ 35,00</i>
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-[#5a4f4c] sm:text-xl lg:max-w-xl">
                  Sobrancelhas, cílios, pele e cuidados autorais em uma experiência de
                  studio criada para valorizar sua beleza com leveza, técnica e
                  sofisticação.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={bookingLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#2d2625] px-8 py-4 text-[0.95rem] font-medium text-white transition-all hover:bg-[#0c6e70] hover:shadow-lg hover:shadow-[#0c6e70]/20">
                Agendar atendimento
                <ArrowUpRight size={18} />
              </a>
              <a href="#services" className="flex items-center justify-center rounded-full border border-[#d2c5bf] bg-white/50 px-8 py-4 text-[0.95rem] font-medium text-[#2d2625] shadow-sm backdrop-blur transition-all hover:bg-white hover:text-[#0c6e70]">
                Conhecer serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 lg:max-w-[38rem]">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/40 bg-white/60 p-5 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[#0c6e70] sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-center text-[0.75rem] font-medium uppercase tracking-wide text-[#6d615d]">
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
