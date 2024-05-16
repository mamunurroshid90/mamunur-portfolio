import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from "../layouts/Title";
import { testimonialOne, testimonialTwo, quote } from "../../assets";
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10 "
      onClick={onClick}
    >
      <FaArrowAltCircleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10 "
      onClick={onClick}
    >
      <FaArrowAltCircleLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{}}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "14px",
                height: "14px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "30px",
              }
            : {
                width: "14px",
                height: "14px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "30px",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" desc="Testimonial" />
      </div>
      <div className=" max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* 1st slider */}
          <div className=" w-full">
            <div className=" w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className=" h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className=" w-full flex flex-col justify-end">
                  <p className=" text-xs uppercase text-designColor tracking-wide mt-2 mb-1">
                    bound-trolola
                  </p>
                  <h3 className=" text-2xl font-bold capitalize">
                    jone duone joe
                  </h3>
                  <p className=" text-base tracking-wide text-gray-500">
                    operation officer
                  </p>
                </div>
              </div>
              <div className=" w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className=" w-20 lgl:w-32" src={quote} alt="quote" />
                <div className=" w-full h-[70%] py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-4 lgl:p-8 flex flex-col justify-between gap-4 lgl:gap-8">
                  <div className=" flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className=" text-xl lgl:text-2xl font-medium tracking-wide capitalize">
                        travel mobile app design
                      </h3>
                      <p className=" text-base text-gray-400 mt-3">
                        via upWork mar 4, 2015 - aug 30, 2021 test{" "}
                      </p>
                    </div>
                    <div className=" flex gap-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div>
                    <p className=" text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora ea esse, ut provident amet, debitis nihil ducimus
                      labore cumque, aliquam temporibus perferendis nulla
                      incidunt magnam nam eum possimus assumenda tempore
                      voluptatum? Quos dolorem fuga exercitationem nihil
                      assumenda eius accusamus praesentium?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd slider */}
          <div className=" w-full">
            <div className=" w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className=" h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className=" w-full flex flex-col justify-end">
                  <p className=" text-xs uppercase text-designColor tracking-wide mt-2 mb-1">
                    bound-trolola
                  </p>
                  <h3 className=" text-2xl font-bold capitalize">
                    jone duone joe
                  </h3>
                  <p className=" text-base tracking-wide text-gray-500">
                    operation officer
                  </p>
                </div>
              </div>
              <div className=" w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className=" w-20 lgl:w-32" src={quote} alt="quote" />
                <div className=" w-full h-[70%] py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-4 lgl:p-8 flex flex-col justify-between gap-4 lgl:gap-8">
                  <div className=" flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className=" text-xl lgl:text-2xl font-medium tracking-wide capitalize">
                        travel mobile app design
                      </h3>
                      <p className=" text-base text-gray-400 mt-3">
                        via upWork mar 4, 2015 - aug 30, 2021 test{" "}
                      </p>
                    </div>
                    <div className=" flex gap-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div>
                    <p className=" text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora ea esse, ut provident amet, debitis nihil ducimus
                      labore cumque, aliquam temporibus perferendis nulla
                      incidunt magnam nam eum possimus assumenda tempore
                      voluptatum? Quos dolorem fuga exercitationem nihil
                      assumenda eius accusamus praesentium?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd slider */}
          <div className=" w-full">
            <div className=" w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className=" h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className=" w-full flex flex-col justify-end">
                  <p className=" text-xs uppercase text-designColor tracking-wide mt-2 mb-1">
                    bound-trolola
                  </p>
                  <h3 className=" text-2xl font-bold capitalize">
                    jone duone joe
                  </h3>
                  <p className=" text-base tracking-wide text-gray-500">
                    operation officer
                  </p>
                </div>
              </div>
              <div className=" w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className=" w-20 lgl:w-32" src={quote} alt="quote" />
                <div className=" w-full h-[70%] py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-4 lgl:p-8 flex flex-col justify-between gap-4 lgl:gap-8">
                  <div className=" flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className=" text-xl lgl:text-2xl font-medium tracking-wide capitalize">
                        travel mobile app design
                      </h3>
                      <p className=" text-base text-gray-400 mt-3">
                        via upWork mar 4, 2015 - aug 30, 2021 test{" "}
                      </p>
                    </div>
                    <div className=" flex gap-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div>
                    <p className=" text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora ea esse, ut provident amet, debitis nihil ducimus
                      labore cumque, aliquam temporibus perferendis nulla
                      incidunt magnam nam eum possimus assumenda tempore
                      voluptatum? Quos dolorem fuga exercitationem nihil
                      assumenda eius accusamus praesentium?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
