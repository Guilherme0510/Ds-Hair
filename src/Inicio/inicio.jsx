import React from "react";
import Navbar from "./Componentes/navbar";
import Banner from "./Componentes/banner";
import Servicos from "./Componentes/itens";
import Avaliacao from "./Componentes/avaliacao";
import Map from "./Componentes/map";
import Footer from "./Componentes/footer";

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