import React from "react";
import './post.css';
import '../Responsive/responsive.css'
import { Link } from "react-router-dom";

function BlogPost02() {
    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        });
    };
    return (

        <section className="container">
            <Link to={'/blog'} className="btn btn-voltar" onClick={scrollToTop}><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <div className="head-post">
                <img src="../../../../img/img-bg-blog.png" alt="" />
                <h2 className="text-center">Tendências de Cortes e Colorações para o Verão de 2024!</h2>
            </div>
            <div className="content-post ">
                <div className="text-center text-post">
                    <p className="">O mundo dos cabelos está sempre em evolução, trazendo inovações e tendências empolgantes para quem ama mudar o visual. Em 2024, os salões de beleza e estilistas estão adotando novas técnicas e estilos que prometem transformar seus cabelos em verdadeiras obras de arte. Confira as principais tendências que estão fazendo sucesso este ano:</p>

                    <h4>Cortes Curtos e Texturizados</h4>
                    <p>Os cortes curtos estão em alta, com uma ênfase especial na textura. Penteados como o pixie cut e o bob texturizado oferecem um visual moderno e despojado, perfeito para o verão. Estes cortes são ideais para quem busca praticidade sem perder o estilo.</p>

                    <h4>Long Bob com Camadas</h4>
                    <p>O long bob continua a ser um favorito, mas agora com camadas sutis que adicionam movimento e volume. Este corte versátil é ótimo para quem deseja um comprimento médio com um toque de sofisticação e dinamismo.</p>

                    <h4>Franjas Desfiadas</h4>
                    <p>As franjas estão de volta, especialmente as desfiadas e desconectadas. Elas trazem um ar jovem e moderno, podendo ser combinadas com diversos tipos de cortes, desde os curtos até os longos, adicionando personalidade ao visual.</p>

                    <h4>Cores Vibrantes e Fantasia</h4>
                    <p>Para quem gosta de ousar, as cores fantasia estão dominando o verão de 2024. Tons como azul elétrico, roxo intenso, rosa neon e verde esmeralda são escolhas populares. Essas colorações vibrantes são perfeitas para quem quer se destacar e expressar sua individualidade.</p>

                    <h4>Luzes e Reflexos Naturais</h4>
                    <p>Para aqueles que preferem um look mais sutil, as luzes e reflexos naturais continuam a ser uma tendência forte. Técnicas como balayage e babylights proporcionam um efeito iluminado e suave, imitando os reflexos naturais do sol no cabelo.</p>

                    <h4>Tons Pastel</h4>
                    <p>Os tons pastel estão em alta, trazendo um toque delicado e romântico para o verão. Cores como lavanda, rosa bebê, azul céu e menta são escolhas populares, oferecendo uma alternativa suave e encantadora às cores mais vibrantes.</p>

                    <h4>Raiz Esfumada</h4>
                    <p>A técnica de raiz esfumada está ganhando popularidade por sua capacidade de criar uma transição suave entre a cor natural do cabelo e a coloração. Essa técnica é perfeita para quem deseja um look mais natural e de baixa manutenção.</p>

                    <h4>Cortes Assimétricos</h4>
                    <p>Os cortes assimétricos estão em alta, proporcionando um visual moderno e ousado. Estes cortes, com comprimentos diferentes de cada lado, oferecem uma abordagem inovadora e dinâmica ao estilo tradicional.</p>

                    <p>Essas tendências de cortes e colorações para o verão de 2024 estão redefinindo o que significa ter um cabelo estiloso e moderno. Seja você fã de um estilo mais discreto ou adora ousar com cores vibrantes e cortes inovadores, há algo para todos experimentarem e se divertirem. Aproveite essas inspirações para dar um up no seu visual e manter seus cabelos sempre na moda!</p>
                </div>
            </div>
        </section>

    );
}

export default BlogPost02;