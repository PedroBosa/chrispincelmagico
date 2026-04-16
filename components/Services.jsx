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
    <section id="services" className="section-padding relative">
      <Container>
        <div className="space-y-12">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Serviços"
              title="Protocolos que unem técnica, sensibilidade e acabamento impecável."
              description="Reorganizei a tabela para a leitura ficar mais limpa: categorias com melhor proporção, preços destacados com clareza e menos sensação de vazio visual."
            />
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            {serviceCategories.map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <motion.article
                  key={service.id}
                  whileHover={{ y: -8 }}
                  className="glass-panel luxury-outline group relative overflow-hidden rounded-[2rem] p-5 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(90deg,rgba(255,182,193,0.22),rgba(255,255,255,0.04),transparent)]" />
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(255,182,193,0.26),_transparent_68%)] blur-3xl" />

                  <div className="relative">
                    <div className="rounded-[1.7rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,247,243,0.72))] p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/82 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#0c6e70]">
                          {service.items.length} procedimento
                          {service.items.length > 1 ? "s" : ""}
                        </span>
                        {index === 0 ? (
                          <span className="rounded-full bg-[#ffb6c1]/18 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#b45e72]">
                            Mais procurado
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-4 flex flex-col gap-4 sm:gap-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-[1.35rem] bg-white/84 text-[#0c6e70] shadow-[0_14px_30px_rgba(41,26,26,0.08)]">
                            <Icon size={24} />
                          </div>

                          <div className="min-w-0 flex-1 space-y-3">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                              <div className="min-w-0">
                                <h3 className="break-words font-display text-[1.72rem] leading-[0.96] text-[#2d2625] sm:text-[2.15rem]">
                                  {service.title}
                                </h3>
                              </div>

                              <div className="self-start rounded-[1.25rem] border border-[#0c6e70]/8 bg-[#0c6e70]/8 px-4 py-3 sm:min-w-[190px]">
                                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#0c6e70]">
                                  Investimento inicial
                                </p>
                                <p className="mt-1 text-sm font-semibold leading-6 text-[#0c6e70]">
                                  {service.priceLabel}
                                </p>
                              </div>
                            </div>

                            <p className="max-w-xl text-sm leading-7 text-[#6d615d] sm:text-[0.96rem] sm:leading-8">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.7rem] border border-white/60 bg-white/66 p-2.5 sm:p-3">
                      <ul className="grid gap-2.5">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={item.name}
                            className="rounded-[1.2rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,245,241,0.9))] px-4 py-3.5 shadow-[0_10px_22px_rgba(46,28,28,0.04)]"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffb6c1]/14 text-[0.72rem] font-semibold text-[#b45e72]">
                                {String(itemIndex + 1).padStart(2, "0")}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                  <p className="font-medium leading-6 text-[#3e3533]">
                                    {item.name}
                                  </p>
                                  <p className="self-start rounded-full bg-[#0c6e70]/10 px-3 py-1 text-sm font-semibold text-[#0c6e70]">
                                    {item.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 rounded-[1.5rem] border border-white/55 bg-white/52 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-[20rem] text-xs font-semibold uppercase tracking-[0.22em] text-[#8a7a76]">
                        Agendamento rápido pelo WhatsApp
                      </p>
                      <a
                        href={bookingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#0c6e70] sm:self-auto"
                      >
                        Selecionar categoria
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="glass-panel luxury-outline flex flex-col items-start justify-between gap-5 rounded-[2rem] px-6 py-6 sm:px-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0c6e70]">
                Atendimento personalizado
              </p>
              <p className="mt-3 text-lg leading-8 text-[#5d5350]">
                Os serviços e valores já estão atualizados para facilitar a decisão. Se quiser,
                você pode iniciar o atendimento pelo WhatsApp com a opção exata que deseja.
              </p>
            </div>
            <a href={bookingLink} target="_blank" rel="noreferrer" className="btn-primary">
              Reservar horário
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
