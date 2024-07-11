import React from "react";
import './banner.css';

function Banner() {
    return (


        <div id="carouselExampleInterval" className ="carousel slide" data-bs-ride="carousel">
        <div className ="carousel-inner">
            <div className ="carousel-item active" data-bs-interval="10000">
                <div className ="carousel-img"></div>
                <div className ="text-banner">
                    <h1 className ="carousel-title"><b>Confortabilidade</b></h1>
                    <p className ="carousel-text">Desfrute da confortabilidade enquanto realçamos sua beleza!!</p>
                </div>
            </div>
            <div className ="carousel-item" data-bs-interval="2000">
                <div className ="carousel-img1"></div>
                <div className ="text-banner">
                    <h1 className ="carousel-title"><b>Transformação</b></h1>
                    <p className ="carousel-text">Aqui, a transformação é mais do que uma mudança, é uma jornada para a sua melhor versão!!</p>
                </div>
            </div>
            <div className ="carousel-item">
                <div className ="carousel-img2"></div>
                <div className ="text-banner">
                    <h1 className ="carousel-title"><b>Luxo</b></h1>
                    <p className ="carousel-text">Experimente o luxo em cada detalhe da sua transformação!!</p>
                </div>
            </div>
            <div className ="carousel-item">
                <div className ="carousel-img3"></div>
                <div className ="text-banner">
                    <h1 className ="carousel-title"><b>Exclusividade</b></h1>
                    <p className ="carousel-text">Descubra a exclusividade que você merece!!</p>
                </div>
            </div>
        </div>
        <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className ="visually-hidden">Previous</span>
        </button>
        <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className ="carousel-control-next-icon" aria-hidden="true"></span>
            <span className ="visually-hidden">Next</span>
        </button>
    </div>
    

    );
}

export default Banner;