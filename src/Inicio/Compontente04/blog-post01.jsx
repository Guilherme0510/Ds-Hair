import React from "react";
import './post.css';
import { Link } from "react-router-dom";

function BlogPost01() {

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
                <img src="../../../../img/img-bg-blog01.png" alt="Imagem de nail art com designs e técnicas modernas" />
                <div className="title-head-post">
                    <h2 className="text-center">Os desenhos e técnicas de nail art que estão bombando em 2024!</h2>
                </div>
            </article>
            <div className="content-post">
                <div className="text-center text-post">
                    <p>A nail art continua a evoluir, trazendo inovações e tendências empolgantes para quem ama cuidar das unhas. Em 2024, os salões de beleza e artistas de unhas estão adotando novas técnicas e desenhos que prometem transformar suas unhas em verdadeiras obras de arte. Confira as principais tendências que estão fazendo sucesso este ano:</p>
                    <h4>Minimalismo Geométrico</h4>
                    <p>Os desenhos minimalistas com formas geométricas estão em alta. Linhas finas, triângulos, círculos e quadrados em cores contrastantes ou tons neutros criam um visual elegante e moderno.</p>
                    <h4>Efeito Chromado</h4>
                    <p>As unhas cromadas retornam com força total, proporcionando um acabamento espelhado que chama atenção.</p>
                    <h4>Unhas Degradê (Ombré)</h4>
                    <p>A técnica de ombré, que cria um gradiente suave entre duas ou mais cores, continua a ser uma das preferidas.</p>
                    <h4>Texturas e Aplicações 3D</h4>
                    <p>As unhas com texturas e aplicações tridimensionais estão ganhando popularidade.</p>
                    <h4>Francesinha Invertida</h4>
                    <p>A tradicional francesinha ganhou uma nova versão com a francesinha invertida.</p>
                    <h4>Arte Abstrata</h4>
                    <p>Desenhos abstratos com pinceladas livres e formas irregulares estão em alta.</p>
                    <h4>Unhas Naturais com Toque de Cor</h4>
                    <p>Para quem prefere um visual mais discreto, as unhas naturais com um toque sutil de cor estão em evidência.</p>
                    <h4>Motivos Florais</h4>
                    <p>Os motivos florais aparecem com um toque mais artístico e detalhado.</p>
                    <p>Essas tendências de nail art de 2024 estão redefinindo o que significa ter unhas decoradas. Aproveite essas inspirações para dar um up no seu visual!</p>
                </div>
            </div>
        </section>
    );
}

export default BlogPost01;
