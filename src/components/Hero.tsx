import { ChevronDown, Github, Download, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { urls } from "../portfolio-data/portfolio";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    window.open(
      urls.resume,
      "_blank",
      "noopener,noreferrer" // for security
    );
  };

  const handleIconClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Software Developer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Crafting innovative digital experiences with 1.5+ years of expertise
            in full-stack development and design implementations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-gray-300 rounded-full text-gray-300 font-semibold hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>

            <button
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
              onClick={handleResumeDownload}
            >
              <Download size={20} />
              <span className="font-semibold">Download Resume</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button
              onClick={() => handleIconClick(urls.github)}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </button>
            <button
              onClick={() => handleIconClick(urls.linkedin)}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-n2 left-1/2 transform translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
