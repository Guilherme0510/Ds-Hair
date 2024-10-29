import React from "react";
import './sobre.css';

function Sobre() {
    return (
        <section className="">
            <div className="bg-sobre" data-aos="fade-down">
                <div className="overlay"></div>
                <h1 className="text-center">Quem somos?</h1>
            </div>
            <div className="container py-3">
                <div className="titulo-caixa text-center" data-aos="fade-up">
                    <h2 className="text-center py-4 mb-5">Sobre Nós</h2>
                </div>
                <div className="row dados-sobre">
                    <div className="img-sobre col-md-5 col-12" data-aos="fade-right">
                        <img src="../../img/img-sobre.jpg" alt="img1" className="img-sobre1 img-fluid" />
                    </div>
                    <div className="text-sobre col-md-7 col-12" data-aos="fade-left">
                        <div>
                            <h3 className="text-center pb-5">Desvendando o Encanto do DS Hair: Uma Jornada de Beleza e Autodescoberta.</h3>
                        </div>
                        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sed natus saepe maiores...</p>
                    </div>
                </div>
                <div className="row valores text-center">
                    <div className="box-valores col-lg-3 col-10" data-aos="flip-left">
                        <i className="fa fa-bullseye"></i>
                        <h4>Missão</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                    </div>
                    <div className="box-valores col-lg-3 col-10" data-aos="flip-up">
                        <i className="fa fa-eye"></i>
                        <h4>Visão</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                    </div>
                    <div className="box-valores col-lg-3 col-10" data-aos="flip-right">
                        <i className="fa fa-heart"></i>
                        <h4>Valores</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
