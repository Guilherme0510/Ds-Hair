import React from "react";
import './banner.css';

function Banner() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval = '5000'>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="img/img-banner1.jpg" alt="First slide" />
          <div class="text-banner">
            <h1 class="carousel-title"><b>Confortabiliade</b></h1>
            <p class="carousel-text">Desfrute da confortabilidade enquanto realçamos sua beleza!!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="img/img-banner2.jpg" alt="Second slide" />
          <div class="text-banner">
            <h1 class="carousel-title"><b>Transformação</b></h1>
            <p class="carousel-text">Aqui, a transformação é mais do que uma mudança, é uma jornada para a sua melhor versão!!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="img/img-banner3.jpg" alt="Third slide" />
          <div class="text-banner">
            <h1 class="carousel-title"><b>Luxo</b></h1>
            <p class="carousel-text">Experimente o luxo em cada detalhe da sua transformação!!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="img/img-banner4.jpg" alt="Forth slide" />
          <div class="text-banner">
            <h1 class="carousel-title"><b>Exclusividade</b></h1>
            <p class="carousel-text">Descubra a exclusividade que você merece!!</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  );
}

export default Banner;