import { tr } from "framer-motion/client";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa";
import { MapPin, Globe, Star, ArrowRight } from "lucide-react";
import icon from "../../assets/icon.png";
import { Fade, Slide } from "react-awesome-reveal";
import client1 from "../../assets/Clients/image1.png";
import client2 from "../../assets/Clients/gudbaseball.png";
import client3 from "../../assets/Clients/thai_30.png";
import client4 from "../../assets/Clients/zubeiriaman.png";
import React from "react";
import ReactStars from "react-stars";
// import client5 from "../../assets/Clients/Image 1.png";

const testimonials = [
  {
    company: "dhataharris",
    feedback:
      "We are doing work that will hopefully change the world. They are attentive to every detail to make that journey pleasant and informational. Would recommend them for any dream you want to see become reality.",
    name: "Datha Harris",
    role: "CEO, LemonWares Branding",
    stars: 5,
  },
  {
    company: "writtheceo",
    feedback:
      "I love working with Ariful and the team. Everyone was so wonderful to work with. Ariful was extremely efficient and paid attention to detail. My website is so detailed and professional. We worked together well.",
    name: "Writ The CEO",
    role: "CEO",
    stars: 5,
  },
  {
    company: "colinslaven",
    feedback:
      "The design team understood the assignment / project / vision and delivered all in a timely manner. Communication was awesome and we look forward to moving onto the next stage of development.",
    name: "Colin Slaven",
    role: "CEO/Founder",
    stars: 5,
  },
  {
    company: "Jenniferwomick",
    feedback: "Amazing work! Great response time and team.",
    name: "Jennifer Womick",
    role: "CEO",
    stars: 5,
  },
  {
    company: "kev23brown",
    feedback: "Great work! Very professional and responsive. Highly recommend.",
    name: "Kevin Brown",
    role: "CEO",
    stars: 5,
  },
  {
    company: "aseelabbas95",
    feedback:
      "well done guys at this stage We are so happy can't wait to see end result",
    name: "Aseel Abbas",
    role: "CEO",
    stars: 5,
  },
  // Add more testimonials as needed
];
const TestimonialCard = ({ testimonial }) => (
  <div className="flex items-center justify-center border rounded-xl border-opacity-50 border-sky-100">
    <div className="rounded-xl shadow-md p-4 w-72">
      <div className="text-xs font-semibold mb-1">{testimonial.company}</div>
      <FaQuoteLeft className="text-green-400 mb-2" />
      <p className="text-sm text-gray-600 mb-4">{testimonial.feedback}</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.role}</div>
        </div>
        <ReactStars
          count={testimonial.stars}
          size={20}
          activeColor="#ffd700"
          value={testimonial.stars}
          edit={false}
        />
      </div>
    </div>
  </div>
);

export default function TestimonialSection() {
  return (
    <section id="reviews" className="container mx-auto px-4 pt-20 ">
      <div></div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-8 overflow-hidden">
        {/* Static Featured Card */}
        <div className="w-[100%] md:max-w-2xl mx-auto p-2 lg:p-6">
          {/* Header with quote icon */}
          <div className="relative mb-6">
            <Slide direction="left">
              <img
                className="absolute lg:top-0 left-0 h-[50px] top-[18px] lg:h-[100px]"
                src={icon}
                alt=""
              />
            </Slide>
            <Fade fraction={1} direction="up">
              <div className="absolute top-12 left-[0rem] lg:left-16">
                <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-green-900">
                  What Our
                </h1>
                <h2 className="text-4xl  lg:text-5xl 2xl:text-6xl font-bold text-green-400">
                  Client Says
                </h2>
              </div>
            </Fade>
          </div>

          <Fade cascade duration={1000} damping={0.2}>
            {/* Subtitle */}
            <p className="text-gray-600 mb-6 mt-36 lg:mt-48 text-sm lg:text-lg">
              We are a group of professionals who are passionate about what we
              do.
            </p>

            {/* Location and Language Info */}
            <div className="flex items-center gap-6 mb-4 text-sm text-gray-700 font-semibold">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>English, Bengali</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 font-bold mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold ">4.9/5</span>
              <span className=" ">| 250+ Clients</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8 text-xs lg:text-lg">
              Trusted Worldwide | Get in touch with our professionals team and
              become happy like our clients.
            </p>
          </Fade>
          {/* Client Avatars */}
          <div className="flex items-center gap-4 mb-8">
            {/* Badge 1 */}
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-bold">5★</div>
            </div>

            {/* Avatar 1 */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={client1}
                alt="Client avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Avatar 2 */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={client2}
                alt="Client avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Avatar 3 */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={client3}
                alt="Client avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Avatar 4 */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={client4}
                alt="Client avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge 2 */}
            <a href="https://www.fiverr.com/solution_sqd?public_mode=true">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-white text-xs font-bold">More+</div>
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6">
            <Slide direction="up" cascade damping={0.2}>
              <a
                href="https://www.fiverr.com/solution_sqd?public_mode=true"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Read More Reviews
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.fiverr.com/solution_sqd?public_mode=true"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </Slide>
          </div>
        </div>

        <div className="flex gap-10 h-[520px]">
          {/* Scrollable marquee box */}
          <div className="relative overflow-hidden h-full w-full">
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black z-10 h-32 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black z-10 h-32 to-transparent"></div>
            <div className=" flex gap-10 flex-col animate-scrollUp">
              {testimonials.concat(testimonials).map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
        <div className=" gap-10 h-[520px] hidden md:flex">
          {/* Scrollable marquee box */}
          <div className="relative overflow-hidden h-full w-full">
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black z-10 h-32 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black z-10 h-32 to-transparent"></div>
            <div className="flex flex-col gap-10 animate-scrollDown">
              {testimonials.concat(testimonials).map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
