import { useEffect } from "react";
import { Award, ThumbsUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Expertise & Experience",
    description:
      "Your go-to AI partner on Fiverr, delivering custom solutions in chatbots, models, automation, and data-driven innovation worldwide.",
    icon: <Award className="text-green-400 h-6 w-6" />,
  },
  {
    title: "100% Client Satisfaction",
    description:
      "Proven track record of consistently exceeding client expectations with top-quality AI, app, and web solutions tailored to your goals.",
    icon: <ThumbsUp className="text-green-400 h-6 w-6" />,
  },
  {
    title: "Timely Delivery",
    description:
      "Committed to delivering high-quality AI, app, and web projects on schedule—every time, without compromising on performance or precision.",
    icon: <Clock className="text-green-400 h-6 w-6" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function AIPartnerComponent() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black">
      <div
        id="goals"
        className="flex flex-col items-center justify-center px-6 py-20 container mx-auto text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-2 mb-6 text-green-400 font-semibold text-lg tracking-wide"
        >
          {"<"}-- Why Choose Us --{">"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Your Trusted <span className="text-green-400">AI Partner</span> on
          Fiverr
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 mb-12 max-w-2xl text-sm"
        >
          With over 5 years of experience in AI development and 250+ satisfied
          clients, we deliver exceptional results that exceed expectations.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center w-full gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="flex-1 bg-white bg-opacity-5 backdrop-blur-md border border-gray-700 rounded-3xl p-6 shadow-md hover:shadow-green-500/20 transition-all duration-300 text-center"
            >
              <div className="mb-4 bg-green-950 bg-opacity-30 p-4 rounded-full inline-block shadow-md">
                {feature.icon}
              </div>
              <h2 className="font-bold text-lg text-white mb-3">
                {feature.title}
              </h2>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
