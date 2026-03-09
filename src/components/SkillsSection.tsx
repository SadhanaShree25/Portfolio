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
    icon: "🎨",
    skills: [
      { name: "HTML", level: 90, color: "#61DAFB" },
      { name: "CSS", level: 90, color: "#3178C6" },
      { name: "JavaScript", level: 60, color: "#ffffff" },
      { name: "Java", level: 70, color: "#FF0055" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚙️",
    skills: [
      { name: "React.js", level: 75, color: "#339933" },
      { name: "Node.js", level: 70, color: "#ffffff" },
      { name: "Express.js", level: 70, color: "#47A248" },
    
    ],
  },
  {
    title:"Databases",
    icon: "🗄️" ,
    skills:[
      {name: "MongoDb", level:50, color:"#47A248"},
      {name: "MySQL", level:60, color:"#FF0055"},
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90, color: "#F05032" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Figma", level: 75, color: "#F24E1E" },
      { name: "Vercel", level: 85, color: "#ffffff" },
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
        className="glass-card p-4 rounded-xl cursor-pointer"
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium text-foreground">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(90deg, ${skill.color}, hsl(265 89% 66%))`,
              boxShadow: isHovered ? `0 0 20px ${skill.color}40` : "none",
            }}
          />
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
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
    <section id="skills" className="relative py-32 overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-secondary mb-4">
            My Skills
          </span>
          <h2 className="section-heading">
            Technologies I Work With
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A collection of technologies and tools I've mastered through projects and continuous learning
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-secondary via-primary to-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-display font-semibold gradient-text">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
