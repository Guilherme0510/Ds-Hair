import React from "react";
import './banner.css';

function Banner() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active carrosel marca-carrousel"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="carrosel marca-carrousel"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="carrosel marca-carrousel"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3" class="carrosel marca-carrousel"></li>
      </ol>
      <div class="carousel-inner" id="home">
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
    </div>
  );
}

export default Banner;