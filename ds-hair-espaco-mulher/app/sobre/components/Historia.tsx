"use client";

import Title from "@/app/(components)/Title";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const Historia = () => {

  const info = [
    {
      title: "Missão",
      text: "Proporcionar experiências únicas de beleza e bem-estar, realçando a autoestima de nossas clientes por meio de serviços de excelência em cuidados capilares e unhas, sempre com inovação, qualidade e carinho.",
      icon: <FaBullseye size={40}/>,
      delay: 0,
    },
    {
      title: "Visão",
      text: "Ser referência no setor da beleza, reconhecida pela qualidade dos nossos serviços, atendimento diferenciado e compromisso com a satisfação de cada cliente, tornando o DS Hair Espaço Mulher um sinônimo de confiança e estilo.",
      icon: <FaEye size={40}/>,
      delay: 0.2,
    },
    {
      title: "Valores",
      text: (
        <ul className="text-left text-gray-600 space-y-2">
          <li>🌟 Excelência</li>
          <li>💖 Atendimento humanizado</li>
          <li>🤝 Respeito</li>
          <li>🎨 Paixão pela beleza</li>
          <li>⚖️ Ética e profissionalismo</li>
        </ul>
      ),
      icon: <FaHeart size={40}/>,
      delay: 0.4,
    },
  ];



  return (
    <section className="px-10 py-5 flex flex-col gap-14">
      <Title textSize="text-2xl" text="Sobre Nós"/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-[350px] relative"
        >
          <Image
            src="/assets/img-salao.jpg"
            alt="Imagem do Salão"
            fill
            className="rounded-2xl shadow-md object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl text-center mb-7">
            DS Hair Espaço Mulher: Transformando Beleza, Elevando Autoestima.
          </h2>
          <p className="text-gray-600 text-justify">
            Com mais de 15 anos de experiência, o{" "}
            <span className="font-bold">DS Hair Espaço Mulher</span> é
            referência em cuidados capilares e unhas, proporcionando mais do que
            estética: oferecemos bem-estar, confiança e renovação. Nosso
            compromisso é entregar um atendimento personalizado, utilizando as
            melhores técnicas e produtos do mercado. <br />
            Nossa equipe de profissionais altamente capacitados está sempre
            atualizada com as últimas tendências, garantindo resultados
            impecáveis e um ambiente acolhedor. Seja para um novo corte,
            coloração, alongamento de unhas ou aquele momento de autocuidado,
            estamos aqui para realçar a sua beleza e tornar cada visita uma
            experiência única.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center max-w-7xl mx-auto mt-10">
        {info.map(({ title, text, icon, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeInOut" }}
            className="w-full h-full p-6 rounded-3xl border-4 border-double border-[#652c53] shadow-lg text-center hover:scale-105 hover:bg-[#daaeda] transition-transform duration-200 ease-in-out"
          >
            <div className="flex flex-col items-center gap-5">
              <span className="bg-[#c8a2c8] p-6 rounded-3xl"> {icon}</span>
              <h3 className="text-xl font-bold mb-2 text-[#464444]">{title}</h3>
              <span className="text-gray-600">{text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Historia;
