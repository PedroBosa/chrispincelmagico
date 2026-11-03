import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import { bookingLink, publicAsset } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf7f2] pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
          {/* Coluna de Conteúdo */}
          <div className="flex flex-col items-start text-left">
            <span className="section-kicker mb-4">
              Floriano-PI · Barão de Grajaú-MA
            </span>

            <h1 className="font-display text-[2.35rem] sm:text-5xl lg:text-[3.65rem] font-semibold text-[#25201f] leading-[1.06] tracking-tight text-balance">
              Sobrancelhas, cílios e lábios feitos{" "}
              <span className="text-[#0c6e70] italic font-normal">
                com calma e precisão.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-[1.06rem] text-[#5f5552] leading-relaxed max-w-xl">
              Design de sobrancelhas, micropigmentação e estética facial
              pensados para a estrutura do seu rosto. Mais de dez anos cuidando
              da beleza real com hora marcada em Floriano-PI e Barão de
              Grajaú-MA.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowUpRight size={17} />
              </a>

              <a href="#services" className="btn-secondary text-center">
                Ver tabela de valores
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-[#25201f]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5f5552]">
              <span>Atendimento individual com hora marcada</span>
              <span className="hidden sm:inline text-[#25201f]/25">•</span>
              <span>Unidades em Floriano-PI e Barão de Grajaú-MA</span>
            </div>
          </div>

          {/* Coluna Visual: Christianne no Studio */}
          <div className="w-full max-w-[460px] mx-auto lg:max-w-none">
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#25201f]/10 bg-[#eee6dc] shadow-[0_18px_40px_-15px_rgba(37,32,31,0.12)]">
                <Image
                  src={publicAsset("/src/img/chris-salao.webp")}
                  alt="Christianne em seu studio de beleza Chris Pincel Mágico"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 460px"
                  className="object-cover object-[48%_20%]"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-xs text-[#685e5a] px-1">
                <span className="font-medium text-[#25201f]">Christianne</span>
                <span>Especialista em Olhar & Micropigmentação</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
