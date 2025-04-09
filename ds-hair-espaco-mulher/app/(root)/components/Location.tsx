"use client";

import React from "react";
import { motion } from "framer-motion";

const LocationMap = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative md:w-2/3 py-10 px-4 mx-auto h-[400px] mb-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl text-center text-[#464444] font-semibold mb-8"
      >
        Onde Estamos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-4 text-gray-600 text-center"
      >
        Nosso salão está localizado em um ponto de fácil acesso. Venha nos
        visitar!
      </motion.p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5251893697354!2d-46.512082124870735!3d-23.513213159328836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce618f8ecdc57f%3A0x1a98bc50f93efbde!2sDs%20Hair%20-%20Espa%C3%A7o%20mulher!5e0!3m2!1spt-BR!2sbr!4v1712587731640!5m2!1spt-BR!2sbr"
        className="w-full h-full border-0 rounded-xl"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -translate-y-40 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white p-6 rounded-xl shadow-lg max-w-xl w-[90%] text-center backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold mb-2">Nosso Endereço</h2>
        <p className="text-pink-400 font-medium mb-1">
          📍 Rua Visconde de Antunes Braga, 43 - Vila Dorna, São Paulo - SP
        </p>
      </motion.div>
    </motion.section>
  );
};

export default LocationMap;
