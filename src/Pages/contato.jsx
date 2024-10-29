import React from "react";

import Navbar from "../Inicio/Componentes/navbar";
import Footer from "../Inicio/Componentes/footer";
import Contate from "../Inicio/Componentes05/contato";
import Map from "../Inicio/Componentes/map";

function Contato(){
    return(
        <div>
            <Navbar />
            <Contate />
            <Map />
            <Footer />
        </div>
    )
}

export default Contato;