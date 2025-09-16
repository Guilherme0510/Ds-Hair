"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "@/app/(components)/Title";

const equipe = [
  {
    nome: "Daniela da Silva",
    img: "/assets/dani_sobre.jpg",
    profissao: "Cabeleireira",
  },
  {
    nome: "Agatha Silva",
    img: "/assets/agatha_sobre.jpg",
    profissao: "Designer de Unhas",
  },
  {
    nome: "Camila Lins",
    img: "/assets/camila_sobre.jpg",
    profissao: "Lash Designer",
  },
];

const HistoriaEquipe = () => {
  return (
    <section className="py-5 max-w-7xl mx-auto">
      <Title textSize="text-xl" text="Nossa Equipe" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 justify-items-center">
        {equipe.map((pessoa, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-[300px] h-[300px] relative border-4 border-[#652c53] rounded-full border-double overflow-hidden shadow-xl z-10">
              <Image
                src={"/assets/fundo-equipe.png"}
                alt="Imagem do Sobre"
                width={400}
                height={10}
                className="absolute bottom-30 left-1/2 -translate-x-1/2"
              />

              <Image
                src={pessoa.img}
                alt={pessoa.nome}
                fill
                className={`rounded-full object-cover p-1 z-10 ${
                  pessoa.nome === "Daniela da Silva"
                    ? "object-top"
                    : ""
                }`}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/4 bg-[#652c53]/70 text-white flex items-center justify-center backdrop-blur-md z-20">
                <span className="text-lg font-semibold tracking-wide">
                  {pessoa.nome}
                </span>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p className="text-sm uppercase tracking-wide text-[#652c53] bg-[#f2e5f2] px-4 py-1 rounded-full shadow-sm">
                {pessoa.profissao}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HistoriaEquipe;
