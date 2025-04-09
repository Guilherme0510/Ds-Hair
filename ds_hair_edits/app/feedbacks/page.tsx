"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type Feedback = {
  id: string;
  nome: string;
  comentario: string;
  data?: Timestamp;
};

export default function FeedbacksPage() {
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [feedbackParaExcluir, setFeedbackParaExcluir] = useState<Feedback | null>(null);

  async function enviarFeedback() {
    if (!nome || !comentario) return;

    await addDoc(collection(db, "feedbacks"), {
      nome,
      comentario,
      data: serverTimestamp(),
    });

    setNome("");
    setComentario("");
    carregarFeedbacks();
  }

  async function carregarFeedbacks() {
    const ref = collection(db, "feedbacks");
    const q = query(ref, orderBy("data", "desc"));
    const snapshot = await getDocs(q);
    const dados = snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Feedback)
    );
    setFeedbacks(dados);
  }

  async function confirmarExclusao() {
    if (!feedbackParaExcluir) return;
    await deleteDoc(doc(db, "feedbacks", feedbackParaExcluir.id));
    setMostrarModal(false);
    setFeedbackParaExcluir(null);
    carregarFeedbacks();
  }

  const feedbacksFiltrados = feedbacks.filter(
    (fb) =>
      fb.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      fb.comentario.toLowerCase().includes(pesquisa.toLowerCase())
  );

  useEffect(() => {
    carregarFeedbacks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#652C53] mb-6 text-center">
        Deixe seu Feedback 💬
      </h1>

      <div className="bg-white rounded-xl shadow p-5 mb-10">
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          className="text-black w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Comentário"
          rows={4}
          className="text-black w-full border border-gray-300 rounded px-4 py-2 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={enviarFeedback}
          className="w-full bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-2 px-4 rounded-full"
        >
          Enviar Feedback
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Feedbacks Recebidos 📝
      </h2>

      {/* Barra de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar feedback..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <div className="space-y-4">
        {feedbacksFiltrados.map((fb) => (
          <div
            key={fb.id}
            className="bg-[#fdf9f9] border border-pink-100 p-4 rounded-xl shadow-sm relative"
          >
            <div className="flex items-center justify-between mb-1">
              <strong className="text-[#3f1331]">{fb.nome}</strong>
              <button
                onClick={() => {
                  setFeedbackParaExcluir(fb);
                  setMostrarModal(true);
                }}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Excluir
              </button>
            </div>
            <p className="text-gray-700">{fb.comentario}</p>
          </div>
        ))}

        {feedbacksFiltrados.length === 0 && (
          <p className="text-center text-gray-500 mt-4">Nenhum feedback encontrado.</p>
        )}
      </div>

      {mostrarModal && feedbackParaExcluir && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 shadow-xl max-w-md w-full text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Deseja excluir este feedback?
            </h2>
            <p className="text-gray-600 mb-6">
              {feedbackParaExcluir.comentario}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setMostrarModal(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarExclusao}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
