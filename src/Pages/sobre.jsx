import React from "react";
import Navbar from "../Inicio/Componentes/navbar";
import Footer from "../Inicio/Componentes/footer";
import Sobre from "../Inicio/Componentes02/sobre";
import Equipe from "../Inicio/Componentes02/equipe";

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