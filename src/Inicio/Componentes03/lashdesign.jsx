import React from "react";
import "./lashdesign.css";
import { Link } from "react-router-dom";

function LashDesign() {

    return (
        <section className="text-light container py-5 manicure">
            <Link to={'/servicos'} className="btn btn-voltar"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <div className="text-center header-manicure">
                <h1>Escolha um serviço</h1>
                <p>Nesta página, você pode escolher entre os serviços de lash design e design de sobrancelha que oferecemos. Apresentamos uma lista completa de opções para realçar a beleza dos seus olhos e sobrancelhas, incluindo técnicas especializadas para criar o visual desejado.</p>
            </div>
            <div className="row itens-manicure">
                <div className="item-manicure">
                    <img src="../../../img/icon-sobrancelha.png" alt="" />
                    <h4>Design de Sobrancelha</h4>
                    <p>Dê às suas mãos o cuidado e o estilo que elas merecem com nossos serviços de manicure de qualidade."</p>
                    <Link to={'https://wa.link/geffrm'} className="saiba-mais btn btn-primary">Saiba Mais</Link>
                </div>
                <div className="item-manicure">
                    <img src="../../../img/icon-henna.png" alt="" />
                    <h4>Design de Sobrancelha com Henna</h4>
                    <p>Proporcione aos seus pés o conforto e a beleza que os destacam, com nossos serviços de pedicure especializados.</p>
                    <Link to={'https://wa.link/da0znz'} className="saiba-mais btn btn-primary">Saiba Mais</Link>
                </div>
                <div className="item-manicure">
                    <img src="../../../img/icon-lash.png" alt="" />
                    <h4>Lash Design</h4>
                    <p>Aumente sua confiança e sofisticação com nossos serviços de alongamento de unhas, criando um visual deslumbrante e duradouro.</p>
                    <Link to={'https://wa.link/3oxdpg'} className="saiba-mais btn btn-primary">Saiba Mais</Link>
                </div>
            </div>
        </section>

    );
}

export default LashDesign;