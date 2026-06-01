import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string; // Made optional
  featured?: boolean;
  category: "frontend" | "fullstack" | "ai";
}

const projects: Project[] = [
  {
    title: "AI - Quiz Generator",
    description:
      "AI Quiz Generator is a full-stack web application that allows users to generate dynamic quizzes using AI. Users can register, log in, generate quizzes based on a topic, and attempt them interactively. The application integrates an AI model to automatically create structured quiz questions in real-time.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Groq API"],
    githubUrl: "https://github.com/SadhanaShree25/AI-Quiz-Generator",
    liveUrl: "https://ai-quiz-generator-plum.vercel.app/",
    featured: true,
    category: "fullstack",
  },
  {
    title: "Weather App",
    description:
      "Beautiful weather application with location-based forecasts, animated weather icons, and 5-day predictions.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    techStack: ["React", "OpenWeather API", "Geolocation", "CSS Animations"],
    githubUrl: "https://github.com/SadhanaShree25/Weather-App",
    liveUrl: "https://weather-app-jet-ten-81.vercel.app/",
    category: "frontend",
  },
  {
    title: "Email Assistant",
    description:
      "NexusInbox is an intelligent, multi-user AI email assistant that streamlines communication management using LangGraph and Google Gemini for reasoning-driven automation.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
    techStack: ["React", "LangGraph", "Python", "Google Gemini", "GoogleOAuth2"],
    githubUrl: "https://github.com/SadhanaShree25/Email-Assistant",
    category: "ai",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group h-full min-h-[420px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-border/20 bg-card/15 backdrop-blur-md"
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container - fixed height */}
        <div className="relative h-48 shrink-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
            }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-md">
                Featured
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-border/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass-card rounded-xl hover:bg-primary/20 hover:text-primary transition-all border border-border/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content - flex-1 with min-height for consistent card height */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Tech Stack - fixed min height so all cards align */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted/50 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
          animate={{
            boxShadow: isHovered
              ? "0 0 30px hsl(var(--primary)/0.2), inset 0 0 30px rgba(255,255,255,0.02)"
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack" | "ai">("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Fullstack" },
    { id: "ai", label: "AI & Agents" },
  ] as const;

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-glow-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[400px] h-[400px] bg-glow-purple/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4 font-medium">
            My Work
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto mt-4 font-sans text-sm md:text-base">
            A showcase of my recent coding projects, including client applications, full-stack websites, and intelligence integration experiments.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent via-primary to-secondary" />
        </motion.div>

        {/* Project Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 focus:outline-none cursor-pointer ${
                  isSelected
                    ? "text-primary border-primary/45 shadow-sm"
                    : "text-muted-foreground border-border/40 hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
