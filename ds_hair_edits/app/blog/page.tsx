'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { Trash2 } from "lucide-react";

type Post = {
  id: string;
  titulo: string;
  resumo: string;
  data: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [postParaExcluir, setPostParaExcluir] = useState<Post | null>(null);
  const [excluindo, setExcluindo] = useState(false);

  useEffect(() => {
    carregarPosts();
  }, []);

  async function carregarPosts() {
    const ref = query(collection(db, "posts"), orderBy("data", "desc"));
    const snap = await getDocs(ref);
    const dados = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
    setPosts(dados);
  }

  function confirmarExclusao(post: Post) {
    setPostParaExcluir(post);
    setModalAberto(true);
  }

  async function excluirPost() {
    if (!postParaExcluir) return;
    setExcluindo(true);
    await deleteDoc(doc(db, "posts", postParaExcluir.id));
    setModalAberto(false);
    setExcluindo(false);
    setPostParaExcluir(null);
    carregarPosts();
  }

  const filtrados = posts.filter(post =>
    post.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
    post.resumo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>

      <div className="flex flex-col gap-4 mb-4">
        <input
          type="text"
          placeholder="Pesquisar post..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />
        <Link
          href="/blog/novo"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
        >
          + Novo Post
        </Link>
      </div>

      {filtrados.map(post => (
        <div
          key={post.id}
          className="border p-3 mb-3 rounded hover:bg-gray-50 transition flex justify-between items-start"
        >
          <Link href={`/blog/${post.id}`} className="flex-1">
            <h2 className="text-lg font-semibold">{post.titulo}</h2>
            <p className="text-gray-700">{post.resumo}</p>
            <span className="text-sm text-gray-500">{post.data}</span>
          </Link>
          <button
            onClick={() => confirmarExclusao(post)}
            className="ml-3 text-red-600 hover:text-red-800 transition"
            title="Excluir post"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}

      {filtrados.length === 0 && (
        <p className="text-gray-500 mt-6 text-center">Nenhum post encontrado.</p>
      )}

      {modalAberto && postParaExcluir && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center animate-fade-in">
            <h2 className="text-lg font-semibold text-[#464444] mb-4">
              Tem certeza que deseja excluir o post:
            </h2>
            <p className="mb-6 font-medium">{postParaExcluir.titulo}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setModalAberto(false)}
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 transition"
              >
                Cancelar
              </button>
              <button
                onClick={excluirPost}
                disabled={excluindo}
                className={`px-4 py-2 rounded text-white ${
                  excluindo ? "bg-red-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                } transition`}
              >
                {excluindo ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
