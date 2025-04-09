"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const categorias = [
  { nome: "Cabelo", slug: "cabelo" },
  { nome: "Unhas", slug: "unhas" },
];

const HeaderServicos = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center gap-4 mb-8">
      {categorias.map((cat) => {
        const isActive = pathname.includes(cat.slug);

        return (
          <Link
            key={cat.slug}
            href={`/servicos/categoria/${cat.slug}`}
            className={`py-2 px-4 rounded-full font-semibold transition ${
              isActive
                ? "bg-[#652c53] text-white"
                : "bg-[#f1f1f1] text-[#652c53]"
            }`}
          >
            {cat.nome}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderServicos;
