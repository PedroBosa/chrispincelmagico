"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPinned,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import {
  contactMethods,
  instagramLink,
  serviceOptions,
  studioLocations,
  whatsappDirectLink,
} from "@/data/site";

const iconMap = {
  MessageCircle,
  PhoneCall,
  Mail,
};

const initialForm = {
  name: "",
  phone: "",
  unit: "Floriano-PI",
  service: serviceOptions[0],
  message: "Olá! Gostaria de agendar um atendimento.",
};

const fieldClassName =
  "w-full rounded-2xl border border-[#25201f]/15 bg-[#faf7f2] px-4 py-3 text-[0.95rem] text-[#25201f] outline-none placeholder:text-[#8c817d] focus:border-[#0c6e70] focus:bg-white focus:ring-2 focus:ring-[#0c6e70]/15";

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
      `Prefiro atendimento na unidade de: ${formData.unit}.`,
      formData.message,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `${whatsappDirectLink}?text=${encodeURIComponent(composedMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setFeedback("Mensagem preparada! Abrindo o WhatsApp...");
  };

  return (
    <section id="contact" className="section-padding relative bg-[#faf7f2]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Onde nos encontrar"
              title="Dois studios acolhedores pensados para cuidar de você com calma."
              description="Escolha a unidade mais conveniente em Floriano ou Barão. Se preferir, use o formulário abaixo para adiantar seu agendamento no WhatsApp."
            />

            {/* Cartões de Contato Rápido */}
            <div className="grid gap-3.5">
              {contactMethods.map((method) => {
                const Icon = iconMap[method.icon];

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex w-full items-center gap-4 rounded-2xl border border-[#25201f]/[0.08] bg-white p-4 shadow-sm hover:border-[#0c6e70]/30 hover:shadow-md transition-all sm:px-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0c6e70]/10 text-[#0c6e70]">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0c6e70]">
                        {method.label}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-[#25201f]">
                        {method.value}
                      </p>
                    </div>
                    <ArrowUpRight className="ml-auto shrink-0 text-[#0c6e70]" size={18} />
                  </a>
                );
              })}

              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-4 rounded-2xl border border-[#25201f]/[0.08] bg-white p-4 shadow-sm hover:border-[#0c6e70]/30 hover:shadow-md transition-all sm:px-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0c6e70]/10 text-[#0c6e70]">
                  <Camera size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0c6e70]">
                    Instagram
                  </p>
                  <p className="text-sm sm:text-base font-medium text-[#25201f]">@chrispincelmagico</p>
                </div>
                <ArrowUpRight className="ml-auto shrink-0 text-[#0c6e70]" size={18} />
              </a>
            </div>

            {/* Formulário de Pré-Agendamento Humanizado */}
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[2rem] border border-[#25201f]/[0.08] bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(37,32,31,0.03)]"
            >
              <div className="mb-6 rounded-2xl bg-[#faf7f2] p-4 border border-[#25201f]/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c6e70]/10 text-[#0c6e70]">
                    <Send size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0c6e70]">
                      Agendamento Prático
                    </p>
                    <p className="text-sm text-[#5f5552]">
                      Preencha os dados abaixo e envie direto no WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5f5552]">
                  Seu Nome
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

                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5f5552]">
                  WhatsApp
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

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5f5552]">
                  Unidade de Preferência
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

                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5f5552]">
                  Procedimento de Interesse
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

              <label className="mt-4 grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5f5552]">
                Observações ou Dúvidas
                <textarea
                  className={`${fieldClassName} min-h-[110px] resize-none leading-relaxed`}
                  name="message"
                  placeholder="Alguma dúvida, data de preferência ou detalhe que queira compartilhar?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                  <span>Adiantar no WhatsApp</span>
                  <ArrowUpRight size={16} />
                </button>
                {feedback ? (
                  <p className="rounded-xl bg-[#0c6e70]/10 px-3 py-1.5 text-xs font-medium text-[#0c6e70]">
                    {feedback}
                  </p>
                ) : (
                  <p className="text-xs text-[#8c817d]">
                    Abrirá diretamente sua conversa no WhatsApp com a mensagem pronta.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Cards dos Studios em Floriano e Barão */}
          <div className="grid auto-rows-max content-start gap-6 self-start">
            {studioLocations.map((location) => (
              <article
                key={location.id}
                className="w-full self-start overflow-hidden rounded-[2rem] border border-[#25201f]/[0.08] bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(37,32,31,0.03)]"
              >
                <div className="mb-4 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0c6e70]">
                      {location.city}
                    </span>
                    <h3 className="mt-1 text-2xl font-display font-semibold text-[#25201f]">
                      {location.title}
                    </h3>
                  </div>

                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-[#0c6e70] hover:text-[#074749] sm:self-auto"
                  >
                    <span>Abrir no Google Maps</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="mb-4 flex items-start gap-2.5 text-sm text-[#685e5a]">
                  <MapPinned className="mt-0.5 shrink-0 text-[#0c6e70]" size={16} />
                  <p>{location.address}</p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#25201f]/[0.08]">
                  <iframe
                    title={`Mapa do ${location.title}`}
                    src={location.mapEmbed}
                    className="h-56 w-full border-0 sm:h-64"
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
