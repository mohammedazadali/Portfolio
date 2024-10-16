import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MouseContext } from "../context/MouseContext";

const CustomeMouse = () => {
  const { mousePosition, mouseVariant } = useContext(MouseContext); // Use the context

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 50,
      width: 50,
      padding:20,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.section
      variants={variants}
      animate={mouseVariant}
      className="bg-black bg-opacity-0 w-[1px] h-[1px] rounded-full z-[9999] left-0 top-0 fixed pointer-events-none mouse" 
    ></motion.section>
  );
};

export default CustomeMouse;
