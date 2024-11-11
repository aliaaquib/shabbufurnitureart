// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Where Vision Meets Craftsmanship
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              we believe that exceptional design has the power to transform
              lives. We don’t just create spaces; we craft environments that
              blend functionality, elegance, and warmth. Our team brings a
              refined sense of style and a dedication to quality, ensuring every
              project we undertake is a reflection of meticulous craftsmanship
              and a deep respect for the client’s vision.{" "}
            </motion.p>
            {/* <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Know More
              </motion.button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
