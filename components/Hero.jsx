import Image from "next/image";
import { ArrowUpRight, Check, MapPin, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import { bookingLink, publicAsset } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf7f2] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
          {/* Coluna de Conteúdo e Chamada */}
          <div className="flex flex-col items-start text-left">
            {/* Kicker editorial */}
            <div className="section-kicker mb-5">
              <Sparkles size={14} className="text-[#0c6e70]" />
              <span>Studio de Beleza do Olhar</span>
            </div>

            {/* Título Principal Humanizado */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold text-[#25201f] leading-[1.08] tracking-tight text-balance">
              Sua beleza natural realçada com{" "}
              <span className="text-[#0c6e70] italic font-normal">harmonia, delicadeza e precisão.</span>
            </h1>

            {/* Subtítulo caloroso e autêntico */}
            <p className="mt-6 text-base sm:text-lg text-[#5f5552] leading-relaxed max-w-xl">
              Design de sobrancelhas, micropigmentação e estética labial feitas sob medida para o seu rosto. Há mais de 10 anos cuidando com carinho da autoestima de mulheres em Floriano e Barão.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <span>Agendar Horário no WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#services"
                className="btn-secondary text-center"
              >
                Ver Procedimentos e Valores
              </a>
            </div>

            {/* Pilares Reais de Confiança (sem métricas frias de SaaS) */}
            <div className="mt-10 pt-8 border-t border-[#25201f]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 text-sm text-[#463e3b]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0c6e70]/10 text-[#0c6e70]">
                  <MapPin size={16} />
                </div>
                <span>Studios em <strong>Floriano-PI</strong> e <strong>Barão-MA</strong></span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#463e3b]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0c6e70]/10 text-[#0c6e70]">
                  <Check size={16} />
                </div>
                <span>Atendimento <strong>exclusivo e individual</strong> com hora marcada</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Christianne em Destaque no Studio */}
          <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none">
            {/* Moldura elegante com a foto da Chris sem nenhuma caixa cobrindo */}
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#25201f]/[0.08] bg-[#f2ede4] shadow-[0_20px_50px_rgba(37,32,31,0.08)]">
              <Image
                src={publicAsset("/src/img/chris-salao.png")}
                alt="Christianne Bosa em seu studio de beleza Chris Pincel Mágico"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                className="object-cover object-[48%_20%]"
              />

              {/* Vinheta suave apenas na borda inferior para dar profundidade natural */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25201f]/40 via-transparent to-transparent pointer-events-none" />

              {/* Tag autêntica no canto inferior */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#25201f]/10">
                <p className="font-display text-lg font-semibold text-[#25201f] leading-tight">
                  Christianne Bosa
                </p>
                <p className="text-xs text-[#0c6e70] font-medium tracking-wide uppercase mt-0.5">
                  Especialista em Olhar & Micropigmentação
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
