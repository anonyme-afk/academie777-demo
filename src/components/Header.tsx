import { useState } from 'react';
import { UserRound, ArrowUpRight, Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/95 text-white backdrop-blur-xl">
      <div className="border-b border-white/10 bg-[#0d111a]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4c76b] sm:text-[11px]">
          Formation premium · Import Chine
        </div>
      </div>
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a aria-label="Académie 777 — Accueil" href="#accueil">
          <span className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center border border-white/35 bg-white text-[13px] font-black tracking-[-0.08em] text-[#0a0d14]">
              777
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-black tracking-[0.15em] text-white">ACADÉMIE 777</span>
              <span className="mt-1 text-[8px] font-semibold tracking-[0.16em] text-[#b9c7d8]">
                IMPORTATION CHINA / EXPORTATION MONDIALE
              </span>
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          <a className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d7dee7] transition-colors hover:text-white" href="#accueil">Accueil</a>
          <a className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d7dee7] transition-colors hover:text-white" href="#programme">Le programme</a>
          <a className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d7dee7] transition-colors hover:text-white" href="#temoignages">Témoignages</a>
          <a className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d7dee7] transition-colors hover:text-white" href="#faq">FAQ</a>
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="https://academie777.fr/customer_authentication/redirect?locale=fr&region_country=FR" target="_blank" rel="noreferrer" className="flex size-10 items-center justify-center border border-white/15 text-[#d7dee7] transition-colors hover:border-white/50 hover:text-white" aria-label="Compte">
            <UserRound className="w-4 h-4" />
          </a>
          <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-[#f4c76b] px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-[#10131a] transition-transform hover:-translate-y-0.5">
            Accéder à la formation
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex size-11 items-center justify-center border border-white/20 text-white sm:hidden" aria-label="Ouvrir le menu">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-[#080b12] px-5 pb-6 pt-4 sm:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            <a onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#d7dee7]" href="#accueil">Accueil</a>
            <a onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#d7dee7]" href="#programme">Le programme</a>
            <a onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#d7dee7]" href="#temoignages">Témoignages</a>
            <a onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#d7dee7]" href="#faq">FAQ</a>
          </nav>
          <div className="mt-5 flex gap-3">
            <a href="https://academie777.fr/customer_authentication/redirect?locale=fr&region_country=FR" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 border border-white/20 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">
              <UserRound className="w-4 h-4" /> Compte
            </a>
            <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-[#f4c76b] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-[#10131a]">
              Commander <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
