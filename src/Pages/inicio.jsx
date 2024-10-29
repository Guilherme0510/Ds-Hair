import React from "react";
import Navbar from "../Inicio/Componentes/navbar";
import Banner from "../Inicio/Componentes/banner";
import Servicos from "../Inicio/Componentes/itens";
import Avaliacao from "../Inicio/Componentes/avaliacao";
import Map from "../Inicio/Componentes/map";
import Footer from "../Inicio/Componentes/footer";

function Site() {
    return ( <div>
        <Navbar/>
        <Banner/>
        <Servicos/>
        <Avaliacao/>
        <Map/>
        <Footer/>
        </div>
    )
}

export default Site;