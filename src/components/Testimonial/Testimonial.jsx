// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

const TestimonialData = [
  {
    id: 1,
    name: "Jya Shree",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "This team turned my vision into a reality. Each piece was thoughtfully selected, and the process was seamless.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Ahmed",
    designation: "Dealer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "A seamless experience from start to finish. The design reflects my personality perfectly!",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Rahul",
    designation: "Peroperty Dealer",
    img: "https://i.pravatar.cc/300?img=3",
    text: "The quality and care that went into designing my home was exceptional",
    delay: 0.6,
  },
];
const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Words from our coustomers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>
      {/* tesitomonial cards */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
              >
                {/* Upper section */}
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
