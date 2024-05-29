import React from "react";
import './banner.css';
import '../Responsive/responsive.css';

function Banner() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval= '5000'>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <div className="carousel-img"></div>
          <div class="text-banner">
            <h1 class="carousel-title"><b>Confortabiliade</b></h1>
            <p class="carousel-text">Desfrute da confortabilidade enquanto realçamos sua beleza!!</p>
          </div>
        </div>
        <div class="carousel-item">
        <div className="carousel-img1"></div>
          <div class="text-banner">
            <h1 class="carousel-title"><b>Transformação</b></h1>
            <p class="carousel-text">Aqui, a transformação é mais do que uma mudança, é uma jornada para a sua melhor versão!!</p>
          </div>
        </div>
        <div class="carousel-item">
        <div className="carousel-img2"></div>
          <div class="text-banner">
            <h1 class="carousel-title"><b>Luxo</b></h1>
            <p class="carousel-text">Experimente o luxo em cada detalhe da sua transformação!!</p>
          </div>
        </div>
        <div class="carousel-item">
        <div className="carousel-img3"></div>
          <div class="text-banner">
            <h1 class="carousel-title"><b>Exclusividade</b></h1>
            <p class="carousel-text">Descubra a exclusividade que você merece!!</p>
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default Banner;