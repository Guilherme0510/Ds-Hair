import React from "react";

import Navbar from "./Componentes/navbar";
import Footer from "./Componentes/footer";
import Servicos from "./Componentes03/servicos";

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