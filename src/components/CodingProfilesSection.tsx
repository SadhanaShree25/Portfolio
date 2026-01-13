import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Code2, Trophy, Terminal } from "lucide-react";

interface CodingProfile {
  name: string;
  icon: React.ReactNode;
  username: string;
  stats: string;
  url: string;
  color: string;
}

const profiles: CodingProfile[] = [
  {
    name: "GitHub",
    icon: <Github size={32} />,
    username: "@alexjohnson",
    stats: "500+ contributions",
    url: "https://github.com",
    color: "#ffffff",
  },
  {
    name: "LeetCode",
    icon: <Code2 size={32} />,
    username: "alex_dev",
    stats: "300+ problems solved",
    url: "https://leetcode.com",
    color: "#FFA116",
  },
  {
    name: "CodeChef",
    icon: <Trophy size={32} />,
    username: "alex_coder",
    stats: "4★ rated",
    url: "https://codechef.com",
    color: "#5B4638",
  },
  {
    name: "HackerRank",
    icon: <Terminal size={32} />,
    username: "alexjohnson",
    stats: "Gold badge",
    url: "https://hackerrank.com",
    color: "#00EA64",
  },
];

const ProfileCard = ({ profile, index }: { profile: CodingProfile; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block relative group"
    >
      <motion.div
        className="glass-card p-8 rounded-2xl text-center h-full"
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
          style={{ backgroundColor: `${profile.color}15` }}
          animate={{
            rotate: isHovered ? [0, -5, 5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ color: profile.color }}>
            {profile.icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
          {profile.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">{profile.username}</p>
        <p className="text-primary text-sm font-medium">{profile.stats}</p>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? `0 0 40px ${profile.color}30, inset 0 1px 0 ${profile.color}20`
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  );
};

const CodingProfilesSection = () => {
  const ref = useRef(null);

  return (
    <section id="profiles" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute bottom-1/3 -right-64 w-[400px] h-[400px] bg-glow-teal/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-secondary mb-4">
            Coding Profiles
          </span>
          <h2 className="section-heading">
            Where I Code
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Check out my profiles on various coding platforms
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-secondary via-teal-400 to-primary" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.name} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
