"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TitleProps {
  text: string;
  textSize: string
}

const Title: React.FC<TitleProps> = ({ text, textSize }) => {
  const [lineWidth, setLineWidth] = useState(70);

  useEffect(() => {
    const updateLineWidth = () => {
      const isMd = window.innerWidth >= 768;
      setLineWidth(isMd ? 100 : 70);
    };

    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);
    return () => window.removeEventListener("resize", updateLineWidth);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 mb-10"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="border-t border-black"
        />
        <h1 className={`${textSize} md:text-3xl text-center text-[#464444] font-semibold px-6 py-5 bg-[#c8a2c8]`}>
          {text}
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="border-t border-black"
        />
      </motion.div>
    </>
  );
};

export default Title;
