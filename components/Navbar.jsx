"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { bookingLink, navLinks, publicAsset } from "@/data/site";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const getCurrentSectionId = () => {
      const headerHeight = window.innerWidth >= 1024 ? 124 : 108;
      const targetLine = window.scrollY + headerHeight + window.innerHeight * 0.22;
      let currentSectionId = sections[0].id;

      for (const section of sections) {
        if (targetLine >= section.offsetTop) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (isAtPageBottom) {
        currentSectionId = sections[sections.length - 1].id;
      }

      return currentSectionId;
    };

    let rafId = 0;

    const updateActiveSection = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        const nextSection = getCurrentSectionId();
        setActiveSection((previousSection) =>
          previousSection === nextSection ? previousSection : nextSection,
        );
        rafId = 0;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const headerClasses = [
    "glass-panel luxury-outline rounded-[1.75rem]",
    "transition-all duration-300",
    isScrolled ? "bg-white/78 shadow-[0_18px_60px_rgba(41,26,26,0.14)]" : "bg-white/56",
  ].join(" ");

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.button
            type="button"
            aria-label="Fechar menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#1c1716]/14 backdrop-blur-[2px] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <div className="fixed inset-x-0 top-0 z-[60] flex flex-col pointer-events-none">
        <div className="pointer-events-auto bg-[#0c6e70] px-4 py-2 text-center text-[0.8rem] sm:text-[0.85rem] font-medium text-white shadow-md">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <Sparkles size={14} className="shrink-0 text-[#ffb6c1]" />
            <span>
              Especial de Maio: Sobrancelha de <span className="line-through opacity-75">R$300</span> por <strong className="text-[#ffb6c1]">R$200</strong>!
            </span>
            <Sparkles size={14} className="shrink-0 text-[#ffb6c1] hidden sm:block" />
          </div>
        </div>

        <header className="pointer-events-auto mt-2 sm:mt-3 w-full relative z-50">
          <Container>
          <div className="mx-auto max-w-[1180px]">
            <div className={`${headerClasses} overflow-hidden`}>
              <div className="grid min-w-0 grid-cols-[auto_auto] items-center gap-3 px-3 py-3 sm:px-5 lg:grid-cols-[auto_1fr_auto] lg:gap-4 lg:px-6">
                <a
                  href="#home"
                  className="relative flex min-w-0 shrink items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0c6e70]/35"
                  onClick={() => {
                    setActiveSection("home");
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="relative h-10 w-[108px] sm:h-14 sm:w-[152px]">
                    <Image
                      src={publicAsset("/src/img/chris-logo.png")}
                      alt="Logo Chris Pincel Mágico"
                      fill
                      priority
                      sizes="152px"
                      className="object-contain object-left"
                    />
                  </div>
                </a>

                <nav
                  className="hidden min-w-0 items-center justify-center gap-1 lg:flex"
                  aria-label="Navegação principal"
                >
                  {navLinks.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveSection(item.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                          "rounded-full px-3 py-2 text-[0.95rem] font-medium xl:px-4",
                          isActive
                            ? "bg-[#0c6e70] text-white shadow-[0_10px_24px_rgba(12,110,112,0.18)]"
                            : "text-[#5f5551] hover:bg-white/70 hover:text-[#2d2625]",
                        ].join(" ")}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>

                <div className="flex shrink-0 items-center justify-self-end gap-2">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary hidden lg:inline-flex lg:px-5 lg:py-3 xl:px-6"
                  >
                    <span className="xl:hidden">Agendar</span>
                    <span className="hidden xl:inline">Agendar Horário</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <button
                    type="button"
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                    className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/72 text-[#2d2625] shadow-[0_12px_24px_rgba(41,26,26,0.08)] backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-[#0c6e70]/35 lg:hidden"
                      onClick={() => setIsMenuOpen((open) => !open)}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isMenuOpen ? "close" : "open"}
                        initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90, scale: 0.8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="flex items-center justify-center"
                      >
                        {isMenuOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {isMenuOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                    className="overflow-hidden border-t border-white/55 lg:hidden"
                  >
                    <div className="px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
                      <div className="rounded-[1.6rem] border border-white/55 bg-white/36 p-2 shadow-[0_18px_44px_rgba(41,26,26,0.08)] backdrop-blur-xl">
                        <div className="mb-3 rounded-[1.2rem] bg-white/54 px-4 py-3">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#0c6e70]">
                            Navegação
                          </p>
                          <p className="mt-1 text-sm text-[#5f5551]">
                            Acesse cada etapa do atendimento sem perder contexto.
                          </p>
                        </div>

                        <nav className="grid gap-2 sm:grid-cols-2" aria-label="Navegação mobile">
                          {navLinks.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className={[
                                "rounded-[1.25rem] px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0c6e70]/30",
                                activeSection === item.id
                                  ? "bg-[#0c6e70] text-white shadow-[0_16px_32px_rgba(12,110,112,0.18)]"
                                  : "bg-white/70 text-[#4d4340] hover:bg-white/90 hover:text-[#2d2625] active:bg-white active:text-[#2d2625]",
                              ].join(" ")}
                              onClick={() => handleNavLinkClick(item.id)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </nav>

                        <a
                          href={bookingLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary mt-3 w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Agendar no WhatsApp
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </header>
    </div>
    </>
  );
}
