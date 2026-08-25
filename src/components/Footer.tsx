import { Youtube, Music2, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070910] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-20">
          <div>
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
            <p className="mt-7 max-w-md text-sm leading-7 text-[#d7dee7]">
              Formation Import Export · Méthode pas à pas · Accès à vie
            </p>
            <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#f4c76b] pb-2 text-xs font-black uppercase tracking-[0.16em] text-[#f4c76b] transition-colors hover:text-white">
              Commander maintenant
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f4c76b]">Mes réseaux</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="https://youtube.com/@chahid_ecom?si=0Y33L7mOjuB3IXq-" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-white/15 px-4 py-3 text-sm font-bold text-white transition-colors hover:border-white/50">
                <Youtube className="w-4 h-4" />
                <span>➔ CHAHID_ECOM</span>
              </a>
              <a href="https://www.tiktok.com/@chahid_ecom?_r=1&_t=ZN-98yxGfMZG4s" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-white/15 px-4 py-3 text-sm font-bold text-white transition-colors hover:border-white/50">
                <Music2 className="w-4 h-4" />
                <span>➔ CHAHID_ECOM</span>
              </a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f4c76b]">Informations légales</p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[#d7dee7]">
              <a className="transition-colors hover:text-white" href="https://academie777.fr/policies/refund-policy">Droit de rétractation et formulaire type</a>
              <a className="transition-colors hover:text-white" href="https://academie777.fr/policies/terms-of-sale">Conditions générales de vente</a>
              <a className="transition-colors hover:text-white" href="https://academie777.fr/policies/privacy-policy">Politique de confidentialité</a>
              <a className="transition-colors hover:text-white" href="https://academie777.fr/policies/legal-notice">Mentions légales</a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-6 text-xs leading-6 text-[#aeb8c5]">
          Académie 777 propose une formation numérique payante à accès immédiat. Conformément à la loi, l'accès étant fourni instantanément après paiement, le droit de rétractation de 14 jours ne s'applique pas dès lors que tu confirmes renoncer expressément à ce délai au moment de la commande. Le paiement est sécurisé et traité par un prestataire tiers ; aucune donnée bancaire n'est stockée par Académie 777.
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#7f8b9a] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Académie 777 — Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
}
