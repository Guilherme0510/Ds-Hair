import React from "react";

import Navbar from "./Componentes/navbar";
import Footer from "./Componentes/footer";
import Cabelo from "./Componentes03/cabelo";

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