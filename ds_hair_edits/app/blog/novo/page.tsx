'use client'

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar"; // <- certifique-se do caminho
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"; // opcional: para data em português

export default function NovoPost() {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [data, setData] = useState<Date | undefined>(new Date());

  const router = useRouter();

  async function salvar() {
    if (!titulo || !resumo || !conteudo || !data) return;

    await addDoc(collection(db, "posts"), {
      titulo,
      resumo,
      conteudo,
      data: format(data, "dd/MM/yyyy"),
    });

    router.push("/blog");
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Novo Post</h1>
      <div className="flex flex-col gap-5">
        <input
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border border-black rounded-md px-3 py-2"
        />
        <input
          placeholder="Resumo"
          value={resumo}
          onChange={(e) => setResumo(e.target.value)}
          className="border border-black rounded-md px-3 py-2"
        />
        <textarea
          placeholder="Conteúdo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="border border-black rounded-md px-3 py-2"
        />

        <div className="bg-white border border-black rounded-md px-3 py-2">
          <label className="font-semibold mb-2 block">Data do Post</label>
          <Calendar
            mode="single"
            selected={data}
            onSelect={setData}
            locale={ptBR}
            className="rounded-md border"
          />
        </div>

        <button
          onClick={salvar}
          className="bg-green-600 text-white px-4 py-2 mt-3 rounded hover:bg-green-700 transition"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
