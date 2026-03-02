import { motion } from "motion/react";
import { Leaf, Users, Zap, CheckCircle2, ShieldCheck, TrendingUp, Sprout } from "lucide-react";

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
  <li className="flex items-start gap-3 text-nagruen-accent/80 font-light text-sm md:text-base">
    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-nagruen-accent shrink-0 mt-0.5" />
    <span>{text}</span>
  </li>
);

export default function App() {
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
                <div className="mb-8 md:mb-12">
                  <h2 className="text-4xl md:text-7xl font-black font-display text-gradient tracking-tight leading-tight">
                    Die Vision
                  </h2>
                  <p className="text-xl md:text-3xl italic font-display font-light text-gradient mt-4">
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
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {/* Residents */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                viewport={{ once: true }}
                className="p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-nagruen-primary/5 transition-all duration-500"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-nagruen-primary text-nagruen-cream flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium break-words">Bewohner:innen</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  <ProItem text="Wohnungsnahe Grünoase der Traum vom eigenen Garten mitten in der Stadt." />
                  <ProItem text="Überschaubarer Aufwand durch modulare Einheiten mit 24–36 m²." />
                  <ProItem text="All-in Miete: Strom, Wasser und Grundausstattung." />
                  <ProItem text="Kurzer Weg, kein Pendeln zum Schrebergarten, übersichtliche Anlage im Innenhof." />
                  <ProItem text="Klare Regeln, Betreuung und Ansprechperson" />
                </ul>
              </motion.div>
 
              {/* Owners */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                viewport={{ once: true }}
                className="p-6 md:p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-nagruen-primary/5 transition-all duration-500"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-nagruen-primary text-nagruen-cream flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium break-words">Grundbesitzer:innen</h3>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  <ProItem text="€0 CAPEX: Wir liefern das Rundum-sorglos-Paket aus Bau, Betrieb und Vermietung." />
                  <ProItem text="Recurring Revenue Pachtmodell mit langfristiger Partnerschaft." />
                  <ProItem text="Wir übernehmen die gesamte operative Abwicklung." />
                  <ProItem text="Vollständige Risikoübernahme durch NaGrün." />
                  <ProItem text="Messbarer ESG-Impact und höhere Mieterzufriedenheit." />
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Subtle decoration for cream section */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-nagruen-accent/10 blur-[80px] rounded-full pointer-events-none" />
        </section>

        {/* Footer */}
        <footer id="contact" className="py-20 px-6 md:px-12 border-t border-nagruen-accent/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <div className="flex flex-col gap-6">
                <Logo />
                <div className="text-sm text-nagruen-accent/60 font-light leading-relaxed max-w-xs">
                  NaGrün AT<br />
                  Wien, Österreich<br />
                  <a href="mailto:info@na-gruen.at" className="hover:text-nagruen-accent transition-all duration-300 hover:pl-1">info@na-gruen.at</a><br />
                  <a href="tel:+436763043815" className="hover:text-nagruen-accent transition-all duration-300 hover:pl-1">+43 (0) 676 3043815</a>
                </div>
              </div>
              <div className="flex md:justify-end gap-12 text-sm uppercase tracking-widest font-medium text-nagruen-accent/40">
                <motion.a whileHover={{ x: 5, color: "#B3C393" }} href="#" className="transition-colors">Impressum</motion.a>
                <motion.a whileHover={{ x: 5, color: "#B3C393" }} href="#" className="transition-colors">Datenschutz</motion.a>
              </div>
            </div>
            <div className="pt-8 border-t border-nagruen-accent/5 text-center">
              <p className="text-xs text-nagruen-accent/30 font-light uppercase tracking-widest">
                © {new Date().getFullYear()} NaGrün. Modulare Infrastruktur für urbane Lebensqualität.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
