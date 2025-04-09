import Image from "next/image";
import React from "react";

interface HeaderProps {
  image: string;
  title: string;
}

const HeaderPages = ({ image, title }: HeaderProps) => {
  return (
    <div>
      {" "}
      <div className="relative w-full md:h-[220px] h-[150px]">
        <Image
          src={image}
          fill
          alt="Imagem do Sobre"
          className="object-cover"
        />
        <div className="absolute bg-black inset-0 opacity-60"></div>
        <h1 className="absolute text-white text-center text-3xl md:text-4xl font-bold z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderPages;
