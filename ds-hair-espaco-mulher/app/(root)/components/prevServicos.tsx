"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const PrevServicos = () => {
  return (
    <section className="py-10 px-4">
      <h1 className="text-4xl text-center text-[#464444] font-semibold mb-8">
        <i>Serviços Disponíveis</i>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10">
        {[1, 2].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="h-[360px] md:w-2/4 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col relative hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <div className="relative h-full w-full">
              <Image
                src={`/assets/img-serv${index + 1}.jpg`}
                alt="img-servicos"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="h-1/2 px-4 py-8 text-center flex flex-col justify-center gap-2">
              <h1 className="text-2xl font-light">
                {index === 0 ? "Cabelo / Penteados" : "Manicure / Pedicure"}
              </h1>
              <p>
                {index === 0
                  ? "Transforme seu visual com um corte e estilo impecáveis."
                  : "Deixe suas unhas perfeitas com nossa manicure profissional."}
              </p>
            </div>
            <button className="bg-[#652C53] cursor-pointer text-white py-2 px-4 rounded-md md:hover:bg-[#3f1331] transition duration-300 ease-in-out absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 hover:scale-110">
              Saiba Mais
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrevServicos;
