import React from "react";
import Navbar from "./Componentes/navbar";
import Footer from "./Componentes/footer";
import Sobre from "./Componentes02/sobre";
import Equipe from "./Componentes02/equipe";

function SobreNos() {
    return ( <div>
        <Navbar/>
        <Sobre/>
        <Equipe/>
        <Footer/>
        </div>
    )
}

export default SobreNos;