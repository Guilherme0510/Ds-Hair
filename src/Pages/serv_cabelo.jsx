import React from "react";

import Navbar from "../Inicio/Componentes/navbar";
import Footer from "../Inicio/Componentes/footer";
import Cabelo from "../Inicio/Componentes03/cabelo";

function ServicoCabelo(){
    
    return(
        <div>
        <Navbar/>
        <Cabelo />
        <Footer/>
        </div>
    );
}

export default ServicoCabelo;