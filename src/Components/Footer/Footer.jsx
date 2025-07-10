import { FaFacebookF, FaTwitter, FaLinkedinIn, FaHome } from "react-icons/fa";
import logo from "../../assets/Rectangle20.png";
import { NavHashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-sm pt-10 mt-20 pb-4">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        {/* Logo and Info */}
        <div className="flex flex-col items-start text-center">
          <a href="/">
            <img src={logo} alt="About IT Logo" className=" w-32" />
          </a>
          <p className="mb-4 text-left inter">
            AI development services with 100% client satisfaction.
          </p>

          {/* Email input */}
          <div className="flex w-full max-w-[350px] mb-4">
            <input
              type="email"
              placeholder="Send Email"
              className="w-full px-3 py-2 border bg-transparent border-green-600 rounded-l text-sm"
            />
            <button className="bg-green-600 border-green-600 px-4 py-1 text-white rounded-r hover:bg-green-500 text-sm inter">
              Send
            </button>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 text-greenborder-green-600 text-xl">
            <NavHashLink smooth to="#">
              <FaHome className="cursor-pointer hover:text-cyan-800" />
            </NavHashLink>
            <a href="">
              {" "}
              <FaLinkedinIn className="cursor-pointer hover:text-cyan-800" />
            </a>
            {/* <FaTwitter className="cursor-pointer hover:text-cyan-800" />
            <FaFacebookF className="cursor-pointer hover:text-cyan-800" /> */}
          </div>
        </div>

        {/* Committed To */}
        <div>
          <h2 className="font-bold text-base mb-3 inter">Committed To</h2>
          <p className="text-sm mb-2 inter">
            Ordet is a protégé of the Chicago tommusryve educate and collaborate
            with le ifference entermentally ant soccally. Let’s ca Mare.
          </p>
          <a
            href="https://www.fiverr.com/solution_sqd?public_mode=true"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            Go to profile <span>›</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex md:justify-around justify-between">
          <div className="md:col-span-1">
            <h2 className="font-bold text-base mb-3 inter">Quick Links</h2>
            <div className="flex flex-col space-y-2">
              <NavHashLink
                className="flex gap-1 hover:underline text-green-400 items-center inter"
                to={"#"}
                smooth
              >
                Home <span className="">›</span>
              </NavHashLink>
              <NavHashLink
                className="flex gap-1 hover:underline text-green-400 items-center inter"
                smooth
                to="#portfolio"
              >
                Portfolio <span className="">›</span>
              </NavHashLink>
              <NavHashLink
                className="flex gap-1 hover:underline text-green-400 items-center inter"
                to={"#services"}
                smooth
              >
                Services <span className="">›</span>
              </NavHashLink>
              <NavHashLink
                className="flex gap-1 hover:underline text-green-400 items-center inter"
                to={"#teams"}
                smooth
              >
                Teams <span className="inter">›</span>
              </NavHashLink>
            </div>
          </div>

          <div className="md:col-span-1">
            <h2 className="font-bold text-base mb-3 inter">Resources</h2>
            <div className="flex flex-col space-y-2">
              <a
                className="flex gap-1 hover:underline text-green-400 items-center"
                href="https://www.fiverr.com/solution_sqd?public_mode=true"
              >
                Fiverr Profile <span className="inter">›</span>
              </a>
              <a
                className="flex gap-1 hover:underline text-green-400 items-center"
                href="https://www.fiverr.com/solution_sqd?public_mode=true"
              >
                Contact Us <span className=" inter">›</span>
              </a>
              <NavHashLink
                className="flex gap-1 hover:underline text-green-400 items-center inter"
                to={"#reviews"}
                smooth
              >
                Client Reviews <span className="">›</span>
              </NavHashLink>
              <NavHashLink
                className="flex gap-1 hover:underline text-green-400 items-center inter"
                to={"#goals"}
                smooth
              >
                Our Goals <span className="">›</span>
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-green-400">
        © 2025 Team A. All rights reserved.
      </div>
    </footer>
  );
}
