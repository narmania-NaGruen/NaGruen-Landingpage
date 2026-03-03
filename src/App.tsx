import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Leaf, Users, Zap, CheckCircle2, ShieldCheck, TrendingUp, Sprout, Mail, Phone, ChevronDown } from "lucide-react";
import React from "react";

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => (
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

interface ProItemProps {
  text: string;
}

const ProItem: React.FC<ProItemProps> = ({ text }) => (
  <li className="flex items-start gap-4 text-nagruen-primary/80 font-light text-sm md:text-base">
    <CheckCircle2 className="w-5 h-5 text-nagruen-primary/40 shrink-0 mt-0.5" />
    <span className="flex-1 min-w-0">{text}</span>
  </li>
);

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-nagruen-accent/10 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left hover:text-nagruen-accent transition-colors group"
    >
      <h3 className="text-lg md:text-xl font-medium tracking-tight pr-8">{question}</h3>
      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-nagruen-accent' : 'text-nagruen-accent/30'}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-nagruen-accent/70 font-light leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.location.pathname === '/' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const faqData = [
    {
      category: "Bewohner:innen",
      items: [
        {
          q: "Wie funktioniert „Garten mieten“ in Wien bei NaGrün?",
          a: "Ganz einfach: Wir aktivieren ungenutzte Innenhöfe in Wiener Wohnanlagen und errichten dort modulare Gartenblocks. Bewohner:innen können eine private Parzelle (24–36 m²) mieten. NaGrün übernimmt dabei die gesamte Infrastruktur, den Aufbau und die laufende Betreuung, damit Sie sofort mit dem Urban Gardening starten können."
        },
        {
          q: "Ist NaGrün wie ein Schrebergarten? Was ist der Unterschied?",
          a: "NaGrün ist die moderne, flexible Alternative zum klassischen Kleingartenverein. Während traditionelle Schrebergärten oft weit entfernt sind, lange Wartelisten haben und strenge Anbau-Pflichten vorschreiben, bieten wir wohnungsnahe Mietgärten direkt vor der Haustür. Unsere Parzellen sind überschaubar groß (24–36 m²) – konzipiert als angenehmes Hobby zur Entspannung und nicht als zusätzliche zeitliche Belastung im hektischen Alltag."
        },
        {
          q: "Wodurch validieren wir unsere Nachfrage?",
          a: "Die Nachfrage nach privatem Grün in Wien ist enorm und bei weitem nicht gedeckt. Ein klares Beispiel sind die Gartenprojekte der Stadt Wien im 21. und 22. Bezirk, die Anfang 2025 über 10.000 Bewerber:innen für nur wenige hundert Plätze verzeichneten. NaGrün schließt diese Lücke, indem wir ungenutzte Flächen in dicht besiedelten Gebieten wie dem 1100 Favoriten oder dem Sonnwendviertel aktivieren."
        },
        {
          q: "Was kostet eine Gartenparzelle bei NaGrün?",
          a: "Wir bieten transparente All-in-Mietmodelle an, die bereits Strom, Wasser und die Grundausstattung enthalten. In der Pilotphase orientieren wir uns an attraktiven Monatspauschalen für 12-Monats-Verträge (ab ca. 100€) oder flexiblen Saisonmieten für das Sommerhalbjahr, um Natur im Alltag für jede Familie leistbar zu machen."
        }
      ]
    },
    {
      category: "Hausverwaltung & Eigentümer",
      items: [
        {
          q: "Welche Kosten entstehen für Eigentümer (CAPEX)?",
          a: "Für Eigentümer und Hausverwaltungen gilt: 0 € CAPEX. NaGrün finanziert, plant, baut und betreibt die gesamte Anlage. Wir verwandeln brachliegende Restflächen ohne finanzielle Investition Ihrerseits in hochwertige Gemeinschaftsflächen."
        },
        {
          q: "Wie steht es um Haftung, Versicherung und Rückbau?",
          a: "NaGrün übernimmt die vollständige Risikoübernahme. Das umfasst die Auslastung, den laufenden Betrieb, die Instandhaltung sowie die Versicherung der Anlage. Unser System ist als modulares Plug-and-Play-Prinzip konzipiert und somit jederzeit vollständig und spurlos rückbaubar."
        },
        {
          q: "Wie passt NaGrün zu ESG-Reporting und Nachhaltigkeitszielen?",
          a: "Durch die Aktivierung von Innenhöfen leisten wir einen messbaren Beitrag zum ESG-Impact. Wir fördern die Biodiversität im urbanen Raum, reduzieren Hitzeinseln durch aktive Begrünung (Mikroklima-Regulierung) und steigern die soziale Mieterzufriedenheit sowie die langfristige Bindung an den Standort."
        }
      ]
    },
    {
      category: "Wirkung & Technik",
      items: [
        {
          q: "Was ist ein modularer „Gartenblock“ konkret?",
          a: "Ein standardisierter NaGrün Gartenblock besteht typischerweise aus 12 Einzelparzellen auf einer Fläche von ca. 416 m². Jede Einheit verfügt über 2-3 Pflanzbeete, einen abschließbaren Stauraum für Werkzeug und einen eigenen Zugang. Die gesamte Anlage ist durch ein Haupttor gesichert."
        },
        {
          q: "Wie verbessert NaGrün das Mikroklima in Wien?",
          a: "Unsere Anlagen wirken aktiv gegen urbane Hitzeinseln. Durch Entsiegelung (wo möglich) und intensive Begrünung verdunstet Wasser, was die Umgebungstemperatur im Innenhof spürbar senkt. Dies ist eine effektive Maßnahme zur Klimawandelanpassung für Bestandsobjekte und Neubauten."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-nagruen-primary via-nagruen-primary to-nagruen-dark selection:bg-nagruen-accent selection:text-nagruen-primary">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.flatMap(cat => cat.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          })))
        })}
      </script>
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
          <div className="flex items-center gap-4 md:gap-10">
            {[
              { name: "Vision", id: "vision" },
              { name: "Lösung", id: "solution" },
              { name: "Q&A", id: "knowledge" },
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
                Wir aktivieren ungenutzte Innenhöfe und Restflächen in Wiener Wohnanlagen und machen daraus Innovative, rückbaubare Mietgartenanlagen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src="/hero visu.png"
                  alt="NaGrün Visualisierung – Innovative Mietgärten in einem Wiener Innenhof für Urban Gardening und Biodiversität"
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
          {/* ... existing benefits content ... */}
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 text-nagruen-primary">Die Lösung für alle.</h2>
              <p className="text-lg md:text-xl text-nagruen-primary/60 font-light">Vorteile, die über den Gartenzaun hinausgehen.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Residents */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
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
                whileHover={{ y: -5 }}
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-nagruen-accent/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* SEO FAQ Section */}
        <section id="knowledge" className="py-20 md:py-32 px-4 md:px-12 relative overflow-hidden bg-nagruen-primary/5">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-6xl font-black font-display tracking-tight text-gradient mb-6 leading-tight">Häufige Fragen</h2>
              <p className="text-lg text-nagruen-accent/60 font-light leading-relaxed">
                Alles Wissenswerte über das Pilotprojekt NaGrün, <strong>Urban Gardening</strong> in Wiener Wohnhausanlagen und wie wir den Wunsch nach einem eigenen <strong>Garten in Wien</strong> erfüllen.
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  category: "Bewohner:innen",
                  items: [
                    {
                      q: "Wie funktioniert die Gartenmiete bei NaGrün?",
                      a: "NaGrün bringt innovative Mietgärten direkt in Wiener Wohnanlagen: Wir aktivieren ungenutzte Innenhöfe und bauen dort standardisierte Gartenblocks mit 12 privaten Parzellen. Du mietest eine 24–36 m² Gartenparzelle und kannst sofort loslegen – mit fertig vorbereiteten, humusbefüllten Beeten, abschließbarem Schrank sowie zentral geteilter Wasser- und Strom-Infrastruktur. Betrieb, Organisation und Regeln sind so aufgesetzt, dass es für alle im Haus unkompliziert bleibt."
                    },
                    {
                      q: "Was unterscheidet ein NaGrün Garten von einem Schrebergarten?",
                      a: "NaGrün ist eine innovative wohnungsnahe Alternative zur klassischen Schrebergartenanlage oder zum Kleingartenverein: Statt einer weit entfernten Anlage mit Vereinslogik bekommst du bei NaGrün eine überschaubare, private Gartenparzelle (24–36 m²) direkt im Innenhof deiner Wohnanlage. Gleichzeitig gibt es eine klare Hausordnung (Ruhe, Sauberkeit, Nutzung), damit das Miteinander im Wohnhaus entspannt bleibt – ohne Stress, ohne Konflikte. Im Gegensatz zum klassischen Kleingarten mit meistens 100–200 m² ist NaGrün bewusst kleiner, näher und alltagstauglich."
                    },
                    {
                      q: "Was kostet eine Gartenparzelle bei NaGrün?",
                      a: (
                        <div className="space-y-6">
                          <p>Bei NaGrün mietest du zum Fixpreis pro Monat (Flatrate) – unkompliziert und transparent:</p>
                          <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <strong>24 m² Parzelle</strong>: 109 € / Monat
                                <p className="text-sm opacity-60">inkl. 2 humusbefüllte Beete + abschließbarer Schrank</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <strong>36 m² Parzelle</strong>: 149 € / Monat
                                <p className="text-sm opacity-60">inkl. 3 humusbefüllte Beete + abschließbarer Schrank</p>
                              </div>
                            </li>
                          </ul>
                          <div className="space-y-3 pt-2">
                            <p className="text-sm font-medium text-nagruen-accent/80">Wasser und Strom sind über eine zentral geteilte Infrastruktur organisiert:</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                                <span>Wasser über eine zentral geteilte Wasserstelle</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                                <span>Strom über zentral geteilte Elektro-Verteilerstellen (für alle Gärtner:innen gut zugänglich)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )
                    },
                    {
                      q: "Was bekomme ich konkret bei den jeweiligen Gärten?",
                      a: (
                        <div className="space-y-6">
                          <p>Du bekommst eine abgegrenzte, private Gartenfläche in einer geordneten Anlage:</p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>24 m²</strong>: 2 mit Humuserde befüllte Beete</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>36 m²</strong>: 3 mit Humuserde befüllte Beete</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>Abschließbarer Schrank</strong> für Werkzeug & Gießkanne</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>Zentrale Wasserstelle</strong> und <strong>Stromzugang</strong></span>
                            </li>
                          </ul>
                        </div>
                      )
                    }
                  ]
                },
                {
                  category: "Hausverwaltung & Eigentümer",
                  items: [
                    {
                      q: "Welche Kosten entstehen für Eigentümer?",
                      a: "Für Eigentümer und Hausverwaltungen gilt: 0 € CAPEX. NaGrün finanziert, plant, baut und betreibt die gesamte Anlage. Wir verwandeln brachliegende Restflächen ohne finanzielle Investition Ihrerseits in hochwertige Gemeinschaftsflächen."
                    },
                    {
                      q: "Wie steht es um Haftung, Versicherung und Rückbau?",
                      a: "NaGrün übernimmt die vollständige Risikoübernahme. Das umfasst die Auslastung, den laufenden Betrieb, die Instandhaltung sowie die Versicherung der Anlage. Unser System ist als modulares Plug-and-Play-Prinzip konzipiert und somit jederzeit vollständig und spurlos rückbaubar."
                    },
                    {
                      q: "Wie passt NaGrün zu ESG-Reporting und Nachhaltigkeitszielen?",
                      a: "Durch die Aktivierung von Innenhöfen leisten wir einen messbaren Beitrag zum ESG-Impact. Wir fördern die Biodiversität im urbanen Raum, reduzieren Hitzeinseln durch aktive Begrünung (Mikroklima-Regulierung) und steigern die soziale Mieterzufriedenheit sowie die langfristige Bindung an den Standort."
                    }
                  ]
                },
                {
                  category: "Hintergrund & Wirkung",
                  items: [
                    {
                      q: "Wodurch validieren wir unsere Nachfrage?",
                      a: "Die Nachfrage nach privatem Grün in Wien ist enorm und bei weitem nicht gedeckt. Ein klares Beispiel sind die Gartenprojekte der Stadt Wien im 21. und 22. Bezirk, die Anfang 2025 über 10.000 Bewerber:innen für nur wenige hundert Plätze verzeichneten. NaGrün schließt diese Lücke, indem wir ungenutzte Flächen in dicht besiedelten Gebieten wie dem 1100 Favoriten oder dem Sonnwendviertel aktivieren."
                    },
                    {
                      q: "Was ist ein modularer Gartenblock konkret?",
                      a: (
                        <div className="space-y-6">
                          <p>Ein standardisierter NaGrün Gartenblock ist ein modulares System:</p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>Fläche</strong>: 13x32m (ca. 416 m² Gesamtfläche)</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>Kapazität</strong>: Typischerweise 12 Einzelparzellen</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>Ausstattung</strong>: 2-3 Pflanzbeete & Schrank pro Einheit</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-nagruen-accent/40 shrink-0 mt-0.5" />
                              <span><strong>Sicherheit</strong>: Gesichert durch ein Haupttor</span>
                            </li>
                          </ul>
                        </div>
                      )
                    },
                    {
                      q: "Wie verbessert NaGrün das Mikroklima in Wien?",
                      a: "Unsere Anlagen wirken aktiv gegen urbane Hitzeinseln. Durch Entsiegelung (wo möglich) und intensive Begrünung verdunstet Wasser, was die Umgebungstemperatur im Innenhof spürbar senkt. Dies ist eine effektive Maßnahme zur Klimawandelanpassung für Bestandsobjekte und Neubauten."
                    }
                  ]
                }
              ].map((category, catIndex) => (
                <div key={category.category} className="glass-card p-6 md:p-10 rounded-[3rem] border-white/5">
                  <h3 className="text-nagruen-accent font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-3">
                    <div className="w-1 h-4 bg-nagruen-accent rounded-full" />
                    {category.category}
                  </h3>
                  <div className="divide-y divide-nagruen-accent/10">
                    {category.items.map((item, itemIndex) => {
                      const globalIndex = catIndex * 10 + itemIndex;
                      return (
                        <AccordionItem
                          key={item.q}
                          question={item.q}
                          answer={item.a}
                          isOpen={openIndex === globalIndex}
                          onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-nagruen-accent/5 blur-[100px] rounded-full -translate-y-1/2" />
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
              <h2 className="text-3xl md:text-6xl font-black font-display tracking-tight text-gradient mb-8 pb-1 leading-tight">
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
