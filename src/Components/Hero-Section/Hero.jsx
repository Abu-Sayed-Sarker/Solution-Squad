import { ArrowRight } from "lucide-react";
import image from "../../assets/team-images/Ariful.png";
import bg from "../../assets/Ellipse8.png";
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between pt-24 md:pt-20 p-6 container mx-auto mt-[20px]">
        {/* Left Side Content */}
        <Slide direction="left" triggerOnce>
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="space-y-0 text-4xl md:text-5xl">
              <h1 className="font-bold text-white text-2xl md:text-5xl">
                Professional
              </h1>
              {/* <h2 className="font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Mobile app developer
              </h2> */}
              <div className="min-h-[2.5rem] sm:min-h-[2.75rem] md:min-h-[3rem] my-3 text-2xl md:text-5xl">
                <TypeAnimation
                  className="font-bold bg-gradient-to-r from-[#5dfe60] to-[#28d1ab] bg-clip-text text-transparent break-words"
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "Full Stack Developer",
                    1000,
                    "Mobile app developer",
                    1000,
                    "AI developer",
                    1000,
                    "Web developer",
                    500,
                  ]}
                  speed={50}
                  cursor={false}
                  repeat={Infinity}
                />
              </div>
              <h3 className="font-bold text-white mt-6 text-2xl md:text-5xl">
                on Fiverr
              </h3>
            </div>

            <p className="text-gray-400 text-sm md:text-base">
              Empowering your ideas with custom AI solutions, cutting-edge apps,
              <br />
              and stunning websites — all with a 100% satisfaction guarantee.
            </p>

            {/* Stats Box */}
            <Fade direction="up" delay={200} triggerOnce>
              <div className="bg-black bg-opacity-60 rounded p-3 flex items-center justify-between max-w-md">
                <div className="text-center px-3">
                  <div className="font-bold">250+</div>
                  <div className="text-gray-500 text-xs">Reviews</div>
                </div>

                <div className="text-center px-3">
                  <div className="font-bold">5.0 ★</div>
                  <div className="text-gray-500 text-xs">Ratings</div>
                </div>

                <div className="text-center px-3">
                  <div className="font-bold">2 ♥♥</div>
                  <div className="text-gray-500 text-xs">Level Seller</div>
                </div>

                <a
                  href="https://www.fiverr.com/solution_sqd?public_mode=true"
                  className="bg-gradient-to-r from-[#5dfe60] via-[#28d1ab] to-green-600 text-white px-3 py-2 rounded flex items-center text-sm"
                >
                  View Profile <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </Fade>

            {/* Skill Tags Row 1 */}
            <Fade cascade damping={0.2} direction="up" triggerOnce>
              <div className="flex justify-around md:justify-start gap-2">
                <div className="border hidden md:block border-[#28d1ab] text-[#28d1ab] rounded-full px-3 py-1 text-xs">
                  <span className="mr-1">◆</span> Mobile App development
                </div>
                <div className="border border-[#28d1ab] text-[#28d1ab] rounded-full px-3 py-1 text-xs flex items-center">
                  <span className="mr-1">◆</span> Mobile App design
                </div>
                <div className="border border-[#28d1ab] text-[#28d1ab] rounded-full px-3 py-1 text-xs flex items-center">
                  <span className="mr-1">◆</span> Flutter developer
                </div>
              </div>
              {/* <div className="border border-[#28d1ab] text-[#28d1ab] rounded-full px-3 py-1 text-xs block md:hidden text-center">
                <span className="mr-1">◆</span> Mobile App development
              </div> */}

              <div className="flex gap-2 justify-around md:justify-start">
                <div className="border border-[#28d1ab] text-[#28d1ab] rounded-full px-3 py-1 text-xs flex items-center">
                  <span className="mr-1">◆</span> Mobile App design
                </div>
                <div className="border border-[#28d1ab] text-[#28d1ab] rounded-full px-3 py-1 text-xs flex items-center">
                  <span className="mr-1">◆</span> Flutter developer
                </div>
              </div>
            </Fade>
          </div>
        </Slide>

        {/* Right Side Image and Profile Name */}
        <div className="mt-8 lg:mt-0 flex flex-col items-center relative">
          {/* Gradient ring background */}
          <motion.div
            className="absolute bottom-0  opacity-25"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img src={bg} alt="" />
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative flex items-center justify-center"
            key={Date.now()}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              // repeat: Infinity,
              // repeatType: "",
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <div className="m-6 flex items-center justify-center overflow-hidden">
              <div className="md:h-[550px] h-[450px] overflow-hidden">
                <img
                  src={image}
                  alt="Profile"
                  className="md:w-[550px] mr-6 transform scale-x-[-1] w-[380px] object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and title */}
          <motion.div
            className="absolute bottom-0 bg-gradient-to-r from-[#5dfe60] via-[#28d1ab] to-green-600 text-white text-center px-4 py-5 rounded-md mt-4 w-full md:max-w-md max-w-sm"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold">Ariful</h3>
            <p className="">CEO at Solution Squad</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
