import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Site from "./Pages/inicio";
import SobreNos from "./Pages/sobre";
import Servico from "./Pages/servicos";
import ServicoCabelo from "./Pages/serv_cabelo";
import ServicoManicure from "./Pages/serv_manicure";
import ServicoLash from "./Pages/serv-lash";
import Contato from "./Pages/contato";
import Blog from "./Pages/blog";
import Post01 from "./Posts/Post01";
import Post02 from "./Posts/Post02";
import Post03 from "./Posts/Post03";
import Post04 from "./Posts/Post04";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Site />} path="/" />
        <Route element={<SobreNos />} path="/sobre-nos" />
        <Route element={<Servico />} path="/servicos" />
        <Route element={<ServicoCabelo />} path="/servicos-cabelo" />
        <Route element={<ServicoManicure />} path="/servicos-unha" />
        <Route element={<ServicoLash />} path="/servicos-lash_sobrancelha" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Post01 />} path="/blog/post01" />
        <Route element={<Post02 />} path="/blog/post02" />
        <Route element={<Post03 />} path="/blog/post03" />
        <Route element={<Post04 />} path="/blog/post04" />
        <Route element={<Contato />} path="/contato" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
