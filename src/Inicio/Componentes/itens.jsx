import React from "react";
import { Link } from "react-router-dom";
import './itens.css';

function Itens() {


  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

  return (
    <section>
    <div className ="album py-5"data-aos='fade-down' data-aos-duration='500'>
        <div className ="container">
            <div className ="text-center py-5">
                <h1><i>Serviços Disponíveis</i></h1>
            </div>
            <div className ="row d-flex justify-content-around">
                <div className ="col-10 col-sm-6 col-md-4 mb-4" data-aos='fade-up' data-aos-duration='500' data-aos-delay='200'>
                    <div className ="card">
                        <div className ="img-container"></div>
                        <div className ="card-body text-serv">
                            <h4 className ="pb-1">Cabelo / Penteados</h4>
                            <p className ="card-text pb-2">Transforme seu visual com um corte e estilo impecáveis.</p>
                            <div className ="text-center">
                                <Link to="/servicos-cabelo" onClick={scrollToTop} className ="btn-serv btn">Saiba Mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="col-10 col-sm-6 col-md-4 mb-4"data-aos='fade-up' data-aos-duration='500' data-aos-delay='400'>
                    <div className ="card">
                        <div className ="img-container01"></div>
                        <div className ="card-body text-serv">
                            <h4 className ="pb-1">Manicure / Pedicure</h4>
                            <p className ="card-text pb-2">Deixe suas unhas perfeitas com nossa manicure profissional.</p>
                            <div className ="text-center">
                                <Link to="/servicos-unha" onClick={scrollToTop} className ="btn-serv btn">Saiba Mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="col-10 col-sm-6 col-md-4 mb-4"data-aos='fade-up' data-aos-duration='500' data-aos-delay='600'>
                    <div className ="card">
                        <div className ="img-container02"></div>
                        <div className ="card-body text-serv">
                            <h4 className ="pb-1">Lash Design / Sobrancelha</h4>
                            <p className ="card-text pb-2">Realce seu olhar com nosso design de cílios e sobrancelhas.</p>
                            <div className ="text-center">
                                <Link to="/servicos-lash_sobrancelha" onClick={scrollToTop} className ="btn-serv btn">Saiba Mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



  );
}

export default Itens;