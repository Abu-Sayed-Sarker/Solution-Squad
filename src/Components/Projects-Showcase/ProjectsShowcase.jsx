import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import imag1 from "../../assets/Project/1.png";
import imag2 from "../../assets/Project/2.png";
import imag3 from "../../assets/Project/3.png";
import imag4 from "../../assets/Project/4.png";
import imag5 from "../../assets/Project/5.png";
import imag6 from "../../assets/Project/6.png";

const ProjectsShowcase = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "Familiar Echo",
      image: imag1,
      description:
        "Dive into an intuitive experience with Familiar Echo, featuring an app interface and sleek design for personalized connections. It's all about capturing those familiar voices with ease.",
      link: "https://joshlong-hitano-39.netlify.app/",
    },
    {
      id: 2,
      title: "Zeenatura",
      image: imag2,
      description:
        "Zeenatura is not just about skincare; it's a return to essentials, offering natural products rooted in authenticity and respect for nature. The website showcases beautifully crafted skincare with a focus on ingredients that genuinely benefit the skin.",
      link: "https://techoneology.com/",
    },
    {
      id: 3,
      title: "Teacher Comments Hub",
      image: imag3,
      description:
        "Revolutionize feedback with Teacher Comments Hub. An intelligent comment generation system designed to help educators craft personalized, meaningful feedback tailored to student strengths, progress, and areas for improvement.",
      link: "https://teachercommentshub.com/fr/landing",
    },
    {
      id: 4,
      title: "Orani",
      image: imag4,
      description:
        "Orani, the AI-powered virtual receptionist, brings smart and seamless technology to your fingertips, allowing businesses to manage communications efficiently with an intuitive interface and secure options.",
      link: "https://ai-essay-revise.vercel.app/",
    },
    {
      id: 5,
      title: "Technoeology",
      image: imag5,
      description:
        "A digital space for influencers and creators, Technoeology helps businesses connect with the right digital creators for strategic partnerships, with easy-to-navigate tools for managing collaborations and analyzing success.",
      link: "https://techoneology.com/",
    },
    {
      id: 6,
      title: "Alamocity Pulse",
      image: imag6,
      description:
        "Alamocity Pulse offers a luxury experience, sharing stories of excellence in air travel with JetStratix. Discover high-end travel tips, insights, and articles from the heart of luxury aviation.",
      link: "https://nimble-gelato-2c1856.netlify.app/",
    },
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 text-white">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 py-2 mb-6 text-green-400 font-semibold text-lg tracking-wide"
          >
            {"<"}-- Our Work Sample --{">"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Visit <span className="text-green-400">Our Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm"
          >
            Explore a diverse portfolio of completed works that showcase our
            creativity, technical expertise, and commitment to client
            satisfaction.
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="space-y-10">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col lg:flex-row items-center gap-6 bg-white bg-opacity-5 backdrop-blur-xl border border-green-600/10 rounded-3xl p-4 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
              >
                {/* Image side */}
                <div className="w-full lg:w-1/3 overflow-hidden rounded-2xl shadow-md border border-green-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content side */}
                <div className="w-full lg:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-white font-medium text-sm"
                  >
                    View Project Details →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative px-8 py-2 border-2 text-lg border-[#28d1ab] rounded-lg bg-transparent text-white hover:text-white overflow-hidden group transition-all duration-500 ease-out hover:translate-x-1 hover:translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? "Show Less" : "View All Projects"}
              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-90" : ""
                }`}
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#5dfe60] via-[#28d1ab] to-green-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
