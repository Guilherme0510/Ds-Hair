'use client'

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9f4f5] px-4">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-[#652C53] mb-4">
          Bem-vindo ao <span className="text-pink-500">DsHairEdits 💇‍♀️</span>
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Aqui você pode deixar seu feedback e conferir nossos posts com dicas, novidades e conteúdos do mundo da beleza!
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/feedbacks"
            className="bg-pink-500 hover:bg-pink-600 transition text-white font-medium py-2 px-4 rounded-full"
          >
            Ver Feedbacks
          </Link>
          <Link
            href="/blog"
            className="bg-[#652C53] hover:bg-[#3f1331] transition text-white font-medium py-2 px-4 rounded-full"
          >
            Acessar Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
