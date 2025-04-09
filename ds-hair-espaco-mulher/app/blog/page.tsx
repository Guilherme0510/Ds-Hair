"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Title from "../(components)/Title";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Post = {
  id: string;
  titulo: string;
  resumo: string;
  data: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filtro, setFiltro] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const postsPorPagina = 8;

  useEffect(() => {
    const carregar = async () => {
      const q = query(collection(db, "posts"), orderBy("data", "desc"));
      const snap = await getDocs(q);
      const dados = snap.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Post)
      );
      setPosts(dados);
    };
    carregar();
  }, []);

  const filtrados = posts.filter(
    (post) =>
      post.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      post.resumo.toLowerCase().includes(filtro.toLowerCase())
  );

  const totalPaginas = Math.ceil(filtrados.length / postsPorPagina);
  const inicio = (paginaAtual - 1) * postsPorPagina;
  const fim = inicio + postsPorPagina;
  const postsPaginados = filtrados.slice(inicio, fim);

  return (
    <div className="p-6 max-w-7xl mx-auto text-black">
      <Title text="Blog" textSize="text-2xl" />

      <input
        type="text"
        placeholder="Buscar postagens..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {postsPaginados.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-5 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#464444] mb-1">
              {post.titulo}
            </h2>
            <p className="text-gray-600">{post.resumo}</p>
            <span className="text-sm text-gray-400 block mt-2">
              {post.data}
            </span>
          </Link>
        ))}

        {filtrados.length === 0 && (
          <p className="text-gray-500 text-center col-span-full">
            Nenhum post encontrado.
          </p>
        )}
      </div>

      {totalPaginas > 1 && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600">
            Página {paginaAtual} de {totalPaginas}
          </span>

          <Pagination>
            <PaginationContent>
              {paginaAtual > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPaginaAtual(paginaAtual - 1);
                    }}
                  />
                </PaginationItem>
              )}

              {paginaAtual < totalPaginas && (
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPaginaAtual(paginaAtual + 1);
                    }}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
