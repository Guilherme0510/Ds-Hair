import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-[#652c53] via-[#652c53] to-[#ae5291] text-white px-6 py-10">
      <div className="border-t border-white mb-6"></div>

      <div className="flex flex-col md:flex-row justify-between mx-auto items-center gap-4 max-w-7xl">
        <nav className="flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:underline">
            Início
          </Link>
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/servicos" className="hover:underline">
            Serviços
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </nav>

        <div className="flex flex-col items-center md:items-end gap-2">
          <Link href={"/"}>
            <Image
              src="/assets/logo-dshair-ñfundo.png"
              alt="Logo DS Hair"
              width={80}
              height={30}
            />
          </Link>
          <span className="text-sm">© 2024 Silva&apos;s Web</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
