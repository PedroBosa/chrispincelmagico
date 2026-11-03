"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { bookingLink, navLinks, publicAsset } from "@/data/site";

export default function Navbar() {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeader = () => {
      const scrolled =
        (window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          0) > 40;
      header.classList.toggle("is-scrolled", scrolled);
      setIsScrolled(scrolled);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader, { passive: true });
    window.addEventListener("pageshow", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      window.removeEventListener("pageshow", updateHeader);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 941) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClickOutside);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`hdr ${isScrolled ? "is-scrolled" : ""}`}
      id="site-header"
    >
      <div className="hdr-in">
        {/* Marca / Logo à esquerda */}
        <a
          href="#home"
          className="brand"
          aria-label="Chris Pincel Mágico - Voltar ao início"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative h-8 w-[105px] sm:h-9 sm:w-[135px]">
            <Image
              src={publicAsset("/src/img/chris-logo.png")}
              alt="Chris Pincel Mágico"
              fill
              priority
              sizes="135px"
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Menu central que expande com fluidez */}
        <nav
          className={`hdr-nav ${isMenuOpen ? "is-open" : ""}`}
          id="site-nav"
          aria-label="Navegação principal"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="hdr-nav__cta"
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Agendar Horário no WhatsApp</span>
            <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Botão de ação único: o mesmo elemento transiciona suavemente de outlined (topo) para sólido teal (rolagem) */}
        <a
          className="hdr-cta"
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Agendar Horário</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Botão hambúrguer no mobile */}
        <button
          className="menu-btn"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-btn__bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>{isMenuOpen ? "Fechar" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
}
