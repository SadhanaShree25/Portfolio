import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Github, Calendar, Award } from "lucide-react";

const InternshipSection = () => {
  return (
    <section id="internships" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-glow-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4 font-medium">
            Experience
          </span>
          <h2 className="section-heading">Virtual Internships</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-accent via-primary to-secondary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/20 bg-card/10 backdrop-blur-md relative overflow-hidden group">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 select-none">
                  <Briefcase size={26} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-sans">Infosys Springboard</span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-0.5">Virtual Internship</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm bg-muted/30 px-3.5 py-1.5 rounded-xl border border-border/30 w-fit shrink-0">
                <Calendar size={14} className="text-accent" />
                <span className="font-semibold">2025</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 md:p-5 rounded-2xl bg-background/50 border border-border/30">
                <div className="flex items-center gap-2 mb-3 text-primary font-mono text-sm md:text-base font-semibold leading-tight">
                  <Award size={16} className="shrink-0" />
                  <span>Project: Ambient Agent with LangGraph for Email Assistant</span>
                </div>
                
                <ul className="list-inside list-disc space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed font-sans pl-1">
                  <li>Developing an AI email assistant to automate email workflow management.</li>
                  <li>Designing agents capable of reading, categorizing and generating email responses.</li>
                  <li>Exploring LLM orchestration and automation pipelines.</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://github.com/SadhanaShree25/Building-an-Ambient-Agent-with-Langraph-for-EmailAssistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline py-2 px-4 text-xs font-semibold rounded-full flex items-center gap-1.5 group/link"
                >
                  <Github size={14} />
                  View GitHub Repository
                  <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Glow border outline */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none -z-10"
              whileHover={{
                boxShadow: "0 0 35px hsl(var(--accent)/0.15), inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipSection;
