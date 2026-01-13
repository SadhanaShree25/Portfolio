import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-glow-teal/10 rounded-full blur-3xl" />
      
      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            About Me
          </span>
          <h2 className="section-heading">
            Turning Ideas Into Reality
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center content */}
              <div className="absolute inset-16 glass-card rounded-full flex items-center justify-center glow-effect">
                <div className="text-center p-6">
                  <span className="text-6xl font-display font-bold gradient-text">3+</span>
                  <p className="text-muted-foreground mt-2">Years of Coding</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-8 right-0 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium gradient-text">10+ Projects</span>
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-0 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm font-medium gradient-text-alt">5+ Hackathons</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate <span className="text-foreground font-medium">Frontend Developer</span> with a 
              growing expertise in full-stack development. My journey began with curiosity about how websites 
              work, and it has evolved into a deep love for creating <span className="gradient-text font-medium">beautiful, 
              functional digital experiences</span>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From late-night coding sessions to intense hackathon weekends, I've learned that the best 
              solutions come from <span className="text-foreground font-medium">collaboration, persistence, and 
              continuous learning</span>. Every project is an opportunity to push boundaries and create something 
              meaningful.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in 
              <span className="gradient-text-alt font-medium"> building not just applications, but experiences 
              that matter</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
