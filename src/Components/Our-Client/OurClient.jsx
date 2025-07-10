import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function OurClient() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-20 md:mt-20 px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1 className="text-3xl lg:text-5xl font-semibold">
          We serve over 250+ <br /> foreign clients
        </h1>
        <p className="mt-4 text-gray-600">
          Connect LemonWares with your favourite tools that <br /> you use daily
          and keep things on track.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        viewport={{ once: false }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Client ${index + 1}`}
            className="w-24 h-24 object-contain filter grayscale"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
