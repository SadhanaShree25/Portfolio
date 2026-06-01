import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, FileText, X } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    credentialUrl: "./Orcale.pdf",
    icon: "🎓",
    description: "Covers fundamentals of artificial intelligence, machine learning concepts, and OCI generative AI services.",
  },
  {
    title: "Pragati: Path to Future - Cohort 4",
    issuer: "Infosys Springboard",
    year: "2025",
    credentialUrl: "/Pragati-Path to Future.pdf",
    icon: "☁️",
    description: "Industry readiness cohort training path covering critical software engineering principles and cloud patterns.",
  },
  {
    title: "React Certification",
    issuer: "Udemy",
    year: "2026",
    credentialUrl: "/React-Udemy.pdf",
    icon: "⚛️",
    description: "Comprehensive React program covering modern hooks, context API, state managers, and deployment strategies.",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const openCertModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsIframeLoading(true);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-glow-blue/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4 font-medium">
            Achievements
          </span>
          <h2 className="section-heading">Certifications & Awards</h2>
          <p className="section-subheading mx-auto mt-4 font-sans text-sm md:text-base">
            Professional certifications that validate my foundations, skill growth, and expertise in programming and AI systems.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => openCertModal(cert)}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between border border-border/20 bg-card/15 backdrop-blur-md relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3.5xl bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center border border-primary/20 select-none group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </span>
                      <div className="flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">{cert.issuer}</span>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-0.5">
                          <Calendar size={12} />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed font-sans mb-6">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-secondary transition-colors mt-auto">
                    <FileText size={14} />
                    <span>View Certificate</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Hover Glow Grid */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                    whileHover={{
                      boxShadow: "0 0 30px hsl(var(--primary)/0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Unified Certificate Modal overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={closeCertModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="glass-card w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col border border-border/40 shadow-2xl bg-card/90"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-border/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{selectedCert.issuer} Certification</span>
                  <h3 className="font-display font-bold text-lg md:text-xl text-foreground leading-tight">{selectedCert.title}</h3>
                </div>
                <button
                  onClick={closeCertModal}
                  className="p-2 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Iframe) */}
              <div className="flex-1 bg-background/40 relative min-h-[350px] md:min-h-[500px]">
                {isIframeLoading && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 bg-background/90 z-10">
                    <span className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <span className="text-xs text-muted-foreground font-medium font-sans">Loading Certificate document...</span>
                  </div>
                )}
                <iframe
                  src={`${selectedCert.credentialUrl}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full border-none"
                  onLoad={() => setIsIframeLoading(false)}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-border/40 flex items-center justify-between bg-muted/10">
                <p className="text-xs text-muted-foreground font-sans">Year Completed: {selectedCert.year}</p>
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-xs font-semibold rounded-full flex items-center gap-1.5"
                >
                  <ExternalLink size={12} />
                  Open Full PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
