import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "HTML", level: 90, color: "#E34F26" },
      { name: "CSS", level: 90, color: "#1572B6" },
      { name: "JavaScript", level: 75, color: "#F7DF1E" },
      { name: "Java", level: 70, color: "#F89820" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      { name: "React.js", level: 75, color: "#61DAFB" },
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "Express.js", level: 70, color: "#828282" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 60, color: "#47A248" },
      { name: "MySQL", level: 65, color: "#00758F" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90, color: "#F05032" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Figma", level: 75, color: "#F24E1E" },
      { name: "Vercel", level: 85, color: "#000000" },
    ],
  },
];

const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="glass-card p-4 rounded-xl cursor-pointer border border-border/40 hover:border-primary/30 transition-all duration-300"
        animate={{
          rotateX: isHovered ? 6 : 0,
          rotateY: isHovered ? -6 : 0,
          scale: isHovered ? 1.03 : 1,
          boxShadow: isHovered 
            ? `0 10px 30px ${skill.color}15, 0 1px 0 rgba(255,255,255,0.05) inset` 
            : "0 4px 20px rgba(0,0,0,0.05)",
        }}
        transition={{ duration: 0.2 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-foreground text-sm md:text-base flex items-center gap-2">
            <span 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: skill.color }} 
            />
            {skill.name}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">{skill.level}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              backgroundColor: skill.color,
              boxShadow: isHovered ? `0 0 12px ${skill.color}` : "none",
            }}
          />
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 80%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-glow-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-64 w-[400px] h-[400px] bg-glow-blue/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-secondary mb-4 font-medium">
            My Skills
          </span>
          <h2 className="section-heading">Technologies I Work With</h2>
          <p className="section-subheading mx-auto mt-4 font-sans text-sm md:text-base">
            A curated stack of tools and frameworks that I use to turn ideas into functional, interactive digital solutions.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-secondary via-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-border/20 bg-card/20 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl md:text-3xl bg-muted/65 p-2 rounded-xl border border-border/40 select-none">{category.icon}</span>
                  <h3 className="text-lg md:text-xl font-display font-semibold gradient-text">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.05 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
