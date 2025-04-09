'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Feedback = {
  nome: string;
  comentario: string;
};

const TestimonialCarousel = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const buscarFeedbacks = async () => {
      const ref = collection(db, "feedbacks");
      const q = query(ref, orderBy("data", "desc"), limit(4)); 
      const snap = await getDocs(q);
      const dados = snap.docs.map(doc => doc.data() as Feedback);
      setFeedbacks(dados);
    };
    buscarFeedbacks();
  }, []);
  const next = () =>
    setIndex((prev) => (prev + 1) % feedbacks.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  console.log(feedbacks);

  if (feedbacks.length === 0) {
    return (
      <section className="py-10 text-center">
        <p className="text-gray-500 text-lg">Carregando feedbacks...</p>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 text-center">
      <h1 className="text-4xl text-center text-[#464444] font-semibold mb-8">
        O que nossos clientes dizem
      </h1>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src="/assets/testimonials.jpg"
                  alt={feedbacks[index].nome}
                  fill
                  className="object-cover rounded-full border-2 border-[#652C53]"
                />
              </div>

              <p className="text-lg italic text-gray-600 mb-4 text-center">
                {feedbacks[index].comentario}
              </p>
              <span className="block font-semibold text-[#3f1331]">
                {feedbacks[index].nome}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="bg-[#652C53] text-white rounded-full px-4 py-2 hover:bg-[#3f1331] transition duration-300"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="bg-[#652C53] text-white rounded-full px-4 py-2 hover:bg-[#3f1331] transition duration-300"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
