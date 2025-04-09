"use client";

import React, { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarMensagem = () => {
    const texto = `Olá, meu nome é ${nome}. \n\n${mensagem}`;
    const link = `https://wa.me/5511943662796?text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div
          className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden h-[500px]"
        >
          <div className="bg-black/50 backdrop-blur-sm h-full w-full flex flex-col justify-center p-10 text-white">
            <h2 className="text-4xl font-extrabold mb-6 text-center underline underline-offset-4">Informações</h2>
            <div className="space-y-4 text-lg font-medium">
              <p><span className="font-bold">👩 Nome:</span> Daniela da Silva</p>
              <p><span className="font-bold">📍 Localização:</span> São Paulo - SP</p>
              <p><span className="font-bold">📞 Telefone:</span> (11) 94366-2796</p>
              <p><span className="font-bold">📧 E-mail:</span> daniefilhostres@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl h-full shadow-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Fale Conosco</h2>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-4 rounded-3xl bg-pink-200 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <textarea
              placeholder="Digite sua mensagem..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full p-4 rounded-3xl bg-pink-200 placeholder-gray-700 text-gray-800 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <button
              onClick={enviarMensagem}
              className="w-full bg-purple-900 hover:bg-purple-800 text-white font-bold py-4 rounded-full transition duration-300"
            >
              Enviar para o WhatsApp 💬
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
