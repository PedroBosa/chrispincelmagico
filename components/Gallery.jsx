"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/data/site";

export default function Gallery() {
  const imageItems = galleryItems.filter((item) => item.type === "image");
  const videoItems = galleryItems.filter((item) => item.type === "video");
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % imageItems.length);
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (prev) => (prev - 1 + imageItems.length) % imageItems.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, imageItems.length]);

  const activeItem =
    selectedIndex !== null ? imageItems[selectedIndex] : null;

  return (
    <section
      id="gallery"
      className="section-padding relative bg-[#fffdf9] border-y border-[#25201f]/[0.08]"
    >
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Portfólio do Studio"
            title="Resultados reais vistos de perto."
            description="Registros de atendimentos realizados no studio, sem filtros artificiais. Toque em qualquer foto para ampliar."
          />

          {/* Grid de Fotos: 2 colunas no mobile, 3 no desktop */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-3">
            {imageItems.map((item, index) => (
              <figure key={item.id} className="group flex flex-col">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#25201f]/10 bg-[#eee6dc] text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#0c6e70]"
                  aria-label={`Ampliar foto: ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="mt-2.5 px-0.5">
                  <span className="block text-[0.65rem] sm:text-xs uppercase tracking-wider text-[#0c6e70] font-semibold">
                    {item.tag}
                  </span>
                  <p className="mt-0.5 text-xs sm:text-[0.95rem] font-medium text-[#25201f] leading-snug">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Vídeos Verticais do Studio */}
          <div className="pt-6 border-t border-[#25201f]/10">
            <div className="mb-6">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#25201f]">
                Em atendimento
              </h3>
              <p className="mt-1 text-sm text-[#685e5a]">
                Acompanhe em vídeo os detalhes de alinhamento, brilho e acabamento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl">
              {videoItems.map((item) => (
                <figure key={item.id} className="flex flex-col">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#25201f]/10 bg-[#1a1615]">
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
                  <figcaption className="mt-2.5 px-0.5">
                    <span className="block text-[0.68rem] uppercase tracking-wider text-[#0c6e70] font-semibold">
                      {item.tag}
                    </span>
                    <p className="mt-0.5 text-sm font-medium text-[#25201f]">
                      {item.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Lightbox Modal para ampliar fotos */}
      {activeItem ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#181413]/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
            aria-label="Fechar visualização"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                (prev) => (prev - 1 + imageItems.length) % imageItems.length,
              );
            }}
            className="absolute left-3 sm:left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % imageItems.length);
            }}
            className="absolute right-3 sm:right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
            aria-label="Próxima foto"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative flex flex-col items-center max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#25201f]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 768px) 95vw, 520px"
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">
                {activeItem.tag}
              </p>
              <p className="mt-0.5 text-base font-medium">{activeItem.title}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
