"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import {
  contactMethods,
  serviceOptions,
  studioLocations,
  whatsappDirectLink,
} from "@/data/site";

const initialForm = {
  name: "",
  phone: "",
  unit: "Floriano-PI",
  service: serviceOptions[0],
  message: "",
};

const fieldClassName =
  "w-full rounded-xl border border-[#25201f]/15 bg-[#faf7f2] px-3.5 py-2.5 text-sm text-[#25201f] outline-none placeholder:text-[#8c817d] focus:border-[#0c6e70] focus:bg-white focus:ring-2 focus:ring-[#0c6e70]/15";

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const composedMessage = [
      "Olá, Chris Pincel Mágico!",
      `Meu nome é ${formData.name || "Cliente"}.`,
      formData.phone ? `Meu telefone é ${formData.phone}.` : null,
      `Tenho interesse em: ${formData.service}.`,
      `Unidade de preferência: ${formData.unit}.`,
      formData.message ? `Observações: ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `${whatsappDirectLink}?text=${encodeURIComponent(composedMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setFeedback("Abrindo conversa no WhatsApp...");
  };

  return (
    <section
      id="contact"
      className="section-padding relative bg-[#faf7f2] overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 min-w-0 w-full">
          {/* Coluna Esquerda: Canais Diretos + Formulário */}
          <div className="space-y-8 min-w-0 w-full">
            <SectionHeading
              eyebrow="Agendamento & Endereços"
              title="Onde atendemos."
              description="Escolha a unidade mais próxima em Floriano-PI ou Barão de Grajaú-MA. Atendemos com hora marcada."
            />

            {/* Lista Limpa de Canais de Contato */}
            <div className="divide-y divide-[#25201f]/10 border-y border-[#25201f]/10">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="flex items-center justify-between gap-4 py-3.5 group"
                >
                  <div className="min-w-0">
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-[#685e5a]">
                      {method.label}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#25201f] group-hover:text-[#0c6e70] transition-colors truncate block">
                      {method.value}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[#8c817d] group-hover:text-[#0c6e70] transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Formulário de Pré-Agendamento Direto para o WhatsApp */}
            <form
              onSubmit={handleSubmit}
              className="w-full min-w-0 rounded-2xl border border-[#25201f]/10 bg-white p-5 sm:p-7 shadow-[0_8px_24px_rgba(37,32,31,0.03)]"
            >
              <div className="mb-5">
                <h3 className="font-display text-2xl font-semibold text-[#25201f]">
                  Adiantar agendamento
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#685e5a]">
                  Selecione o procedimento e a unidade para iniciar a conversa
                  no WhatsApp já preenchida.
                </p>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="grid gap-1 text-xs font-medium text-[#5f5552]">
                  Seu nome
                  <input
                    required
                    className={fieldClassName}
                    type="text"
                    name="name"
                    placeholder="Como prefere ser chamada?"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>

                <label className="grid gap-1 text-xs font-medium text-[#5f5552]">
                  Telefone / WhatsApp
                  <input
                    className={fieldClassName}
                    type="tel"
                    name="phone"
                    placeholder="(89) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                <label className="grid gap-1 text-xs font-medium text-[#5f5552]">
                  Unidade
                  <select
                    className={fieldClassName}
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                  >
                    {studioLocations.map((location) => (
                      <option key={location.id} value={location.city}>
                        {location.city}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1 text-xs font-medium text-[#5f5552]">
                  Procedimento
                  <select
                    className={fieldClassName}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-3.5 grid gap-1 text-xs font-medium text-[#5f5552]">
                Observações (opcional)
                <textarea
                  className={`${fieldClassName} min-h-[84px] resize-none leading-relaxed`}
                  name="message"
                  placeholder="Dia ou turno de preferência, dúvidas..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  <span>Enviar pelo WhatsApp</span>
                  <ArrowUpRight size={16} />
                </button>
                {feedback ? (
                  <span className="text-xs font-medium text-[#0c6e70]">
                    {feedback}
                  </span>
                ) : null}
              </div>
            </form>
          </div>

          {/* Coluna Direita: Endereços e Mapas das 2 Unidades */}
          <div className="grid gap-6 min-w-0 w-full">
            {studioLocations.map((location) => (
              <article
                key={location.id}
                className="w-full min-w-0 overflow-hidden rounded-2xl border border-[#25201f]/10 bg-white p-5 sm:p-6 shadow-[0_8px_24px_rgba(37,32,31,0.03)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#25201f]/[0.08]">
                  <div>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#0c6e70]">
                      {location.city}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#25201f]">
                      {location.title}
                    </h3>
                  </div>

                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0c6e70] hover:text-[#074749] self-start sm:self-auto"
                  >
                    <span>Abrir no Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="my-3.5 flex items-start gap-2 text-xs sm:text-sm text-[#5f5552]">
                  <MapPin
                    className="mt-0.5 shrink-0 text-[#0c6e70]"
                    size={15}
                  />
                  <p>{location.address}</p>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#25201f]/10 bg-[#eee6dc]">
                  <iframe
                    title={`Mapa do ${location.title}`}
                    src={location.mapEmbed}
                    loading="lazy"
                    className="h-52 w-full border-0 sm:h-56"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
