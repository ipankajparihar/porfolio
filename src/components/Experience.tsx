import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "../portfolio-data/portfolio";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20  bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through the tech industry, building products and leading
            teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-400 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } ml-16 md:ml-0`}
                >
                  <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-400">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 rounded-full text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
