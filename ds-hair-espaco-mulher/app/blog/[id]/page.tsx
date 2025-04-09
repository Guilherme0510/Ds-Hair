/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PostDetalhes() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const buscar = async () => {
      const ref = doc(db, "posts", id as string);
      const snap = await getDoc(ref);
      if (snap.exists()) setPost(snap.data());
    };
    if (id) buscar();
  }, [id]);

  if (!post) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center text-gray-500">
        Carregando postagem...
      </div>
    );
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-300 p-10 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 opacity-10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-100 opacity-10 rounded-full blur-2xl" />

        <h1 className="text-3xl md:text-4xl font-bold text-[#464444] mb-10 leading-tight tracking-tight">
          {post.titulo}
        </h1>

        <h1 className="text-xl font-bold text-[#464444] mb-5 leading-tight tracking-tight">
          {post.resumo}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{post.data}</p>
        <div className="text-justify text-[17px] text-gray-700 leading-relaxed space-y-5">
          {post.conteudo.split("\n").map((paragrafo: string, i: number) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
