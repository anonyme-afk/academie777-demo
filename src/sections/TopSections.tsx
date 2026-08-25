import { ArrowUpRight, ArrowDown, Sparkles, Check, ShieldCheck, Clock3, Users } from 'lucide-react';

export function TopSections() {
  return (
    <>
      <section id="accueil" className="relative isolate overflow-hidden bg-[#0a0d14] text-white">
        <div className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30 bg-[url('/academie-777-space-logo-04ec1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[#070a11]/70"></div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080b12_0%,rgba(8,11,18,0.88)_32%,rgba(8,11,18,0.4)_68%,rgba(8,11,18,0.7)_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#080b12] to-transparent"></div>
        
        <div className="mx-auto grid min-h-[calc(100vh-108px)] max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_380px] lg:gap-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#f4c76b] sm:text-[11px]">
              <span>Formation premium</span>
              <span className="h-1 w-1 bg-[#f4c76b]"></span>
              <span>Import Chine</span>
            </div>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.5rem,8vw,7.8rem)] font-black leading-[0.86] tracking-[-0.075em] text-white">
              Ton business d’import commence maintenant.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[#eef2f7] sm:text-lg sm:leading-8">
              Apprends l’import-export depuis zéro. Trouve des fournisseurs fiables, des produits gagnants et lance ton business rentable rapidement.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#f4c76b] px-6 text-sm font-black uppercase tracking-[0.12em] text-[#10131a] transition-transform hover:-translate-y-1">
                Commander maintenant
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#programme" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-white">
                Voir le programme
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/20 py-5">
              <div className="border-r border-white/20 pr-3">
                <p className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">50</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#d7dee7] sm:text-[11px]">Modules</p>
              </div>
              <div className="border-r border-white/20 px-3">
                <p className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">+100</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#d7dee7] sm:text-[11px]">Élèves formés</p>
              </div>
              <div className="pl-3">
                <p className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">5★</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#d7dee7] sm:text-[11px]">Note</p>
              </div>
            </div>
          </div>
          
          <div className="border border-white/25 bg-[#0d111a]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-white/15 pb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f4c76b]">Promotion limitée</p>
                <p className="mt-3 text-2xl font-black tracking-[-0.05em] text-white">Formation Import Export</p>
              </div>
            </div>
            <div className="flex items-end gap-3 py-7">
              <span className="text-3xl font-bold text-[#8793a3] line-through">200€</span>
              <span className="text-6xl font-black leading-none tracking-[-0.08em] text-[#f4c76b]">100€</span>
            </div>
            <p className="border border-white/20 px-4 py-3 text-center text-xs font-bold text-white">
              Paiement unique • Accès à vie
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#d7dee7]">
              <li className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-[#f4c76b]" /> Formation complète - méthode pas à pas</li>
              <li className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-[#f4c76b]" /> Vidéo de formation privée</li>
              <li className="flex gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-[#f4c76b]" /> Communauté privée à vie</li>
            </ul>
            <a href="https://academie777.fr/products/formation-import-export-777" target="_blank" rel="noreferrer" className="mt-7 flex min-h-14 items-center justify-center gap-2 bg-white px-5 text-sm font-black uppercase tracking-[0.1em] text-[#10131a] transition-colors hover:bg-[#f4c76b]">
              Commencer aujourd’hui
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4c76b]">
              Accès instantané après paiement
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9dfe6] bg-[#f3f5f7]">
        <div className="mx-auto grid max-w-[1440px] divide-y divide-[#d9dfe6] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          <div className="flex items-center gap-4 py-6 md:pr-8">
            <ShieldCheck className="w-6 h-6 shrink-0 text-[#e4473f]" />
            <div>
              <p className="text-sm font-black text-[#10131a]">Paiement sécurisé</p>
              <p className="mt-1 text-xs text-[#5b6878]">Paiement traité par un prestataire tiers</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-6 md:px-8">
            <Clock3 className="w-6 h-6 shrink-0 text-[#e4473f]" />
            <div>
              <p className="text-sm font-black text-[#10131a]">Accès instantané</p>
              <p className="mt-1 text-xs text-[#5b6878]">Après paiement</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-6 md:pl-8">
            <Users className="w-6 h-6 shrink-0 text-[#e4473f]" />
            <div>
              <p className="text-sm font-black text-[#10131a]">Accompagnement à vie</p>
              <p className="mt-1 text-xs text-[#5b6878]">Communauté privée à vie</p>
            </div>
          </div>
        </div>
      </section>

      <section id="parcours" className="bg-[#f3f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
              <span className="h-px w-8 bg-current"></span>Étape 1 · Le blocage
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-[#10131a]">
              Tu sais que l’import est rentable ! Mais tu ne sais pas par où commencer ?
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="max-w-2xl text-base leading-8 text-[#4b5868] sm:text-lg">
              Les bonnes questions arrivent avant la première commande. Cette méthode rassemble les étapes nécessaires pour avancer avec une meilleure compréhension de l’import-export.
            </p>
            <div className="mt-9 grid gap-3">
              {[
                "Tu as peur de te faire arnaquer par un fournisseur que tu n'as jamais vu.",
                "Tu ne sais pas si le prix qu'on te propose est vraiment le prix usine.",
                "La douane, les taxes, le transport DDP — tout ça te semble incompréhensible.",
                "Tu as regardé des vidéos gratuites, mais personne ne t'explique la méthode complète."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 border border-[#d9dfe6] bg-white p-5 shadow-[0_8px_30px_rgba(16,19,26,0.04)]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-[#e4473f] text-sm font-black text-[#e4473f]">×</span>
                  <p className="text-sm leading-6 text-[#283342] sm:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c111a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <div className="lg:sticky lg:top-36">
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
              <span className="h-px w-8 bg-current"></span>Étape 2 · La méthode
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-white">
              Académie 777 : la vraie compétence, pas une liste de contacts.
            </h2>
            <div className="mt-9 max-w-lg border-l-2 border-[#f4c76b] pl-5">
              <p className="text-xl font-black tracking-[-0.03em] text-white sm:text-2xl">Devenir autonome à vie !</p>
              <p className="mt-4 text-sm leading-7 text-[#d7dee7] sm:text-base">
                Trouver, vérifier, contacter et négocier avec n'importe quel fournisseur en Chine, pour n'importe quel produit — sans dépendre d'une liste qui devient obsolète en quelques mois.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-white/20 bg-white/[0.04] p-5 sm:p-6">
              <p className="text-4xl font-black tracking-[-0.07em] text-[#f4c76b]">50</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eef2f7]">Modules</p>
            </div>
            <div className="border border-white/20 bg-white/[0.04] p-5 sm:p-6">
              <p className="text-4xl font-black tracking-[-0.07em] text-[#f4c76b]">+100</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eef2f7]">Élèves formés</p>
            </div>
            <div className="border border-white/20 bg-white/[0.04] p-5 sm:p-6">
              <p className="text-4xl font-black tracking-[-0.07em] text-[#f4c76b]">5★</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#eef2f7]">Note</p>
            </div>
            <div className="relative mt-5 overflow-hidden border border-white/15 bg-[#172132] sm:col-span-3 sm:mt-8">
              <img src="/academie-777-space-logo-04ec1.jpg" alt="Académie 777" className="h-64 w-full object-cover object-center opacity-60 sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c111a] via-[#0c111a]/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="max-w-sm text-lg font-black tracking-[-0.04em] text-white sm:text-2xl">
                  Trouver. Vérifier. Contacter. Négocier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
