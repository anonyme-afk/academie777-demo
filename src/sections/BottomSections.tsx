import { useState } from 'react';
import { ArrowRight, Earth, Users, PackageCheck, Zap, CircleCheck, Play, Sparkles, ChevronDown, ArrowUpRight } from 'lucide-react';

export function BottomSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Je débute totalement, est-ce fait pour moi ?", a: "Oui. La formation est conçue pour les débutants. Chaque étape est expliquée pas à pas, de la recherche de produits jusqu'à la vente." },
    { q: "Une liste de fournisseurs est-elle fournie ?", a: "Oui. Tu auras accès à une sélection de fournisseurs fiables, des transitaires recommandés ainsi que toutes les plateformes nécessaires pour commencer rapidement." },
    { q: "L'accès est-il limité dans le temps ?", a: "Non. Une fois la formation achetée, tu bénéficies d'un accès à vie, y compris aux futures mises à jour sans frais supplémentaires." }
  ];

  return (
    <>
      <section className="bg-[#e4473f] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-28">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
              <span className="h-px w-8 bg-white"></span>Outils & communauté
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              Une communauté privée à vie.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white sm:text-lg">
              Applications recommandées, gestion de projet, accès à vie à une communauté active pour poser tes questions.
            </p>
            <a href="#offre" className="mt-9 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-black uppercase tracking-[0.14em] text-white hover:border-[#f4c76b] hover:text-[#f4c76b]">
              Voir l'offre
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 border border-white/35">
            <div className="border-b border-r border-white/35 p-6 sm:p-8">
              <Earth className="w-7 h-7" strokeWidth={1.5} />
              <p className="mt-12 text-sm font-black uppercase tracking-[0.12em]">Chine</p>
            </div>
            <div className="border-b border-white/35 p-6 sm:p-8">
              <Users className="w-7 h-7" strokeWidth={1.5} />
              <p className="mt-12 text-sm font-black uppercase tracking-[0.12em]">Communauté</p>
            </div>
            <div className="border-r border-white/35 p-6 sm:p-8">
              <PackageCheck className="w-7 h-7" strokeWidth={1.5} />
              <p className="mt-12 text-sm font-black uppercase tracking-[0.12em]">Colis</p>
            </div>
            <div className="p-6 sm:p-8">
              <Zap className="w-7 h-7" strokeWidth={1.5} />
              <p className="mt-12 text-sm font-black uppercase tracking-[0.12em]">Accès à vie</p>
            </div>
          </div>
        </div>
      </section>

      <section id="offre" className="bg-[#f3f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
              <span className="h-px w-8 bg-current"></span>Étape 7 · L'offre
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-[#10131a]">
              La méthode complète !
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-[#4b5868]">
              Ton premier colis peut arriver ce mois-ci !
            </p>
          </div>
          <div className="border border-[#10131a] bg-[#0c111a] p-6 text-white shadow-[0_24px_70px_rgba(16,19,26,0.18)] sm:p-10">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#f4c76b]">
              <span className="h-px flex-1 bg-[#f4c76b]/50"></span>Promotion limitée<span className="h-px flex-1 bg-[#f4c76b]/50"></span>
            </div>
            <div className="mt-8 flex flex-wrap items-end gap-4 border-b border-white/15 pb-8">
              <span className="text-3xl font-bold text-[#8995a4] line-through">200€</span>
              <span className="text-7xl font-black leading-none tracking-[-0.08em] text-[#f4c76b]">100€</span>
            </div>
            <p className="mt-6 border border-white/20 px-4 py-3 text-center text-sm font-bold text-white">
              Paiement unique • Accès à vie
            </p>
            <ul className="mt-6 divide-y divide-white/15 border-y border-white/15">
              {[
                { icon: CircleCheck, text: "Formation complète - méthode pas à pas" },
                { icon: Play, text: "Vidéo de formation privée" },
                { icon: Users, text: "Communauté privée à vie" },
                { icon: Sparkles, text: "Bonus : Lexique complet + guide des erreurs" }
              ].map((Item, i) => (
                <li key={i} className="flex items-center gap-4 py-4 text-sm text-[#eef2f7]">
                  <span className="flex size-9 shrink-0 items-center justify-center border border-[#f4c76b]/60 text-[#f4c76b]">
                    <Item.icon className="w-4 h-4" />
                  </span>
                  {Item.text}
                </li>
              ))}
            </ul>
            <div className="mt-9 border-t border-white/15 pt-8 text-center">
              <p className="text-2xl font-black leading-none tracking-[-0.05em] text-white sm:text-3xl">
                Ton premier colis peut arriver ce mois-ci !
              </p>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#d7dee7]">
                Rejoins les élèves qui ont déjà passé leur première commande grâce à la méthode.
              </p>
              <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#f4c76b] px-6 text-sm font-black uppercase tracking-[0.12em] text-[#10131a] transition-transform hover:-translate-y-1">
                Commander maintenant
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#f4c76b]">• Places limitées</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#14243a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
              <span className="h-px w-8 bg-current"></span>Étape 6 · Dernières questions
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-white">
              Tout ce que tu dois savoir.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/20 bg-[#1b304b]">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6" aria-expanded={openFaq === i}>
                  <span className="text-sm font-bold leading-6 text-white sm:text-base">{faq.q}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center border border-[#f4c76b] text-[#f4c76b]">
                    <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 text-sm text-[#d7e1ec] sm:p-6 sm:pt-0">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4c76b] px-5 py-16 text-[#10131a] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em]">Académie 777</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-none tracking-[-0.06em] sm:text-5xl">
              Ton business d’import commence maintenant.
            </h2>
          </div>
          <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="inline-flex min-h-14 shrink-0 items-center gap-3 bg-[#10131a] px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-1">
            Commander maintenant
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
