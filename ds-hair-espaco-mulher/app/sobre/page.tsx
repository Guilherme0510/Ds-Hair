import React from "react";
import Historia from "./components/Historia";
import Equipe from "./components/Equipe";
import HeaderPages from "../(components)/HeaderPages";

const Page = () => {
  return (
    <section>
      <HeaderPages
        image="/assets/img-sobre.png"
        title="Quem 
      Somos?"
      />
      <Historia />
      <Equipe />
    </section>
  );
};

export default Page;
