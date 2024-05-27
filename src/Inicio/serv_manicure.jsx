import React from "react";

import Navbar from "./Componentes/navbar";
import Footer from "./Componentes/footer";
import Manicure from "./Componentes03/manicure";

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