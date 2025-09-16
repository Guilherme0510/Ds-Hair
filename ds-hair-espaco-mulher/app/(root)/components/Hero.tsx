"use client";

import React from "react";
import EmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images = [
  {
    title: "Confortabilidade",
    text: "Desfrute da confortabilidade enquanto realçamos sua beleza!!",
    imageUrl: "/assets/img_banner1.jpg",
    alt: "Image do banner 1",
  },
  {
    title: "Transformação",
    text: "Aqui, a transformação é mais do que uma mudança, é uma jornada para a sua melhor versão!!",
    imageUrl: "/assets/img-banner2.jpg",
    alt: "Image do banner 2",
  },
  {
    title: "Luxo",
    text: "Experimente o luxo em cada detalhe da sua transformação!!",
    imageUrl: "/assets/img_banner3.jpg",
    alt: "Image do banner 3",
  },
];

const Hero = () => {
  const [emblaRef] = EmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[450px] sm:h-[350px] md:h-[450px] lg:h-[700px]">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />

                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-xl mt-2">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
