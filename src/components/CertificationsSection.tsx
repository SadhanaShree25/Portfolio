import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, FileText } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    credentialUrl: "./Orcale.pdf",
    icon: "🎓",
  },
  {
    title: "Pragati: Path to Future - Cohort 4",
    issuer: "Infosys Springboard",
    year: "2025",
    credentialUrl: "/Pragati-Path to Future.pdf",
    icon: "☁️",
  },
  
  {
    title: "React Certification",
    issuer: "Udemy",
    year: "2026",
    credentialUrl: "/React-Udemy.pdf",
    icon: "⚛️",
  },
]

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="glass-card p-4 rounded-xl h-full flex flex-col cursor-pointer"
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          className="text-3xl mb-3"
          animate={{
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {cert.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-base font-display font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300 leading-tight">
          {cert.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
          <Award size={12} className="text-primary" />
          <span>{cert.issuer}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
          <Calendar size={12} className="text-secondary" />
          <span>{cert.year}</span>
        </div>

        {/* PDF Viewer or External Link */}
        {cert.credentialUrl && cert.credentialUrl.endsWith(".pdf") ? (
          <div className="mt-auto pt-3 space-y-2">
            <div className="relative overflow-hidden rounded-lg border border-border/50 bg-muted/20 backdrop-blur-sm">
              <iframe
                src={cert.credentialUrl}
                title={cert.title}
                className="w-full h-48 rounded-lg"
                style={{ border: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <motion.a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-primary hover:text-secondary transition-colors duration-300 w-full justify-center py-1.5 rounded-md hover:bg-primary/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FileText size={12} />
              Open PDF
              <ExternalLink size={12} />
            </motion.a>
          </div>
        ) : (
          cert.credentialUrl && (
            <motion.a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-primary hover:text-secondary transition-colors duration-300 mt-auto pt-3"
              whileHover={{ x: 5 }}
            >
              View Credential
              <ExternalLink size={12} />
            </motion.a>
          )
        )}

        {/* Glow border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 0 30px hsl(265 89% 66% / 0.4), inset 0 1px 0 hsl(265 89% 66% / 0.2)"
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const ref = useRef(null);

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            Achievements
          </span>
          <h2 className="section-heading">
            Certifications & Awards
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Professional certifications and achievements that validate my expertise
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
