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
    icon: <Github size={30} />,
    username: "@SadhanaShree25",
    stats: "Active repositories",
    url: "https://github.com/SadhanaShree25",
    color: "#a855f7",
  },
  {
    name: "LeetCode",
    icon: <Code2 size={30} />,
    username: "Sadhana_Shree",
    stats: "100+ problems solved",
    url: "https://leetcode.com/u/Sadhana_Shree/",
    color: "#FFA116",
  },
  {
    name: "GeeksforGeeks",
    icon: <Trophy size={30} />,
    username: "iamsadhahwfi",
    stats: "86 problems solved",
    url: "https://www.geeksforgeeks.org/profile/iamsadhahwfi",
    color: "#47A248",
  },
  {
    name: "HackerRank",
    icon: <Terminal size={30} />,
    username: "iamsadhanashree",
    stats: "Silver badge",
    url: "https://www.hackerrank.com/profile/iamsadhanashree",
    color: "#00EA64",
  },
];

const ProfileCard = ({ profile, index }: { profile: CodingProfile; index: number }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Tilt calculations
    const tiltX = (y / (box.height / 2)) * -12; // Max 12 deg tilt
    const tiltY = (x / (box.width / 2)) * 12;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="block relative group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="glass-card p-6 md:p-8 rounded-2xl text-center h-full border border-border/20 bg-card/15 backdrop-blur-md cursor-pointer select-none"
        onMouseMove={handleMouseMove}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.04 : 1,
          boxShadow: isHovered
            ? `0 20px 40px ${profile.color}20, inset 0 1px 0 rgba(255,255,255,0.03)`
            : "0 4px 20px rgba(0,0,0,0.05)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Brand Icon wrapper */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 relative"
          style={{ 
            backgroundColor: `${profile.color}12`,
            border: `1px solid ${profile.color}25`,
            transform: "translateZ(30px)" 
          }}
          animate={{
            rotate: isHovered ? [0, -6, 6, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <div style={{ color: profile.color }}>
            {profile.icon}
          </div>
        </motion.div>

        {/* Brand Content */}
        <h3 
          className="text-lg md:text-xl font-display font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300"
          style={{ transform: "translateZ(25px)" }}
        >
          {profile.name}
        </h3>
        <p 
          className="text-muted-foreground text-xs md:text-sm mb-2 font-mono"
          style={{ transform: "translateZ(20px)" }}
        >
          {profile.username}
        </p>
        <p 
          className="text-sm font-semibold mt-4" 
          style={{ color: profile.color, transform: "translateZ(15px)" }}
        >
          {profile.stats}
        </p>

        {/* Brand Glow backdrop */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${profile.color}15 0%, transparent 80%)`,
          }}
        />
      </motion.div>
    </motion.a>
  );
};

const CodingProfilesSection = () => {
  const ref = useRef(null);

  return (
    <section id="profiles" className="relative py-28 overflow-hidden">
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
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-secondary mb-4 font-medium">
            Coding Profiles
          </span>
          <h2 className="section-heading">Where I Code</h2>
          <p className="section-subheading mx-auto mt-4 font-sans text-sm md:text-base">
            Exploring, learning, and competing on different algorithmic and code development directories.
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
