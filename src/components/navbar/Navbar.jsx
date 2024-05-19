import React, { useState } from "react";

import { Link } from "react-scroll";
import { navLinksData } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { p_logo } from "../../assets/index";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" w-full h-24 mx-auto sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-gray-600">
      <div className=" w-[70px] h-[70px] object-cover ">
        <img
          className=" w-full h-full rounded-full border-gray-700 border-2"
          src={p_logo}
          alt="logo"
        />
      </div>
      <div>
        <ul className=" hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className=" text-xl mdl:hidden bg-black w-10 h-10 inline-flex justify-center items-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className=" w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className=" flex flex-col gap-4 relative ">
              <div className=" w-[70px] h-[70px] object-cover ">
                <img
                  className=" w-full h-full rounded-full border-gray-700 border-2"
                  src={p_logo}
                  alt="logo"
                />
              </div>
              <ul className=" flex flex-col gap-4">
                {navLinksData.map((item) => (
                  <li
                    key={item._id}
                    className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className=" flex flex-col gap-4">
                <h2 className=" text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div>
                  <a
                    href="https://www.facebook.com/mamunroshid93"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
                  <a
                    href="https://x.com/roshidmamun9090"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaTwitter />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mamunroshid/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className=" absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
