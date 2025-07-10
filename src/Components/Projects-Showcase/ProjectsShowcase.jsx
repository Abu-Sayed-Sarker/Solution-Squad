import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ProjectsShowcase = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "Nutra AI - Calorie Counter",
      image: "https://i.ibb.co/XZmVZKjv/Nutra-AI-App003.jpg",
      description:
        "Track meals easily—just snap a photo for instant nutrition insights.",
      link: "https://play.google.com/store/apps/details?id=com.nutraai.nutraai",
    },
    {
      id: 2,
      title: "Smarter Google Ads with AI",
      image: "https://i.ibb.co/KpVT84tG/Ad-Vision-AI-Chatbot.jpg",
      description:
        "Optimize campaigns fast with AI insights, support, and automation tools.n",
      link: "http://72.167.224.36/home",
    },
    {
      id: 3,
      title: "Smarter Math Help with AI",
      image: "https://i.ibb.co/G4Z4FRfC/Math-Ai-chatbot.jpg",
      description:
        "AI-powered math tutoring for fast, fun, and effective learning.",
      link: "https://www.mathaidetectives.com/",
    },
    {
      id: 4,
      title: "AI Session Planner",
      image: "https://i.ibb.co/SXBnqy8k/Ai-Finance-Hub-11.jpg",
      description: "Plan sessions by sport, age, skill, theme—coach with ease.",
      link: "https://play.google.com/store/apps/details?id=com.jvai.agcourt",
    },
    {
      id: 5,
      title: "One AI Hub, Total Control",
      image: "https://i.ibb.co/C5vq2mdG/Untitled-1.jpg",
      description:
        "Switch, search, and save across ChatGPT, Claude, and Gemini.",
      link: "https://www.aitain.ai/",
    },
    {
      id: 6,
      title: "Top AI Tools, Ranked",
      image: "https://i.ibb.co/rRs6LD8P/Ai-Tain-00.jpg",
      description:
        "Quickly find the best AI for your needs—compare, choose, and boost your workflow.",
      link: "https://www.choosethebest.ai/",
    },
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4 pt-20 pb-10 text-white">
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
                    className="w-full h-60 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
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
