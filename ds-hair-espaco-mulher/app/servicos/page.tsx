import React from "react";
import HeaderPages from "../(components)/HeaderPages";
import Title from "../(components)/Title";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <HeaderPages image="/assets/img-servicos.png" title="Serviços" />
      <div className="px-10 py-5">
        <div className="py-4">
          <Title text="Nosso Serviços" textSize="text-2xl" />
          <p className="text-center">
            <span className="font-bold">DS Hair Espaço Mulher</span> oferece
            cortes, colorações, tratamentos e penteados para mulheres. <br />{" "}
            Nossa equipe experiente está aqui para realçar sua beleza.
            Visite-nos e saia confiante.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          {/* Serviço 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#ffffff50] rounded-2xl px-5 shadow-2xl">
            <div className="relative w-full h-72 md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/img-servico1.png"
                alt="Serviço 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-14 text-[#464444] italic">
                Cabelo
              </h1>
              <p className="mb-4 max-w-[400px]">
                Em nosso salão, oferecemos serviços de cabelo excepcionais que
                vão além do comum. Nossos profissionais garantem uma experiência
                de revitalização completa, adaptada às suas necessidades.
              </p>
              <Link href={'/servicos/categoria/cabelo'} className="py-3 px-6 bg-[#652c53] text-white rounded-br-2xl rounded-tl-2xl rounded-xl hover:opacity-80 transition hover:scale-110">
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Serviço 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#ffffff50] rounded-2xl px-5 shadow-2xl">
            <div className="order-2 md:order-1 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-14 text-[#464444] italic">
                Unhas
              </h1>
              <p className="mb-4 max-w-[400px]">
                Em nosso espaço de manicure, oferecemos serviços excepcionais
                que vão além do tradicional. Nossas profissionais garantem uma
                experiência completa, adaptada às suas preferências.
              </p>
              <Link href={'/servicos/categoria/unhas'} className="py-3 px-6 bg-[#652c53] text-white rounded-br-2xl rounded-tl-2xl rounded-xl hover:opacity-80 transition hover:scale-110">
                Saiba Mais
              </Link>
            </div>
            <div className="order-1 md:order-2 relative w-full h-72 md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/img-servico2.png"
                alt="Serviço 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
