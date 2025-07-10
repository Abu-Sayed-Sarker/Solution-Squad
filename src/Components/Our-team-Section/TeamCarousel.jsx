import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Ariful",
    role: "CEO",
    image: "https://i.ibb.co/m50s0RYG/Ariful.jpg",
  },
  {
    name: "Kawsar Hossain",
    role: "Software Engineer (Flutter)",
    image: "https://i.ibb.co/ds6YP6hv/3333.png",
  },
  {
    name: "Soliman Hossain",
    role: "Software Engineer",
    image: "https://i.ibb.co/vt6NrFg/5555.png",
  },
  {
    name: "Mahbubur Rahman",
    role: "Web Developer",
    image: "https://i.ibb.co/4ZFB5bmX/mahbob.png",
  },
  {
    name: "Mahin",
    role: "UI/UX Designer",
    image: "https://i.ibb.co/bM369FfX/Mahin-vai-pic.png",
  },
  {
    name: "Sajib Hossain",
    role: "Node.js Developer",
    image: "https://i.ibb.co/ycm4DGgH/Sajib.png",
  },
  {
    name: "Istiak Ahmed",
    role: "Python Developer",
    image: "https://i.ibb.co/Swy65LPy/istiak.png",
  },
];

const TeamCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 500, // Slower for smoothness
    cssEase: "ease-in-out", // Smooth easing
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: true,
    beforeChange: (oldIndex, newIndex) => {
      setCenterIndex(newIndex % teamMembers.length);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black">
      <div
        id="teams"
        className="text-center pt-20 px-4 container mx-auto  text-white"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-2 mb-6 text-green-400 font-semibold text-lg tracking-wide"
        >
          {"<"}-- Our Team --{">"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Meet Our <span className="text-green-400">Team Members</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm mb-12"
        >
          Our elite developers and designers blend creativity with technical
          precision to build next-gen digital solutions.
        </motion.p>

        {/* Carousel */}
        <Slider {...settings} className="mt-8">
          {teamMembers.map((member, index) => {
            const isCenter = index === centerIndex;

            return (
              <div key={index} className="px-4 mt-5 h-96">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{
                    scale: isCenter ? 1.08 : 1.03,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className={`flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-500 ${
                    isCenter
                      ? "bg-white bg-opacity-10 backdrop-blur-xl border border-green-500/30 shadow-green-400/30 shadow-xl scale-[1.05]"
                      : "bg-white bg-opacity-5 backdrop-blur-md border border-gray-600/20 scale-[0.92]"
                  }`}
                >
                  <div
                    className={`rounded-full overflow-hidden shadow-lg transition-all duration-300 ${
                      isCenter
                        ? "w-40 h-40 mb-4 border-4 border-green-400"
                        : "w-28 h-28 mb-3"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-top object-cover"
                    />
                  </div>
                  <p
                    className={`font-semibold text-lg ${
                      isCenter ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {member.name}
                  </p>
                  <p
                    className={`text-sm ${
                      isCenter ? "text-green-300" : "text-gray-500"
                    }`}
                  >
                    {member.role}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
