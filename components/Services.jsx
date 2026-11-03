import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { bookingLink, serviceCategories } from "@/data/site";

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative bg-[#fffdf9] border-y border-[#25201f]/[0.08]"
    >
      <Container>
        <div className="space-y-12 lg:space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Tabela de Procedimentos"
              title="Menu de cuidados e valores."
              description="Procedimentos realizados com materiais descartáveis, produtos selecionados e avaliação facial antes de cada atendimento."
            />
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0c6e70] hover:text-[#074749] shrink-0 self-start lg:self-auto"
            >
              <span>Consultar disponibilidade no WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Menu Editorial em 2 Colunas */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {serviceCategories.map((category) => (
              <div key={category.id} className="flex flex-col">
                <div className="pb-4 border-b border-[#25201f]/15">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[#25201f]">
                      {category.title}
                    </h3>
                    <span className="font-display text-sm italic text-[#8c817d]">
                      {category.number}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#685e5a] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <ul className="divide-y divide-[#25201f]/[0.08]">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 py-3.5 group"
                    >
                      <span className="text-[0.95rem] font-medium text-[#25201f] group-hover:text-[#0c6e70] transition-colors">
                        {item.name}
                      </span>
                      <span className="font-semibold text-[0.95rem] text-[#0c6e70] tabular-nums shrink-0">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Rodapé discreto da seção de serviços */}
          <div className="pt-6 border-t border-[#25201f]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5f5552]">
              Em dúvida sobre qual procedimento combina melhor com o seu rosto?
              Envie uma mensagem para avaliação.
            </p>
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary self-start sm:self-auto"
            >
              <span>Falar com a Chris</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
