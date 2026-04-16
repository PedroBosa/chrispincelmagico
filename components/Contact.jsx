"use client";

import { useState } from "react";
import {
  ArrowUpRight,
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
  "w-full rounded-[1.2rem] border border-white/60 bg-white/72 px-4 py-3.5 text-sm text-[#2d2625] outline-none placeholder:text-[#8e817d] focus:border-[#0c6e70]/25 focus:bg-white focus:ring-2 focus:ring-[#0c6e70]/12";

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
      `Tenho interesse em ${formData.service}.`,
      `Prefiro atendimento em ${formData.unit}.`,
      formData.message,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `${whatsappDirectLink}?text=${encodeURIComponent(composedMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setFeedback("Mensagem preparada no WhatsApp para finalizar seu agendamento.");
  };

  return (
    <section id="contact" className="section-padding relative overflow-x-clip">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contato"
              title="Duas unidades, um atendimento pensado para receber você com calma e clareza."
              description="Use o formulário para iniciar o agendamento no WhatsApp ou escolha o canal que fizer mais sentido no seu momento."
            />

            <div className="grid gap-4">
              {contactMethods.map((method) => {
                const Icon = iconMap[method.icon];

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass-panel luxury-outline flex w-full items-center gap-4 rounded-[1.7rem] px-4 py-4 hover:-translate-y-1 sm:px-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffb6c1]/18 text-[#0c6e70]">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0c6e70]">
                        {method.label}
                      </p>
                      <p className="break-words text-base leading-7 text-[#4f4643]">
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
                className="glass-panel luxury-outline w-full rounded-[1.7rem] px-4 py-4 text-[#4f4643] hover:-translate-y-1 sm:px-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0c6e70]">
                  Instagram
                </p>
                <p className="mt-1 break-words text-base leading-7">@chrispincelmagico</p>
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass-panel luxury-outline w-full rounded-[2rem] p-5 sm:p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c6e70]/10 text-[#0c6e70]">
                  <Send size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0c6e70]">
                    Formulário premium
                  </p>
                  <p className="text-sm text-[#6d615d]">
                    Preencha os dados e finalize o contato pelo WhatsApp.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#4f4643]">
                  Nome
                  <input
                    className={fieldClassName}
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-[#4f4643]">
                  Telefone
                  <input
                    className={fieldClassName}
                    type="tel"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-[#4f4643]">
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

                <label className="grid gap-2 text-sm font-medium text-[#4f4643]">
                  Serviço
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

              <label className="mt-4 grid gap-2 text-sm font-medium text-[#4f4643]">
                Mensagem
                <textarea
                  className={`${fieldClassName} min-h-[150px] resize-none`}
                  name="message"
                  placeholder="Conte qual atendimento você deseja."
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary">
                  Enviar para o WhatsApp
                  <ArrowUpRight size={16} />
                </button>
                {feedback ? <p className="text-sm text-[#5b524e]">{feedback}</p> : null}
              </div>
            </form>
          </div>

          <div className="grid auto-rows-max content-start gap-5 self-start">
            {studioLocations.map((location) => (
              <article
                key={location.id}
                className="glass-panel luxury-outline w-full self-start overflow-hidden rounded-[2rem] p-4 sm:p-6"
              >
                <div className="mb-5 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0c6e70]">
                      {location.city}
                    </p>
                    <h3 className="mt-2 text-[2rem] font-display leading-none text-[#2d2625] sm:text-3xl">
                      {location.title}
                    </h3>
                  </div>

                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary self-start sm:self-auto"
                  >
                    Abrir no mapa
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="mb-5 flex w-full items-start gap-3 rounded-[1.5rem] border border-white/60 bg-white/60 px-4 py-4">
                  <MapPinned className="mt-1 shrink-0 text-[#0c6e70]" size={18} />
                  <p className="text-sm leading-7 text-[#5c5350]">{location.address}</p>
                </div>

                <div className="w-full overflow-hidden rounded-[1.7rem] border border-white/55">
                  <iframe
                    src={location.mapEmbed}
                    title={`Mapa do ${location.title}`}
                    width="100%"
                    height="280"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[280px] w-full sm:h-[320px]"
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
