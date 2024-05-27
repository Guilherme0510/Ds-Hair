import React, { useState } from "react";
import { Link } from "react-router-dom";
import './itens.css';

const ImageModal01 = ({ onClose }) => {

  return (
    <div className="script-modal over">
            <div className="script-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <br /><br />
                <div>
                    <img src="../../img/img-serv-home1.jpg" alt="" />
                </div>
            </div>
        </div>
  );
}

const ImageModal02 = ({ onClose }) => {

  return (
    <div className="script-modal over">
            <div className="script-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <br /><br />
                <div>
                    <img src="../../img/img-serv-home2.jpg" alt="" />
                </div>
            </div>
        </div>
  );
}

const ImageModal03 = ({ onClose }) => {

  return (
    <div className="script-modal over">
            <div className="script-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <br /><br />
                <div>
                    <img src="../../img/img-serv-home3.jpg" alt="" />
                </div>
            </div>
        </div>
  );
}
function Itens() {

  const [visibleModal01, setVisibleModal01] = useState(false)

  const abrirModal01 = () => {
    setVisibleModal01(true)
  }
  const fecharModal01 = () => {
    setVisibleModal01(false)
  }

  const [visibleModal02, setVisibleModal02] = useState(false)

  const abrirModal02 = () => {
    setVisibleModal02(true)
  }
  const fecharModal02 = () => {
    setVisibleModal02(false)
  }

  const [visibleModal03, setVisibleModal03] = useState(false)

  const abrirModal03 = () => {
    setVisibleModal03(true)
  }
  const fecharModal03 = () => {
    setVisibleModal03(false)
  }

  return (
    <section class="container section-padding pt-5 serv justify-content-center text-light">
      <div>
        <h1 class="text-center"><b>Serviços Oferecidos</b></h1>
      </div>
      <div class="row row-50 pt-5 data-serv">

        <div class="col-md-4 pt-5 text-serv">
          {visibleModal01 && (
            <ImageModal01 onClose={fecharModal01} />
          )}
          <div className="image-container">
            <Link onClick={abrirModal01}> <img src="../../img/img-serv-home1.jpg" alt="" /></Link>
          </div>
          <div>
            <h3 class="pt-4"><b>Cabelo</b></h3>
            <p>Transforme seu visual com cortes modernos e estilosos que refletem sua personalidade única.</p>
          </div>
        </div>
        <div class="col-md-4 pt-5 text-serv">
        {visibleModal02 && (
            <ImageModal02 onClose={fecharModal02} />
          )}
          <div className="image-container">
            <Link onClick={abrirModal02}> <img src="../../img/img-serv-home2.jpg" alt="" /></Link>
          </div>
          <div>
            <h3 class="pt-4"><b>Manicure</b></h3>
            <p>Mãos impecáveis ​​e unhas deslumbrantes - adicione um toque de elegância ao seu dia com nossos serviços de
              manicure profissional.</p>
          </div>
        </div>
        <div class="col-md-4 pt-5 text-serv">
        {visibleModal03 && (
            <ImageModal03 onClose={fecharModal03} />
          )}
          <div className="image-container">
            <Link onClick={abrirModal03}> <img src="../../img/img-serv-home3.jpg" alt="" /></Link>
          </div>
          <div>
            <h3 class="pt-4"><b>Lash Design</b></h3>
            <p>Realce sua beleza natural com cílios deslumbrantes e volumosos - destaque o olhar e deixe uma impressão
              duradoura.</p>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <a href="/servicos" className="btn btn-serv text-white">Veja Mais</a>
      </div>
    </section>
  );
}

export default Itens;