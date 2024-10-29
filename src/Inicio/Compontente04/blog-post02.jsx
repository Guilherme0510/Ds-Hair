import React from "react";
import './post.css';
import { Link } from "react-router-dom";

function BlogPost02() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return (
        <section className="container">
            <Link to={'/blog'} className="btn btn-voltar" onClick={scrollToTop} aria-label="Voltar para o blog">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <article className="head-post" data-aos="fade-up">
                <img src="../../../../img/img-bg-blog.png" alt="Imagem ilustrativa de cortes e colorações de cabelo para o verão de 2024" />
                <h2 className="text-center">Tendências de Cortes e Colorações para o Verão de 2024!</h2>
            </article>
            <div className="content-post">
                <div className="text-center text-post">
                    <p>O mundo dos cabelos está sempre em evolução, trazendo inovações e tendências empolgantes para quem ama mudar o visual. Em 2024, os salões de beleza e estilistas estão adotando novas técnicas e estilos que prometem transformar seus cabelos em verdadeiras obras de arte. Confira as principais tendências que estão fazendo sucesso este ano:</p>

                    <h4>Cortes Curtos e Texturizados</h4>
                    <p>Os cortes curtos estão em alta, com uma ênfase especial na textura. Penteados como o pixie cut e o bob texturizado oferecem um visual moderno e despojado, perfeito para o verão.</p>

                    <h4>Long Bob com Camadas</h4>
                    <p>O long bob continua a ser um favorito, mas agora com camadas sutis que adicionam movimento e volume.</p>

                    <h4>Franjas Desfiadas</h4>
                    <p>As franjas estão de volta, especialmente as desfiadas e desconectadas, trazendo um ar jovem e moderno.</p>

                    <h4>Cores Vibrantes e Fantasia</h4>
                    <p>Para quem gosta de ousar, as cores fantasia estão dominando o verão de 2024.</p>

                    <h4>Luzes e Reflexos Naturais</h4>
                    <p>Técnicas como balayage e babylights proporcionam um efeito iluminado e suave.</p>

                    <h4>Tons Pastel</h4>
                    <p>Os tons pastel estão em alta, trazendo um toque delicado e romântico.</p>

                    <h4>Raiz Esfumada</h4>
                    <p>A técnica de raiz esfumada cria uma transição suave entre a cor natural e a coloração.</p>

                    <h4>Cortes Assimétricos</h4>
                    <p>Os cortes assimétricos oferecem um visual moderno e ousado.</p>

                    <p>Essas tendências de cortes e colorações para o verão de 2024 estão redefinindo o que significa ter um cabelo estiloso e moderno. Aproveite essas inspirações para dar um up no seu visual e manter seus cabelos sempre na moda!</p>
                </div>
            </div>
        </section>
    );
}

export default BlogPost02;
