"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/data/site";

export default function Gallery() {
  const imageItems = galleryItems.filter((item) => item.type === "image");
  const videoItems = galleryItems.filter((item) => item.type === "video");

  return (
    <section id="gallery" className="section-padding relative bg-[#faf7f2]">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Resultados Reais"
            title="A transformação vista de perto, em cada detalhe."
            description="Fotos e vídeos sem filtros pesados de atendimentos reais realizados no studio. Veja a naturalidade do acabamento e a harmonia em cada olhar."
            align="center"
          />

          {/* Grid de Fotos Reais */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {imageItems.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#25201f]/[0.08] bg-white shadow-[0_8px_24px_rgba(37,32,31,0.03)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[2rem]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="eager"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
                  <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#0c6e70]/[0.08] px-3 py-1 text-[0.7rem] font-semibold text-[#0c6e70]">
                    <Sparkles size={12} />
                    <span>Resultado real</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#25201f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#685e5a] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Vídeos de Procedimento */}
          <div className="grid gap-6 lg:grid-cols-2">
            {videoItems.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#25201f]/[0.08] bg-white shadow-[0_8px_24px_rgba(37,32,31,0.03)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2rem] bg-black">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                  >
                    <source src={item.src} type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
                  <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#0c6e70]/[0.08] px-3 py-1 text-[0.7rem] font-semibold text-[#0c6e70]">
                    <Play size={12} />
                    <span>Vídeo do Studio</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#25201f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#685e5a] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
