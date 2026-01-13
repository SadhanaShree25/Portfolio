import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    year: "2024",
    credentialUrl: "https://coursera.org",
    icon: "🎓",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialUrl: "https://aws.amazon.com",
    icon: "☁️",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    credentialUrl: "https://freecodecamp.org",
    icon: "📜",
  },
  {
    title: "React Developer Certification",
    issuer: "HackerRank",
    year: "2023",
    credentialUrl: "https://hackerrank.com",
    icon: "⚛️",
  },
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    year: "2023",
    credentialUrl: "https://fullstackopen.com",
    icon: "🏆",
  },
  {
    title: "Google UX Design",
    issuer: "Google (Coursera)",
    year: "2022",
    credentialUrl: "https://coursera.org",
    icon: "🎨",
  },
];

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
        className="glass-card p-6 rounded-2xl h-full cursor-pointer"
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          className="text-4xl mb-4"
          animate={{
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {cert.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
          {cert.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Award size={14} className="text-primary" />
          <span>{cert.issuer}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <Calendar size={14} className="text-secondary" />
          <span>{cert.year}</span>
        </div>

        {cert.credentialUrl && (
          <motion.a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            View Credential
            <ExternalLink size={14} />
          </motion.a>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
