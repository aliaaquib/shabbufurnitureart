// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "Residential Interior Designs",
    description:
      "Embark on a journey of interior transformation with us. We design, decorate, and furnish every room, from cozy bedrooms to vibrant living rooms, uplifting your environment and mood with",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Master Bathroom Plans",
    description:
      "We specialize in designing and decorating master bathrooms, creating luxurious and stylish spaces tailored to your needs and preferences.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Modular Kitchen Plan",
    description:
      "We specialize in modular and luxury kitchen design, blending functionality and style. Our expert team transforms your kitchen into a favorite space, ensuring a perfect culinary experience.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
  // {
  //   id: 4,
  //   title: "Premium Office interior designs",
  //   description:
  //     "We offer interior design for offices and commercial spaces, creating environments that inspire productivity and growth. Our expert team aligns each design with your business  ",
  //   icon: <BiSolidDollarCircle />,
  //   link: "#",
  //   delay: 0.6,
  // },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            From concept to completion, we provide one-on-one design assistance and curated products.
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-block border-b border-black"
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
