import { motion } from "framer-motion";
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
}

const projects: Project[] = [
  {
    title: "AI - Quiz Generator",
    description:
      "AI Quiz Generator is a full-stack web application that allows users to generate dynamic quizzes using AI. Users can register, log in, generate quizzes based on a topic, and attempt them interactively.The application integrates an AI model to automatically create structured quiz questions in real-time.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Groq API"],
    githubUrl: "https://github.com/SadhanaShree25/AI-Quiz-Generator",
    liveUrl: "https://ai-quiz-generator-plum.vercel.app/",
    featured: true,
  },

  {
    title: "Weather App",
    description:
      "Beautiful weather application with location-based forecasts, animated weather icons, and 5-day predictions.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    techStack: ["React", "OpenWeather API", "Geolocation", "CSS Animations"],
    githubUrl: "https://github.com/SadhanaShree25/Weather-App",
    liveUrl: "weather-app-jet-ten-81.vercel.app/",
  },

  {
    title: "Email Assistant",
    description:
      "NexusInbox is an intelligent, multi-user AI email assistant that streamlines communication management using LangGraph and Google Gemini for reasoning-driven automation.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
    techStack: ["React", "LangGraph", "Python", "Google Gemini", "FastAPI"],
    githubUrl: "https://github.com/SadhanaShree25/Email-Assistant",
    liveUrl: "https://email-assistant-demo.vercel.app/",
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group h-full min-h-[420px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
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
            className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
            }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-secondary text-white">
                Featured
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content - flex-1 with min-height for consistent card height */}
        <div className="p-6 flex flex-col flex-1 min-h-[200px]">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-shrink-0">
            {project.description}
          </p>

          {/* Tech Stack - fixed min height so all cards align */}
          <div className="flex flex-wrap gap-2 mt-auto min-h-[52px]">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 0 40px hsl(265 89% 66% / 0.3), inset 0 0 40px hsl(265 89% 66% / 0.05)"
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

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-accent mb-4">
            My Work
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto mt-4">
            A showcase of my best work, from web applications to full-stack
            platforms
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent via-primary to-secondary" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
