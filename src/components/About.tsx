import { motion } from "framer-motion";
import { highlights } from "../portfolio-data/portfolio";
import PankajImg from "../media/Pankaj.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with 1.5+ years of experience
              creating digital solutions that combine beautiful design with
              robust functionality. I believe in the power of technology to
              transform ideas into reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Started as a curious designer who fell in love with code. Over
                the years, I've evolved into a developer who understands that
                great software is not just about functionality—it's about
                creating experiences that resonate with users.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest design
                trends, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <img
                  src={PankajImg}
                  alt="Pankaj"
                  className="h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
