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
    <section class="">
      <div class="album py-5">
        <div class="container">
          <div className="text-center py-5">
            <h1><i>Serviços Disponíveis</i></h1>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card">
                <div className="img-container">
                </div>
                <div class="card-body text-serv">
                  <h4 className="pb-1">Cabelo / Penteados</h4>
                  <p class="card-text pb-2">Transforme seu visual com um corte e estilo impecáveis.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="">
                      <Link to={'/servicos-cabelo'} onClick={scrollToTop} className="btn-serv btn">Saiba Mais</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="img-container01">
                </div>
                <div class="card-body text-serv">
                  <h4 className="pb-1">Manicure / Pedicure</h4>
                  <p class="card-text pb-2">Deixe suas unhas perfeitas com nossa manicure profissional.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="">
                      <Link to={'/servicos-unha'} onClick={scrollToTop} className="btn-serv btn">Saiba Mais</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div className="img-container02">
                </div>
                <div class="card-body text-serv">
                  <h4 className="pb-1">Lash Design / Sobrancelha</h4>
                  <p class="card-text pb-2">Realce seu olhar com nosso design de cílios e sobrancelhas.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="">
                      <Link to={'/servicos-lash_sobrancelha'} onClick={scrollToTop} className="btn-serv btn">Saiba Mais</Link>
                    </div>
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