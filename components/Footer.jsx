import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import {
  footerSocials,
  navLinks,
  publicAsset,
  studioLocations,
} from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#123f41] text-[#fff6ef]">
      <Container className="pt-12 pb-24 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_1fr] lg:gap-12">
          {/* Coluna 1: Marca e Pagamento */}
          <div className="space-y-4">
            <div className="relative h-14 w-[150px]">
              <Image
                src={publicAsset("/src/img/chris-logo-2.png")}
                alt="Chris Pincel Mágico"
                fill
                loading="lazy"
                sizes="150px"
                className="object-contain object-left"
              />
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              Design de sobrancelhas, micropigmentação, cílios e estética facial
              com hora marcada em Floriano-PI e Barão de Grajaú-MA.
            </p>

            <p className="pt-1 text-xs text-white/60">
              <strong className="font-semibold text-white/85">
                Formas de pagamento:
              </strong>{" "}
              Pix, cartão de crédito e cartão de débito.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffdfd0]">
              Navegação
            </p>
            <nav className="mt-4 grid gap-2.5" aria-label="Links do rodapé">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 hover:text-white w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Unidades e Contato */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffdfd0]">
                Unidades
              </p>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-white/75">
                {studioLocations.map((location) => (
                  <li key={location.id}>
                    <strong className="text-white/95">{location.city}:</strong>{" "}
                    {location.address}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffdfd0]">
                Contato Direto
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {footerSocials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="text-white/50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/55">
          <p>© {currentYear} Chris Pincel Mágico. Todos os direitos reservados.</p>
          <p>Floriano-PI · Barão de Grajaú-MA</p>
        </div>
      </Container>
    </footer>
  );
}
