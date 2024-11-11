// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner1 from "../../assets/banner3.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner3 = () => {
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
              Design for a Better Life
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              We believe that a beautifully designed space does more than just
              look good—it enhances well-being, promotes productivity, and
              brings joy to everyday moments. Every detail we choose and every
              layout we plan is guided by the principle of creating harmony
              between aesthetics and functionality. Our designs are meant to
              inspire, comfort, and elevate the quality of life for all who
              experience them.{" "}
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

export default Banner3;
