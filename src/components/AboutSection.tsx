import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Award, Target, GraduationCap, Briefcase, ExternalLink, Github } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("focus");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const tabContents = {
    focus: {
      icon: <Target className="w-5 h-5 text-primary" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            I specialize in crafting high-performance user interfaces and building modular frontend structures. My primary focus includes:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Component Architecture",
              "State Management",
              "Responsive Layouts",
              "Client-Side Performance",
              "AI API Integrations",
              "Version Control & Git"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    education: {
      icon: <GraduationCap className="w-5 h-5 text-secondary" />,
      content: (
        <div className="space-y-4">
          <div className="relative pl-6 border-l-2 border-primary/30 space-y-4">
            <div className="relative">
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" />
              <h4 className="font-display font-semibold text-foreground text-base">Bachelor of Engineering in Computer Science</h4>
              <p className="text-xs text-muted-foreground">Focus on Software Engineering & Systems</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-secondary border-4 border-background" />
              <h4 className="font-display font-semibold text-foreground text-base">Key Coursework</h4>
              <p className="text-xs text-muted-foreground">Data Structures, Database Management, Object Oriented Programming, Web Development</p>
            </div>
          </div>
        </div>
      )
    },
    interests: {
      icon: <BookOpen className="w-5 h-5 text-glow-teal" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            When I'm not coding or solving problems on LeetCode, you can find me exploring creative hobbies:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Technical Writing",
              "UI/UX Visual Design",
              "Open Source Projects",
              "Web Apps Mocking",
              "Learning New Tech",
              "Problem Solving"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-glow-teal" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
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
        <motion.div variants={itemVariants} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4 font-medium">
            About Me
          </span>
          <h2 className="section-heading">From Concept to Code</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div variants={itemVariants} className="relative lg:col-span-5">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              />

              {/* Center content */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="relative w-72 h-72 rounded-full p-1.5 bg-gradient-to-r from-primary via-secondary to-accent shadow-2xl">
                  {/* Inner Circle */}
                  <div className="w-full h-full rounded-full bg-background p-1.5 overflow-hidden">
                    <img
                      src="/portfolio.jpg"
                      alt="Sadhana Shree"
                      className="w-full h-full rounded-full object-cover shadow-2xl filter contrast-[1.05] brightness-95"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-4 glass-card px-4 py-2 rounded-xl shadow-lg border border-primary/30 bg-card/85 backdrop-blur-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-bold gradient-text flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  15+ Projects Completed
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-4 glass-card px-4 py-2 rounded-xl shadow-lg border border-secondary/30 bg-card/85 backdrop-blur-md"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-xs font-bold gradient-text-alt flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                  100+ LeetCode Solved
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text & Tabs Side */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-7">
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans"
            >
              I'm an Aspiring <span className="text-foreground font-semibold">Software Development Engineer</span> with a strong foundation in frontend development and growing expertise in full-stack systems. I enjoy building scalable web applications using modern technologies like React and exploring AI/ML-driven integrations.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans"
            >
              My academic journey has built a strong problem-solving mindset and a passion for writing <span className="gradient-text font-semibold">clean, efficient, and maintainable code</span>. I love participating in hackathons, taking concepts, and building them into working digital products.
            </motion.p>

            {/* Interactive Tabs */}
            <div className="pt-4">
              <div className="flex border-b border-border/50 gap-2 mb-4">
                {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative pb-2.5 px-2 text-sm font-medium transition-colors duration-300 focus:outline-none cursor-pointer"
                  >
                    <span className="capitalize flex items-center gap-2">
                      {tabContents[tab].icon}
                      <span className={activeTab === tab ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}>
                        {tab === "focus" ? "Focus" : tab}
                      </span>
                    </span>
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Panel */}
              <div className="min-h-[140px] p-5 glass-card border border-border/20 bg-card/30 backdrop-blur-md rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tabContents[activeTab as keyof typeof tabContents].content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-2"
            >
              {["Analytical Mindset", "Collaborative Team Player", "Agile Learner", "Visual Thinker"].map((trait) => (
                <span
                  key={trait}
                  className="px-3.5 py-1.5 glass-card rounded-full text-xs text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
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
