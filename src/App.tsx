import { motion } from "motion/react";
import { useEffect } from "react";
import { Leaf, Users, Zap, CheckCircle2, ShieldCheck, TrendingUp, Sprout, Mail, Phone } from "lucide-react";

const Logo = ({ onClick }: { onClick?: () => void }) => (
  <div className="flex items-center gap-2 group cursor-pointer" onClick={onClick}>
    <img
      src="/logo.png"
      alt="NaGrün Logo"
      className="h-8 md:h-10 w-auto object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
        (e.target as HTMLImageElement).parentElement!.innerHTML += '<span class="logo-text text-2xl tracking-tight text-nagruen-accent">NaGrün</span>';
      }}
      referrerPolicy="no-referrer"
    />
  </div>
);

const ProItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-4 text-nagruen-primary/80 font-light text-sm md:text-base">
    <CheckCircle2 className="w-5 h-5 text-nagruen-primary/40 shrink-0 mt-0.5" />
    <span className="flex-1 min-w-0">{text}</span>
  </li>
);

export default function App() {
  useEffect(() => {
    // If we land with #footer, scroll there after a small delay to account for hydration/animations
    if (window.location.hash === '#footer') {
      setTimeout(() => {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nagruen-primary via-nagruen-primary to-nagruen-dark selection:bg-nagruen-accent selection:text-nagruen-primary">
      {/* Navigation Slider */}
      <nav className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-2xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="glass-card rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between shadow-2xl border-white/20"
        >
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <Logo onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
          <div className="flex items-center gap-3 md:gap-10">
            {[
              { name: "Vision", id: "vision" },
              { name: "Lösung", id: "solution" },
              { name: "Kontakt", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs md:text-sm font-medium uppercase tracking-widest text-nagruen-accent/70 hover:text-nagruen-accent transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative flex flex-col items-center justify-start px-4 md:px-12 pt-32 md:pt-48 pb-12 md:pb-13 overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6 md:mb-10 font-display text-gradient">
                Was ist NaGrün?
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-3xl text-nagruen-accent/80 max-w-4xl mx-auto font-light leading-snug px-4 md:px-0 mb-12"
              >
                Wir aktivieren ungenutzte Innenhöfe und Restflächen in Wiener Wohnanlagen und machen daraus Inovative, rückbaubare Mietgartenanlagen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src="/hero visu.png"
                  alt="NaGrün Visualisierung"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nagruen-primary/40 to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-12 md:py-30 px-4 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-12">
                  <h2 className="text-3xl md:text-6xl font-black font-display text-gradient tracking-tight leading-tight mb-4">
                    Die Vision
                  </h2>
                  <p className="text-lg md:text-xl font-display font-light text-nagruen-accent/60">
                    Biodiversität & Gemeinschaft
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-nagruen-accent/70 font-light leading-relaxed">
                  <p>
                    NaGrün ist mehr als nur ein Garten. Ein Gartenblock besteht aus <strong>12 Einzelparzellen</strong> und schafft nachhaltige Mehrwerte durch die Förderung von
                    <strong>Biodiversität</strong> und die Verbesserung des <strong>Mikroklimas</strong> in dicht besiedelten Gebieten.
                    Unsere modularen Gartenflächen wirken aktiv gegen Hitzeinseln und bieten Lebensraum für lokale Flora und Fauna.
                  </p>
                  <p>
                    Gleichzeitig stärken wir den <strong>Community-Zusammenhalt</strong>. Wir beleben Wohnanlagen, indem wir
                    Begegnungsorte schaffen, die Menschen zusammenbringen und die Identifikation mit dem eigenen Wohnumfeld fördern.
                    Ein Pilotprojekt, das klein startet, schnell lernt und nachhaltig skaliert.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 md:p-8 glass-card rounded-2xl glass-card-hover"
                >
                  <Sprout className="w-8 h-8 text-nagruen-accent mb-4" />
                  <h3 className="text-lg font-medium mb-2 text-nagruen-accent">Klima & Natur</h3>
                  <p className="text-sm text-nagruen-accent/60 font-light">Messbare Reduktion von Hitzeinseln und aktive Förderung der Artenvielfalt.</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 md:p-8 glass-card rounded-2xl glass-card-hover"
                >
                  <Users className="w-8 h-8 text-nagruen-accent mb-4" />
                  <h3 className="text-lg font-medium mb-2 text-nagruen-accent">Soziale Belebung</h3>
                  <p className="text-sm text-nagruen-accent/60 font-light">Wohnanlagen werden zu lebendigen Orten der Begegnung und Aktivität.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="solution" className="py-20 md:py-32 px-4 md:px-12 bg-nagruen-cream text-nagruen-primary relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4">Die Lösung für alle.</h2>
              <p className="text-lg md:text-xl text-nagruen-primary/60 font-light">Vorteile, die über den Gartenzaun hinausgehen.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Residents */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                viewport={{ once: true }}
                className="p-8 md:p-12 bg-white/90 backdrop-blur-sm rounded-[2.5rem] border border-nagruen-primary/10 transition-all duration-500 shadow-xl"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-nagruen-primary text-nagruen-cream flex items-center justify-center shrink-0 shadow-lg">
                    <Leaf className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-nagruen-primary tracking-tight">Bewohner:innen</h3>
                </div>
                <ul className="space-y-5">
                  <ProItem text="Wohnungsnahe Grünoase – der Traum vom eigenen Garten mitten in der Stadt." />
                  <ProItem text="Überschaubarer Aufwand durch modulare Einheiten mit 24–36 m²." />
                  <ProItem text="All-in Miete: Strom, Wasser und Grundausstattung inklusive." />
                  <ProItem text="Kurzer Weg, kein Pendeln – Erholung direkt in der Wohnhausanlage." />
                  <ProItem text="Klare Regeln und professionelle Betreuung durch NaGrün." />
                </ul>
              </motion.div>

              {/* Owners */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                viewport={{ once: true }}
                className="p-8 md:p-12 bg-white/90 backdrop-blur-sm rounded-[2.5rem] border border-nagruen-primary/10 transition-all duration-500 shadow-xl"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-nagruen-primary text-nagruen-cream flex items-center justify-center shrink-0 shadow-lg">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-nagruen-primary tracking-tight">Grundbesitzer:innen</h3>
                </div>
                <ul className="space-y-5">
                  <ProItem text="€0 CAPEX: Komplettpaket aus Bau, Betrieb und Vermietung durch uns." />
                  <ProItem text="Stabiles Pachtmodell mit langfristiger und sicherer Partnerschaft." />
                  <ProItem text="Full-Service: Wir übernehmen die komplette operative Abwicklung." />
                  <ProItem text="Risikoübernahme: NaGrün trägt die volle Verantwortung für die Anlage." />
                  <ProItem text="ESG-Impact: Messbare Steigerung von Biodiversität und Wohnwert." />
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-nagruen-accent/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-40 px-4 md:px-12 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] p-12 md:p-20 shadow-2xl border-white/10"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display text-gradient mb-8 pb-1 leading-tight">
                Noch Fragen?
              </h2>
              <p className="text-lg md:text-xl text-nagruen-accent/70 font-light mb-12">
                Kontaktieren Sie uns gerne direkt – wir freuen uns auf Ihre Anfrage.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <a
                  href="mailto:info@na-gruen.at"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-nagruen-accent/10 flex items-center justify-center group-hover:bg-nagruen-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-nagruen-accent" />
                  </div>
                  <span className="text-lg font-medium text-nagruen-accent group-hover:text-nagruen-cream transition-colors">
                    info@na-gruen.at
                  </span>
                </a>

                <a
                  href="tel:+436763043815"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-nagruen-accent/10 flex items-center justify-center group-hover:bg-nagruen-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-nagruen-accent" />
                  </div>
                  <span className="text-lg font-medium text-nagruen-accent group-hover:text-nagruen-cream transition-colors">
                    +43 (0) 676 304 38 15
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-nagruen-accent/5 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Footer */}
        <footer id="footer" className="py-12 px-6 md:px-12 border-t border-nagruen-accent/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <span className="font-display font-bold text-xl tracking-tight text-nagruen-accent/40 mr-4">NaGrün</span>
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-medium text-nagruen-accent/30">
                <motion.a whileHover={{ color: "#B3C393" }} href="/impressum" className="transition-colors">Impressum</motion.a>
                <motion.a whileHover={{ color: "#B3C393" }} href="/datenschutz" className="transition-colors">Datenschutz</motion.a>
              </div>
            </div>

            <p className="text-xs text-nagruen-accent/20 font-light uppercase tracking-widest">
              © {new Date().getFullYear()} Iwane Narmania - NaGrün Unternehmen vor Gründung
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
