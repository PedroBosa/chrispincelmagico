import Image from "next/image";
import { CheckCircle2, Heart, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { aboutStats, publicAsset } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-[#faf7f2]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Foto Editorial da Christianne */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#25201f]/[0.08] bg-[#eee6dc] shadow-[0_16px_45px_rgba(37,32,31,0.06)]">
              <Image
                src={publicAsset("/src/img/christianne.jpg")}
                alt="Christianne, fundadora da Chris Pincel Mágico"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Citação Editorial Autoral */}
            <div className="mt-5 rounded-2xl border border-[#25201f]/[0.08] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0c6e70] mb-2">
                <Heart size={14} className="text-[#0c6e70]" />
                <span>Propósito do Studio</span>
              </div>
              <p className="font-display text-lg sm:text-xl text-[#25201f] italic leading-snug">
                “Beleza bem executada começa na escuta atenta, continua na técnica apurada e se revela na naturalidade do resultado.”
              </p>
              <p className="mt-2 text-xs text-[#8c817d] font-medium text-right">
                — Christianne
              </p>
            </div>
          </div>

          {/* Conteúdo Humanizado sobre a Chris */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Quem é a Chris"
              title="Mais de 10 anos dedicados a cuidar da beleza e da autoestima de cada cliente."
              description="Especialista em micropigmentação e harmonização do olhar, Christianne construiu sua história com técnica autoral, biossegurança rigorosa e muito carinho."
            />

            <div className="mt-7 space-y-4 text-base sm:text-[1.05rem] text-[#5f5552] leading-relaxed">
              <p>
                O <strong>Chris Pincel Mágico</strong> nasceu do desejo de oferecer um atendimento verdadeiramente acolhedor. Aqui, você não é apenas mais um horário na agenda: analisamos seus traços, ouvimos suas preferências e respeitamos a sua expressão facial.
              </p>
              <p>
                Com dois studios estruturados — em <strong>Floriano-PI</strong> e em <strong>Barão de Grajaú-MA</strong> —, o compromisso é sempre o mesmo: produtos de primeira linha, biossegurança em cada detalhe e resultados que realçam o seu melhor sem parecer artificial.
              </p>
            </div>

            {/* Pilares em Cartões Limpos */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {aboutStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#25201f]/[0.08] bg-white p-4 text-center sm:text-left shadow-sm"
                >
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#0c6e70]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-[#685e5a] leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Diferenciais Humanizados */}
            <div className="mt-8 space-y-2.5">
              {[
                "Avaliação personalizada antes de iniciar qualquer procedimento.",
                "Uso de pigmentos e materiais descartáveis com registro e segurança.",
                "Ambiente calmo e aconchegante para você relaxar enquanto se cuida.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 border border-[#25201f]/[0.06]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0c6e70]" />
                  <p className="text-sm text-[#463e3b] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
