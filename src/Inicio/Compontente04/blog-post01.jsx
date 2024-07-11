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
            <Link to={'/blog'} className="btn btn-voltar" onClick={scrollToTop}><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <div className="head-post">
                <img src="../../../../img/img-bg-blog01.png" alt="" />
                <div className="title-head-post">
                    <h2 className="text-center">Os desenhos e técnicas de nail art que estão bombando em 2024!</h2>
                </div>
            </div>
            <div className="content-post ">
                <div className="text-center text-post">
                    <p className="">A nail art continua a evoluir, trazendo inovações e tendências empolgantes para quem ama cuidar das unhas. Em 2024, os salões de beleza e artistas de unhas estão adotando novas técnicas e desenhos que prometem transformar suas unhas em verdadeiras obras de arte. Confira as principais tendências que estão fazendo sucesso este ano:</p>

                    <h4>Minimalismo Geométrico</h4>
                    <p>Os desenhos minimalistas com formas geométricas estão em alta. Linhas finas, triângulos, círculos e quadrados em cores contrastantes ou tons neutros criam um visual elegante e moderno. Esta tendência é perfeita para quem busca uma estética limpa e sofisticada.</p>

                    <h4>Efeito Chromado</h4>
                    <p>As unhas cromadas retornam com força total, proporcionando um acabamento espelhado que chama atenção. Disponíveis em diversas cores, desde os clássicos prateado e dourado até tons mais ousados como azul e roxo, esse efeito dá um toque futurista às unhas.</p>

                    <h4>Unhas Degradê (Ombré)</h4>
                    <p>A técnica de ombré, que cria um gradiente suave entre duas ou mais cores, continua a ser uma das preferidas. Em 2024, as combinações de cores inusitadas e os efeitos brilhantes são as escolhas da vez, resultando em unhas que se destacam pela sua beleza e originalidade.</p>

                    <h4>Texturas e Aplicações 3D</h4>
                    <p>As unhas com texturas e aplicações tridimensionais estão ganhando popularidade. Isso inclui o uso de pedras, pérolas, correntes e adesivos que adicionam uma dimensão extra ao design das unhas. Essa tendência é ideal para quem gosta de ousar e se destacar.</p>

                    <h4>Francesinha Invertida</h4>
                    <p>A tradicional francesinha ganhou uma nova versão com a francesinha invertida, onde a ponta da unha recebe uma cor contrastante ou um design diferenciado. Esta técnica proporciona um visual chic e contemporâneo, ideal para diversas ocasiões.</p>

                    <h4>Arte Abstrata</h4>
                    <p>Desenhos abstratos com pinceladas livres, manchas de tinta e formas irregulares estão em alta. Essa tendência permite muita criatividade e personalização, resultando em unhas únicas que refletem a personalidade de quem as usa.</p>

                    <h4>Unhas Naturais com Toque de Cor</h4>
                    <p>Para quem prefere um visual mais discreto, as unhas naturais com um toque sutil de cor estão em evidência. A aplicação de tons pastel ou neutros em detalhes como pontas, bordas ou pequenas figuras trazem delicadeza e elegância às unhas.</p>

                    <h4>Motivos Florais</h4>
                    <p>Os motivos florais nunca saem de moda, mas em 2024, eles aparecem com um toque mais artístico e detalhado. Flores pintadas à mão, com nuances realistas e combinações de cores vibrantes, tornam as unhas uma verdadeira celebração da natureza.</p>

                    <p>Essas tendências de nail art de 2024 estão redefinindo o que significa ter unhas decoradas. Seja você fã de um estilo mais discreto ou adora ousar com designs vibrantes e inovadores, há algo para todos experimentarem e se divertirem. Aproveite essas inspirações para dar um up no seu visual e deixar suas unhas sempre na moda!</p>
                </div>
            </div>
        </section>

    );
}

export default BlogPost01;