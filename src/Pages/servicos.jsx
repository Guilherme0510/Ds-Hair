import React from "react";

import Navbar from "../Inicio/Componentes/navbar";
import Footer from "../Inicio/Componentes/footer";
import Servicos from "../Inicio/Componentes03/servicos";

function Servico(){
    
    return(
        <div>
        <Navbar/>
        <Servicos/>
        <Footer/>
        </div>
    );
}

export default Servico;