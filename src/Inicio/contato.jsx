import React from "react";

import Navbar from "./Componentes/navbar";
import Footer from "./Componentes/footer";
import Contate from "./Componentes05/contato";
import Map from "./Componentes/map";

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