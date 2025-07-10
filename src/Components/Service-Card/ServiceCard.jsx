import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "AI Website & Business Software Development",
    description:
      "Full-stack development of AI-powered websites and custom business software tailored to your unique needs.",
    icon: "💼",
  },
  {
    id: 2,
    title: "Custom AI Agent & Workflow Integration",
    description:
      "Integrate intelligent AI agents into your systems to automate tasks, customer service, and business operations.",
    icon: "🧩",
  },
  {
    id: 3,
    title: "Mobile App Development (iOS & Android)",
    description:
      "Design and build high-performance mobile applications with integrated AI capabilities for both iOS and Android.",
    icon: "📱",
  },
  {
    id: 4,
    title: "Custom AI & GPT Integration",
    description:
      "Develop and deploy tailored AI solutions using GPT, ChatGPT, and other LLMs for your specific use cases.",
    icon: "🧠",
  },
  {
    id: 5,
    title: "AI Model Fine-Tuning & Optimization",
    description:
      "Fine-tune models like GPT, Hugging Face transformers, or custom LLMs to enhance performance for niche domains.",
    icon: "🎯",
  },
  {
    id: 6,
    title: "AI Chatbots & Conversational Interfaces",
    description:
      "Build advanced AI chatbots using tools like LangChain and ManyChat to engage users and streamline communication.",
    icon: "🤖",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ServiceCard = ({ title, description, icon, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    className="bg-white bg-opacity-5 backdrop-blur-md border border-gray-600 rounded-3xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-green-500/30 flex flex-col items-center text-center"
  >
    <div className="text-5xl mb-4 bg-gradient-to-tr from-green-500 to-green-300 text-white p-4 rounded-full shadow-lg">
      {icon}
    </div>
    <h3 className="font-semibold text-xl text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-300 mb-6">{description}</p>
    <a
      href="https://www.fiverr.com/solution_sqd?public_mode=true"
      className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-green-500/50"
    >
      ✨ Order Now
    </a>
  </motion.div>
);

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-400 font-semibold text-lg mb-2 tracking-wide"
          >
            {"<"}-- Our Premium Services --{">"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Elevate Your <span className="text-green-400">Digital Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm"
          >
            We craft innovative AI solutions and cutting-edge software tailored
            for startups, enterprises, and creators. Experience world-class
            service built for tomorrow.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
