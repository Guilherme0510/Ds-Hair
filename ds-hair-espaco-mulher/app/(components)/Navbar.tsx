"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavOnScroll, setShowNavOnScroll] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = ["Inicio", "Sobre", "Serviços", "Blog", "Contato"];

  function slugify(text: string) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ç/g, "c")
      .toLowerCase()
      .replace(/\s+/g, "");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setShowNavOnScroll(true);
      } else {
        setShowNavOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="bg-[#652C53]">
        <div className="flex flex-col md:flex-row justify-around items-center mx-auto border-b border-white pt-4">
          <Image
            src="/assets/logo-dshair-ñfundo.png"
            alt="logo"
            width={150}
            height={100}
          />
          <div className="flex flex-row gap-5 items-center px-4">
            <div className="flex flex-row gap-5">
              <Link
      href="https://api.whatsapp.com/send?phone=5511943662796&text=Olá! Gostaria de saber mais sobre os serviços."
      className="text-white rounded-md bg-[#3f1331] p-3 hover:scale-110 hover:bg-[#300823]"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackEvent("click_whatsapp", { pagina: "home" });
      }}
    >
      <FaWhatsapp className="w-4 h-4" />
    </Link>
              <Link
                href="https://www.instagram.com/ds_hairespacomulher/"
                className="text-white rounded-md bg-[#3f1331] p-3 hover:scale-110 hover:bg-[#300823]"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/danisilvalora"
                className="text-white rounded-md bg-[#3f1331] p-3 hover:scale-110 hover:bg-[#300823]"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col text-white mb-4">
              <h2 className="text-xl font-bold">Horário de Atendimento</h2>
              <p className="text-sm">Seg - Sáb das 07:00 às 20:00</p>
            </div>
          </div>
        </div>

        <nav
          className={`bg-[#3f1331] w-full z-50 transition-all duration-300 ${
            showNavOnScroll ? "fixed top-0 shadow-md" : "relative"
          }`}
        >
          <div className="flex md:hidden justify-end px-4 py-3">
            <button
              onClick={toggleMenu}
              className="text-white border border-white p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {menuOpen && (
            <ul className="flex flex-col md:hidden items-center gap-6 bg-[#3f1331] pb-6 animate-fade-in-down">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="text-white text-lg font-medium hover:text-pink-300 transition-colors duration-300"
                >
                  <Link href={item === "Inicio" ? "/" : `/${slugify(item)}`}>{item}</Link>

                </li>
              ))}
            </ul>
          )}

          <div className="hidden md:flex md:justify-center md:gap-12 md:py-3">
            <ul className="flex flex-row justify-center items-center mx-auto gap-9">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="text-white text-center py-2 relative group"
                >
                  <Link href={item === "Inicio" ? "/" : `/${slugify(item)}`}>{item}</Link>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
