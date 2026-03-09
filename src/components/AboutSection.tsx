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
          <h2 className="section-heading">From Concept to Code</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div variants={itemVariants} className="relative">
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
<div className="absolute inset-10 flex items-center justify-center">
  <div className="relative w-80 h-80 rounded-full p-2 bg-gradient-to-r from-primary via-secondary to-accent">
    
    {/* Inner Circle */}
    <div className="w-full h-full rounded-full bg-background p-2">
      <img
        src="/portfolio.jpg"
        alt="Sadhana Shree"
        className="w-full h-full rounded-full object-cover shadow-2xl"
      />
    </div>

  </div>
</div>
              {/* Floating badges */}
              <motion.div
                className="absolute top-8 right-0 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/*<span className="text-sm font-medium gradient-text">10+ Projects</span>*/}
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-0 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                {/*<span className="text-sm font-medium gradient-text-alt">5+ Hackathons</span>*/}
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm an Aspiring{" "}
              <span className="text-foreground font-medium">
                Software Development Engineer
              </span>{" "}
              with a strong foundation in frontend development and growing
              expertise in full-stack systems. I enjoy building scalable web
              applications using modern technologies like React and exploring
              AI/ML-driven solutions. I've developed a problem-solving mindset
              and a passion for writing{" "}
              <span className="gradient-text font-medium">
                clean, efficient, and maintainable code.
              </span>{" "}
              I'm constantly learning and pushing myself to build impactful
              digital experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            ></motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            ></motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Problem Solver", "Quick Learner"].map((trait) => (
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
