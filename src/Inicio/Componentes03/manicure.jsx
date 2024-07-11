import React from "react";
import "./manicure.css";
import { Link } from "react-router-dom";

function Manicure() {

    return (
        <section className="text-light container py-5 manicure">
            <Link to={'/servicos'} className="btn btn-voltar"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <div className="text-center header-manicure">
                <h1>Escolha um serviço</h1>
                <p>Nesta página, você pode selecionar o serviço de unha que melhor atenda às suas necessidades. Apresentamos uma lista completa de todos os serviços de manicure disponíveis, incluindo os mais procurados. Caso precise de um serviço de unha personalizado, por favor, entre em contato conosco.</p>
                <br />
                <small className="text-dark ">Caso queira saber mais clique em cima do ícone</small>
            </div>
            <div className="row itens-manicure">
                <div className="item-manicure">
                    <img src="../../../img/icon-mao.png" alt="" />
                    <h4>Manicure</h4>
                    <p>Dê às suas mãos o cuidado e o estilo que elas merecem com nossos serviços de manicure de qualidade."</p>
                    <Link to={'https://wa.link/1x2vpj'} className="saiba-mais btn btn-primary">Agende já</Link>
                </div>
                <div className="item-manicure">
                    <img src="../../../img/icon-pe.png" alt="" />
                    <h4>Pedicure</h4>
                    <p>Proporcione aos seus pés o conforto e a beleza que os destacam, com nossos serviços de pedicure especializados.</p>
                    <Link to={'https://wa.link/v85zot'} className="saiba-mais btn btn-primary">Agende já</Link>
                </div>
                <div className="item-manicure">
                    <img src="../../../img/icon-alongamento.png" alt="" />
                    <h4>Alongamento de Unha</h4>
                    <p>Aumente sua confiança e sofisticação com nossos serviços de alongamento de unhas, criando um visual deslumbrante e duradouro.</p>
                    <Link to={'https://wa.link/2984sk'} className="saiba-mais btn btn-primary">Agende já</Link>
                </div>
            </div>
        </section>

    );
}

export default Manicure;