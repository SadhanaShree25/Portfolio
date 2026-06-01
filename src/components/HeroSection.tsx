import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import ThreeScene from "./ThreeScene";

const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  useEffect(() => {
    setText(phrases[index].substring(0, subIndex));
  }, [subIndex, index, phrases]);

  return (
    <span className="gradient-text-alt font-bold">
      {text}
      <span className="animate-pulse ml-1 text-primary">|</span>
    </span>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px hsl(265 89% 66% / 0.3)",
        "0 0 40px hsl(265 89% 66% / 0.5)",
        "0 0 20px hsl(265 89% 66% / 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const roles = [
    "Software Development Engineer",
    "Full-Stack Web Developer",
    "React & Node.js Specialist",
    "AI/ML Enthusiast",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-16">
      {/* Gradient Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-glow-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-glow-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-pink/10 rounded-full blur-3xl" />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* 3D Scene */}
      <ThreeScene />
      
      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Welcome to my creative space
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight select-none"
        >
          <span className="block text-foreground/90 text-4xl md:text-6xl font-medium mb-2">Hi, I'm</span>
          <span className="gradient-text font-black tracking-tight">Sadhana Shree</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-6 h-12">
          <h2 className="text-xl md:text-3xl font-display text-muted-foreground font-light">
            I am an Aspiring <Typewriter phrases={roles} />
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          I build responsive web applications and intelligent systems with a focus on performance, scalability, and seamless user experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="btn-primary flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={glowVariants}
            animate="animate"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/SadhanaShree25", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sadhana-shree-1759152a3", label: "LinkedIn" },
            { icon: Mail, href: "mailto:iamsadhanashree@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon size={22} className="relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        {/* Grid of Highlight Specialties */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          {[
            { title: "React Dev", desc: "High-performance frontend designs", border: "border-primary/20", hoverGlow: "hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]" },
            { title: "Java / SDE", desc: "Data structures & efficient algorithms", border: "border-secondary/20", hoverGlow: "hover:shadow-[0_0_20px_hsl(var(--secondary)/0.2)]" },
            { title: "Backend Systems", desc: "MongoDB / Node.js API backbones", border: "border-glow-teal/20", hoverGlow: "hover:shadow-[0_0_20px_hsl(var(--glow-teal)/0.2)]" },
            { title: "AI Assistants", desc: "Intelligent LangGraph / LLM agents", border: "border-accent/20", hoverGlow: "hover:shadow-[0_0_20px_hsl(var(--accent)/0.2)]" },
          ].map((card, i) => (
            <motion.div
              key={i}
              className={`p-4 glass-card ${card.border} ${card.hoverGlow} transition-all duration-300 relative group overflow-hidden`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-display font-bold text-base text-foreground mb-1">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-normal">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
