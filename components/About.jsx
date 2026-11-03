import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { publicAsset } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-[#faf7f2]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Retrato da Christianne */}
          <div className="w-full max-w-[440px] mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#25201f]/10 bg-[#eee6dc] shadow-[0_16px_36px_-14px_rgba(37,32,31,0.1)]">
              <Image
                src={publicAsset("/src/img/christianne.jpg")}
                alt="Christianne, especialista em olhar e fundadora do studio Chris Pincel Mágico"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Trajetória e Filosofia de Trabalho */}
          <div>
            <SectionHeading
              eyebrow="Sobre a Especialista"
              title="Mais de dez anos dedicados à naturalidade do olhar."
            />

            <div className="mt-6 space-y-4 text-base sm:text-[1.04rem] text-[#5f5552] leading-relaxed">
              <p>
                À frente do <strong>Chris Pincel Mágico</strong>, Christianne
                construiu sua trajetória unindo precisão técnica e escuta
                atenta. Cada atendimento começa pela análise das proporções do
                rosto, da estrutura dos fios e do estilo pessoal de cada
                cliente.
              </p>
              <p>
                Com unidades próprias em <strong>Floriano-PI</strong> e em{" "}
                <strong>Barão de Grajaú-MA</strong>, o studio funciona com
                horários individuais reservados, garantindo um ambiente
                tranquilo, biossegurança rigorosa e resultados delicados que
                valorizam a beleza sem traços pesados.
              </p>
            </div>

            {/* Dados objetivos separados por linhas finas */}
            <dl className="mt-8 pt-6 border-t border-[#25201f]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <dt className="font-display text-2xl sm:text-3xl font-semibold text-[#25201f]">
                  10+ anos
                </dt>
                <dd className="mt-1 text-xs sm:text-sm text-[#685e5a]">
                  De experiência em estética e olhar
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl sm:text-3xl font-semibold text-[#25201f]">
                  2 studios
                </dt>
                <dd className="mt-1 text-xs sm:text-sm text-[#685e5a]">
                  Floriano-PI e Barão de Grajaú-MA
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl sm:text-3xl font-semibold text-[#25201f]">
                  Hora marcada
                </dt>
                <dd className="mt-1 text-xs sm:text-sm text-[#685e5a]">
                  Atendimento individual e sem pressa
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
