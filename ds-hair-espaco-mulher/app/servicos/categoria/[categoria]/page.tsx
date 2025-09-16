import HeaderServicos from "@/app/(components)/HeaderServicos";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ categoria: string }>;
};

const servicosPorCategoria: Record<
  string,
  { titulo: string; slug: string; imagem: string }[]
> = {
  cabelo: [
    {
      titulo: "Escova",
      slug: "escova",
      imagem: "/assets/servicos/escova.jpg",
    },
    {
      titulo: "Hidratação",
      slug: "hidratacao",
      imagem: "/assets/servicos/hidratacao.jpg",
    },
    {
      titulo: "Coloração",
      slug: "coloracao",
      imagem: "/assets/servicos/coloracao.webp",
    },
    {
      titulo: "Corte",
      slug: "corte",
      imagem: "/assets/servicos/corte.webp",
    },
    {
      titulo: "Luzes/Mechas",
      slug: "luzes-mechas",
      imagem: "/assets/servicos/luzes.webp",
    },
    {
      titulo: "Relaxamento",
      slug: "relaxamento",
      imagem: "/assets/servicos/relaxamento.jpg",
    },
    {
      titulo: "Cauterização",
      slug: "cauterizacao",
      imagem: "/assets/servicos/cauterizacao.webp",
    },
    {
      titulo: "Progressiva",
      slug: "progressiva",
      imagem: "/assets/servicos/progressiva.jpg",
    },
    {
      titulo: "Botox Capilar",
      slug: "botox-capilar",
      imagem: "/assets/servicos/botox.jpg",
    },
  ],
  unhas: [
    {
      titulo: "Manicure",
      slug: "manicure",
      imagem: "/assets/servicos/manicure.webp",
    },
    {
      titulo: "Pedicure",
      slug: "pedicure",
      imagem: "/assets/servicos/pedicure.jpg",
    },
  ],
  cilios: [
    {
      titulo: "Extensão de Cílios",
      slug: "extensao-de-cilios",
      imagem: "/assets/servicos/extensao.jpg",
    },
    {
      titulo: "Lifting de Cílios",
      slug: "lifting-de-cilios",
      imagem: "/assets/servicos/lifting.jpg",
    },
    {
      titulo: "Design de Sobrancelhas",
      slug: "design-de-sobrancelhas",
      imagem: "/assets/servicos/design.jpg",
    },
  ],
};

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const servicos = servicosPorCategoria[categoria];

  if (!servicos) return notFound();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <HeaderServicos />
      <h1 className="text-4xl font-bold mb-8 capitalize">{categoria}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicos.map((servico) => {
          const nomeContato =
            categoria === "cabelo"
              ? "Daniela da Silva"
              : categoria === "unhas"
              ? "Agatha Silva"
              : categoria === "cilios"
              ? "Camila Lins"
              : "";

          const mensagem = `Olá, ${nomeContato}! Estou visitando o site e gostaria de saber mais sobre o serviço de ${servico.titulo.toLowerCase()}. Poderia me passar mais informações, por favor?`;

          const linkWhatsapp = `https://wa.me/5511943662796?text=${encodeURIComponent(
            mensagem
          )}`;

          return (
            <Link
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              key={servico.slug}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <Image
                src={servico.imagem}
                alt={servico.titulo}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#652c53cc] text-white text-center py-2 text-lg font-semibold">
                {servico.titulo}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
