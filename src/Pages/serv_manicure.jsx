import React from "react";

import Navbar from "../Inicio/Componentes/navbar";
import Footer from "../Inicio/Componentes/footer";
import Manicure from "../Inicio/Componentes03/manicure";

function ServicoManicure(){
    
    return(
        <div>
        <Navbar/>
        <Manicure/>
        <Footer/>
        </div>
    );
}

export default ServicoManicure;