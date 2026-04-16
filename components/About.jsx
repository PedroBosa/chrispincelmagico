import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { aboutStats, publicAsset } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-6 top-10 hidden h-48 w-48 rounded-full bg-[#ffb6c1]/24 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-10 hidden h-52 w-52 rounded-full bg-[#0c6e70]/12 blur-3xl lg:block" />

            <div className="glass-panel luxury-outline relative overflow-hidden rounded-[2.2rem] p-4 sm:p-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                <Image
                  src={publicAsset("/src/img/christianne.jpg")}
                  alt="Christianne, profissional do studio Chris Pincel Mágico"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8 hidden rounded-[1.6rem] border border-white/55 bg-white/76 p-5 backdrop-blur-xl sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#0c6e70]">
                  Assinatura Chris Pincel Mágico
                </p>
                <p className="mt-2 text-lg font-display text-[#2d2625]">
                  “Beleza bem executada começa na escuta, continua na técnica e termina no
                  detalhe.”
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Sobre Christianne"
              title="Uma trajetória construída com presença, delicadeza e domínio técnico."
              description="Chris é empreendedora e especialista em beleza há oito anos, com atuação consolidada em design de sobrancelhas, micropigmentação e lash design."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-[#6d615d] sm:text-lg">
              <p>
                Seu trabalho nasceu da combinação entre olhar artístico e cuidado genuíno com a
                autoestima de cada cliente. Ao longo da jornada, desenvolveu um atendimento
                acolhedor e altamente personalizado, pensado para entregar conforto, confiança e
                resultados visualmente sofisticados.
              </p>
              <p>
                Hoje, Christianne conduz dois studios, em Floriano e Barão, mantendo a mesma
                assinatura em ambas as unidades: ambiente agradável, execução precisa e uma
                experiência que respeita o tempo, o estilo e a identidade de quem chega para ser
                atendida.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutStats.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel luxury-outline rounded-[1.7rem] px-5 py-5"
                >
                  <p className="font-display text-3xl font-semibold text-[#2d2625]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6d615d]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {[
                "Atendimento individual com foco na sua harmonia facial.",
                "Protocolos que equilibram naturalidade, definição e conforto.",
                "Ambiente acolhedor para uma experiência calma e elegante.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-white/60 bg-white/58 px-4 py-3 backdrop-blur-xl"
                >
                  <BadgeCheck className="mt-0.5 shrink-0 text-[#0c6e70]" size={18} />
                  <p className="text-sm leading-7 text-[#5a504c]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
