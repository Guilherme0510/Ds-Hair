import React from "react";
import "./sobre.css";

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
            <img
              src="../../img/img-sobre.jpg"
              alt="img1"
              className="img-sobre1 img-fluid"
            />
          </div>
          <div className="text-sobre col-md-7 col-12" data-aos="fade-left">
            <div>
              <h3 className="text-center pb-5">
                DS Hair Espaço Mulher: Transformando Beleza, Elevando
                Autoestima.
              </h3>
            </div>
            <p className="text-justify">
              Com mais de 15 anos de experiência, o <b>DS Hair Espaço Mulher</b>{" "}
              é referência em cuidados capilares e unhas, proporcionando mais do
              que estética: oferecemos bem-estar, confiança e renovação. Nosso
              compromisso é entregar um atendimento personalizado, utilizando as
              melhores técnicas e produtos do mercado. <br /> Nossa equipe de
              profissionais altamente capacitados está sempre atualizada com as
              últimas tendências, garantindo resultados impecáveis e um ambiente
              acolhedor. Seja para um novo corte, coloração, alongamento de
              unhas ou aquele momento de autocuidado, estamos aqui para realçar
              a sua beleza e tornar cada visita uma experiência única.
            </p>
          </div>
        </div>
        <div className="row valores text-center">
          <div className="box-valores col-lg-3 col-10" data-aos="flip-left">
            <i className="fa fa-bullseye"></i>
            <h4>Missão</h4>
            <p>
              Proporcionar experiências únicas de beleza e bem-estar, realçando
              a autoestima de nossas clientes por meio de serviços de excelência
              em cuidados capilares e unhas, sempre com inovação, qualidade e
              carinho.
            </p>
          </div>

          <div className="box-valores col-lg-3 col-10" data-aos="flip-up">
            <i className="fa fa-eye"></i>
            <h4>Visão</h4>
            <p>
              Ser referência no setor da beleza, reconhecida pela qualidade dos
              nossos serviços, atendimento diferenciado e compromisso com a
              satisfação de cada cliente, tornando o DS Hair Espaço Mulher um
              sinônimo de confiança e estilo.
            </p>
          </div>

          <div className="box-valores col-lg-3 col-10" data-aos="flip-right">
            <i className="fa fa-heart"></i>
            <h4>Valores</h4>
            <ul className="list-unstyled mt-3">
              <li>
                <strong>🌟 Excelência</strong>{" "}
              </li>
              <li>
                <strong>💖 Atendimento humanizado</strong>{" "}
              </li>
              <li>
                <strong>🤝 Respeito</strong>{" "}
              </li>
              <li>
                <strong>🎨 Paixão pela beleza</strong>
              </li>
              <li>
                <strong>⚖️ Ética e profissionalismo</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
