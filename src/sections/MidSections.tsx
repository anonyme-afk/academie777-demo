import { useState, useEffect } from 'react';
import { ArrowUpRight, Play, X } from 'lucide-react';

export function MidSections() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    if (activeVideo === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  const videos = [
    { poster: '/T1.jpg', src: '/T1.mov' },
    { poster: '/T2.jpg', src: '/T2.mp4' },
    { poster: '/T3.jpg', src: '/T3.mp4' }
  ];

  return (
    <>
      <section id="programme" className="bg-[#14243a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-12 lg:flex-row lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
                <span className="h-px w-8 bg-current"></span>Étape 3 · Le programme
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-white">
                Ce que tu vas maîtriser !
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#eef2f7]">
              50 modules pour passer du sourcing à la vente, avec les outils et les étapes de l’import-export.
            </p>
          </div>
          <div className="mt-10 grid gap-3 lg:grid-cols-5">
            {[
              { num: "01", title: "Trouver & négocier", desc: "Sourcing sur les plateformes grossistes, Alibaba, 1688, Taobao, techniques de négociation et détection des arnaques." },
              { num: "02", title: "Logistique & douane", desc: "Transitaires DDP, expédition internationale, calcul des taxes, suivi de colis en bateau et en avion." },
              { num: "03", title: "Vendre & scaler", desc: "Revente sur Vinted, Shopify, TikTok Shop, stratégies ADS/SEO et sélection de produits gagnants." },
              { num: "04", title: "Administratif & business", desc: "Création d'entreprise, déclarations, domiciliation, ouverture de compte bancaire international." },
              { num: "05", title: "Outils & communauté", desc: "Applications recommandées, gestion de projet, accès à vie à une communauté active pour poser tes questions." }
            ].map((mod, i) => (
              <article key={i} className="group flex min-h-[290px] flex-col border border-white/20 bg-[#1b304b] p-6 transition-transform hover:-translate-y-1 hover:border-[#f4c76b] sm:min-h-[250px] lg:min-h-[355px]">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="text-sm font-black text-[#f4c76b]">{mod.num}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 transition-colors group-hover:text-[#f4c76b]" />
                </div>
                <h3 className="mt-7 text-2xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-3xl lg:text-2xl">{mod.title}</h3>
                <p className="mt-auto pt-10 text-sm leading-6 text-[#d7e1ec]">{mod.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="temoignages" className="bg-[#f3f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
              <span className="h-px w-8 bg-current"></span>Étape 4 · Ils l'ont fait
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-[#10131a]">
              Ce que disent les membres !
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { quote: "Formation complète pour y arriver au sommet, ya tout qui est bien encadré, tout parfait, j'ai rien à dire les accompagnateurs réactifs de fou ils répondent à toutes les questions je recommande fort fort fort pour devenir meilleur 💪", name: "Erik", role: "Vendeur en physique sur Snapchat", handle: "@erik_arm374", url: "https://www.tiktok.com/@erik_arm374?_r=1&_t=ZN-98yZNV5FfTq" },
              { quote: "Formation qui évolue constamment et le créateur qui répond à toutes les questions, beaucoup de valeur, merci !", name: "Abdrahman", role: "E-commerçant sur Etsy", handle: "@abdrahman_usee", url: "https://www.tiktok.com/@abdrahman_usee?_r=1&_t=ZN-98yZL62zn0Q" },
              { quote: "J'ai fini la formation, elle est simple, claire et précise. Il y a tout ce qu'il faut savoir, franchement excellent !", name: "Dylan", role: "Vendeur en ligne sur Vinted", handle: "@dyskecom", url: "https://www.tiktok.com/@dyskecom?_r=1&_t=ZN-98yZQvRBKVC" },
              { quote: "J'ai regardé toute la formation et c'est la meilleure que j'ai prise. Tout est bien expliqué dans les moindres détails, franchement je recommande fortement.", name: "Sacha", role: "Vendeur en ligne sur Vinted", handle: "@sch2x", url: "https://www.tiktok.com/@sch2x?_r=1&_t=ZN-98yZHvY0gVi" }
            ].map((test, i) => (
              <article key={i} className="flex min-h-[270px] flex-col justify-between border border-[#d9dfe6] bg-white p-6 shadow-[0_12px_40px_rgba(16,19,26,0.05)] sm:p-8">
                <div>
                  <span className="text-4xl font-black leading-none text-[#e4473f]">“</span>
                  <p className="mt-2 text-base leading-7 text-[#283342]">{test.quote}</p>
                </div>
                <div className="mt-8 flex flex-col gap-3 border-t border-[#e3e7ec] pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-black text-[#10131a]">{test.name}</p>
                    <p className="mt-1 text-xs text-[#5b6878]">{test.role}</p>
                  </div>
                  <a href={test.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-[#e4473f] hover:underline">
                    {test.handle}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="bg-[#0c111a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#e4473f]">
                <span className="h-px w-8 bg-current"></span>Étape 5 · Preuves réelles
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl text-white">
                Des colis livrés partout !
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#d7dee7]">
              Découvre les témoignages vidéo des membres de l'Académie 777.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {videos.map((vid, i) => (
              <button 
                key={vid.src} 
                onClick={() => setActiveVideo(i)}
                type="button" 
                className="group relative overflow-hidden border border-white/20 bg-[#151e2b] text-left transition-transform hover:-translate-y-1 hover:border-[#f4c76b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c76b]"
              >
                <div className="relative aspect-[9/14] overflow-hidden">
                  <img src={vid.poster} alt="" className="object-cover transition duration-500 group-hover:scale-105 w-full h-full absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-[#080b12]/10"></div>
                  <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f4c76b] text-[#10131a] shadow-xl transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </span>
                  <span className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-white">Témoignage vidéo</span>
                    <span className="text-xs font-bold text-[#f4c76b]">0{i + 1}</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeVideo !== null && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#05070b]/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Témoignage vidéo"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-[460px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -right-1 -top-14 flex size-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-white sm:-right-12 sm:top-0"
              aria-label="Fermer la vidéo"
            >
              <X className="w-5 h-5" />
            </button>
            <video 
              key={videos[activeVideo].src}
              className="max-h-[78vh] w-full border border-white/20 bg-black object-contain"
              src={videos[activeVideo].src}
              controls
              autoPlay
              playsInline
              preload="auto"
              poster={videos[activeVideo].poster}
            />
          </div>
        </div>
      )}
    </>
  );
}
