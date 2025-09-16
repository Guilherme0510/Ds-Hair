"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const categorias = ["cabelo", "unhas", "cilios"];

const PrevServicos = () => {
  return (
    <section className="py-10  px-5 md:px-10">
      <h1 className="text-4xl text-center text-[#464444] font-semibold mb-8">
        <i>Serviços Disponíveis</i>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-10">
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            <Link href={`/servicos/categoria/${categorias[index]}`} className="md:w-3/4 cursor-auto">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="h-[360px] bg-white rounded-xl shadow-md border border-gray-200 flex flex-col relative hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
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
    {index === 0
      ? "Cabelo / Penteados"
      : index === 1
      ? "Manicure / Pedicure"
      : "Lash Lifting / Extensão de Cílios"}
  </h1>

  <p>
    {index === 0
      ? "Transforme seu visual com um corte e estilo impecáveis."
      : index === 1
      ? "Deixe suas unhas perfeitas com nossa manicure profissional."
      : "Realce seu olhar com lash lifting, extensão de cílios ou brow lamination."}
  </p>
</div>

                <Link
                  href={`/servicos/categoria/${categorias[index]}`}
                  className="bg-[#652C53] cursor-pointer text-white py-2 px-4 rounded-md md:hover:bg-[#3f1331] transition duration-300 ease-in-out absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 hover:scale-110"
                >
                  Saiba Mais
                </Link>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrevServicos;
