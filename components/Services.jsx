"use client";

import { ArrowUpRight, Eye, Leaf, Smile, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { bookingLink, serviceCategories } from "@/data/site";

const iconMap = {
  Sparkles,
  Eye,
  Smile,
  Leaf,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-[#faf7f2]">
      <Container>
        <div className="space-y-12">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Procedimentos & Cuidados"
              title="Técnicas autorais para valorizar sua beleza com naturalidade e leveza."
              description="Confira nossa tabela completa de serviços para sobrancelhas, cílios, lábios e pele. Preços transparentes, materiais de alta qualidade e atendimento com hora marcada."
            />
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            {serviceCategories.map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <motion.article
                  key={service.id}
                  whileHover={{ y: -4 }}
                  className="rounded-[2.2rem] border border-[#25201f]/[0.08] bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(37,32,31,0.03)]"
                >
                  {/* Cabeçalho da Categoria */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#25201f]/[0.07]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c6e70]/10 text-[#0c6e70]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-2xl sm:text-[1.85rem] font-semibold text-[#25201f] leading-tight">
                            {service.title}
                          </h3>
                          {index === 0 && (
                            <span className="rounded-full bg-[#f6ebe6] px-2.5 py-0.5 text-[0.68rem] font-semibold text-[#9b4e3e] uppercase tracking-wider">
                              Favorito
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#685e5a] leading-relaxed max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:block text-right shrink-0">
                      <span className="text-[0.7rem] uppercase tracking-wider text-[#8c817d] font-semibold block">
                        A partir de
                      </span>
                      <span className="text-sm font-semibold text-[#0c6e70]">
                        {service.priceLabel.replace("A partir de ", "")}
                      </span>
                    </div>
                  </div>

                  {/* Lista de Procedimentos */}
                  <div className="mt-6">
                    <ul className="grid gap-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between gap-3 rounded-xl border border-[#25201f]/[0.06] bg-[#fbf9f6] px-4 py-3 transition-colors hover:bg-white hover:border-[#0c6e70]/25"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0c6e70]/50 shrink-0" />
                            <p className="font-medium text-sm sm:text-[0.95rem] text-[#25201f] truncate">
                              {item.name}
                            </p>
                          </div>

                          <div className="shrink-0">
                            <span className="rounded-full bg-white px-3 py-1 text-xs sm:text-sm font-semibold text-[#0c6e70] border border-[#0c6e70]/15 shadow-sm">
                              {item.price}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Chamada para o WhatsApp da categoria */}
                  <div className="mt-6 pt-5 border-t border-[#25201f]/[0.07] flex items-center justify-between">
                    <span className="text-xs text-[#8c817d] font-medium">
                      Atendimento em Floriano e Barão
                    </span>
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0c6e70] hover:text-[#074749]"
                    >
                      <span>Agendar no WhatsApp</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Banner Acolhedor de Atendimento */}
          <div className="rounded-[2.2rem] border border-[#0c6e70]/15 bg-[#f4ebe6]/50 p-6 sm:p-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="section-kicker mb-2">
                Dúvidas sobre o procedimento ideal?
              </span>
              <p className="mt-2 text-base sm:text-lg text-[#5f5552] leading-relaxed">
                Cada formato de rosto e tipo de pelo reage de forma única. Fale com a Chris no WhatsApp para tirar dúvidas e escolher a melhor opção para a sua rotina.
              </p>
            </div>
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
            >
              <span>Conversar com a Chris</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
