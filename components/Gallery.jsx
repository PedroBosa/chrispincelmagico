"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, WandSparkles } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/data/site";

export default function Gallery() {
  const imageItems = galleryItems.filter((item) => item.type === "image");
  const videoItems = galleryItems.filter((item) => item.type === "video");

  return (
    <section id="gallery" className="section-padding relative">
      <Container>
        <div className="space-y-10 sm:space-y-12">
          <SectionHeading
            eyebrow="Galeria"
            title="Uma curadoria visual para transmitir textura, brilho e resultado real."
            description="Fotos e vídeos selecionados para mostrar de perto o nível de acabamento, a naturalidade e a atmosfera do atendimento."
            align="center"
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {imageItems.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -6 }}
                className="group glass-panel luxury-outline flex h-full flex-col overflow-hidden rounded-[1.8rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[1.8rem]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,18,0.02)_0%,rgba(24,18,18,0)_45%,rgba(24,18,18,0.18)_100%)]" />
                </div>

                <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0c6e70]/10 bg-[#0c6e70]/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#0c6e70]">
                    <WandSparkles size={14} />
                    Resultado real
                  </div>
                  <h3 className="font-display text-[1.9rem] leading-tight text-[#2d2625]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#6d615d]">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {videoItems.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -6 }}
                className="group glass-panel luxury-outline flex h-full flex-col overflow-hidden rounded-[1.8rem]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[1.8rem] bg-black">
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

                <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0c6e70]/10 bg-[#0c6e70]/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#0c6e70]">
                    <Play size={14} />
                    Vídeo real
                  </div>
                  <h3 className="font-display text-[1.9rem] leading-tight text-[#2d2625]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#6d615d]">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
