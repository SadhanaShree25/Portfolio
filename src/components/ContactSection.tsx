import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate network latency
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);

      // Reset form after overlay delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-glow-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-64 w-[400px] h-[400px] bg-glow-pink/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary mb-4 font-medium">
            Contact
          </span>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading mx-auto mt-4 font-sans text-sm md:text-base">
            Have a project in mind, an opportunity to discuss, or just want to say hi? I'd love to connect!
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 rounded-3xl relative border border-border/20 bg-card/15 backdrop-blur-md">
            {/* Success Overlay */}
            <motion.div
              initial={false}
              animate={{
                opacity: isSubmitted ? 1 : 0,
                pointerEvents: isSubmitted ? "auto" : "none",
              }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-3xl flex items-center justify-center z-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: isSubmitted ? 1 : 0.9, opacity: isSubmitted ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center p-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-block mb-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold gradient-text mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm font-sans">
                  Thank you for reaching out. I will review your note and respond shortly.
                </p>
              </motion.div>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="floating-label-group"
              >
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-muted/30 border border-border/40 focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.25)] rounded-xl text-foreground text-sm focus:outline-none transition-all duration-300 peer"
                />
                <label className="text-muted-foreground text-xs md:text-sm flex items-center gap-2 peer-focus:text-primary transition-all duration-300">
                  <User size={15} />
                  Your Name
                </label>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="floating-label-group"
              >
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-muted/30 border border-border/40 focus:border-secondary focus:shadow-[0_0_20px_hsl(var(--secondary)/0.25)] rounded-xl text-foreground text-sm focus:outline-none transition-all duration-300 peer"
                />
                <label className="text-muted-foreground text-xs md:text-sm flex items-center gap-2 peer-focus:text-secondary transition-all duration-300">
                  <Mail size={15} />
                  Your Email
                </label>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="floating-label-group"
              >
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-muted/30 border border-border/40 focus:border-accent focus:shadow-[0_0_20px_hsl(var(--accent)/0.25)] rounded-xl text-foreground text-sm focus:outline-none transition-all duration-300 resize-none peer"
                />
                <label className="text-muted-foreground text-xs md:text-sm flex items-center gap-2 peer-focus:text-accent transition-all duration-300">
                  <MessageSquare size={15} />
                  Your Message
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSending}
                  className="btn-primary w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:pointer-events-none rounded-xl text-sm py-4 font-bold"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSending ? (
                    <>
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
