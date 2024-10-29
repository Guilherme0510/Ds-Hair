import React from "react";
import './post.css';
import { Link } from "react-router-dom";

function BlogPost03() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className="container">
            <Link to={'/blog'} className="btn btn-voltar" onClick={scrollToTop} aria-label="Voltar para o blog">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <article className="head-post">
                <img src="../../../../img/img-bg-blog03.png" alt="Imagem ilustrativa de extensões de cílios aplicadas em um modelo" />
                <h2 className="text-center">Guia Completo de Extensões de Cílios: Tipos, Cuidados e Benefícios!</h2>
            </article>
            <div className="content-post">
                <div className="text-center text-post">
                    <p>As extensões de cílios continuam a ganhar popularidade, oferecendo uma maneira prática e eficaz de realçar a beleza natural dos olhos. Se você está pensando em investir nesse procedimento, confira este guia completo sobre os tipos de extensões de cílios, cuidados necessários e os benefícios que elas proporcionam.</p>

                    <h2>Tipos de Extensões de Cílios</h2>
                    <ul>
                        <li>
                            <h4>Extensões Clássicas</h4>
                            <p>Ideais para um look natural e elegante.</p>
                        </li>
                        <li>
                            <h4>Extensões Volume Russo</h4>
                            <p>Perfeitas para um visual volumoso e dramático.</p>
                        </li>
                        <li>
                            <h4>Extensões Híbridas</h4>
                            <p>Combinação da técnica clássica e volume russo.</p>
                        </li>
                        <li>
                            <h4>Cores Vibrantes e Fantasia</h4>
                            <p>Ótimas para quem gosta de se destacar.</p>
                        </li>
                    </ul>

                    <h2>Cuidados com as Extensões de Cílios</h2>
                    <ul>
                        <li>
                            <h4>Evite Água nas Primeiras 24 Horas</h4>
                            <p>Permita que a cola seque completamente.</p>
                        </li>
                        <li>
                            <h4>Não Use Produtos Oleosos</h4>
                            <p>Opte por produtos à base de água para não comprometer a cola.</p>
                        </li>
                        <li>
                            <h4>Seja Delicada</h4>
                            <p>Evite esfregar os olhos.</p>
                        </li>
                        <li>
                            <h4>Escove os Cílios Diariamente</h4>
                            <p>Use uma escovinha própria para mantê-los alinhados.</p>
                        </li>
                    </ul>

                    <h2>Benefícios das Extensões de Cílios</h2>
                    <ul>
                        <li>
                            <h4>Aparência Natural e Realçada</h4>
                        </li>
                        <li>
                            <h4>Economia de Tempo</h4>
                        </li>
                        <li>
                            <h4>Versatilidade de Estilos</h4>
                        </li>
                        <li>
                            <h4>Conforto e Leveza</h4>
                        </li>
                        <li>
                            <h4>Longa Duração</h4>
                        </li>
                    </ul>

                    <p>As extensões de cílios são uma excelente maneira de realçar a beleza natural e simplificar a rotina de maquiagem. Experimente e descubra como as extensões de cílios podem transformar seu visual!</p>
                </div>
            </div>
        </section>
    );
}

export default BlogPost03;
