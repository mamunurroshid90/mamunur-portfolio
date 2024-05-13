import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from "../layouts/Title";
import { testimonialOne, testimonialTwo, quote } from "../../assets";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <div className=" w-full">
            <div className=" w-full h-[500px] flex justify-between">
              <div className=" w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8">
                <img
                  className=" h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div>
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
              <div className=" w-[60%] h-full flex flex-col justify-between">
                <img className=" w-[20%]" src={quote} alt="quote" />
                <div className=" w-full h-[70%] py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-8 flex flex-col justify-between gap-8">
                  <div className=" flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className=" text-2xl font-medium tracking-wide capitalize">
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
          <div className=" w-full">
            <div className=" w-full h-[500px] flex justify-between">
              <div className=" w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8">
                <img
                  className=" h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div>
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
              <div className=" w-[60%] h-full flex flex-col justify-between">
                <img className=" w-[20%]" src={quote} alt="quote" />
                <div className=" w-full h-[70%] py-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-8 flex flex-col justify-between gap-8">
                  <div className=" flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className=" text-2xl font-medium tracking-wide capitalize">
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
