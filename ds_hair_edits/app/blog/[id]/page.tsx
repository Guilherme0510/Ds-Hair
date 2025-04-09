/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Carregando post...</p>
      </div>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4 text-black">
      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">{post.titulo}</h1>
        <p className="text-sm text-gray-400 mb-6">Publicado em {post.data}</p>

        <div className="prose prose-pink prose-lg max-w-none">
          {post.conteudo
            .split("\n")
            .map((paragrafo: string, index: number) => (
              <p key={index}>{paragrafo}</p>
            ))}
        </div>
      </article>
    </main>
  );
}
