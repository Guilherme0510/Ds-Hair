import React, { useState } from 'react';
import './avaliacao.css';

const slides = [
    {
        name: "Ana",
        job: "Silva",
        image: "img/profile-1.jpg",
        info: "Eu adorei minha experiência no salão! A cabeleireira foi super atenciosa e ouviu exatamente o que eu queria. O corte ficou perfeito e o tratamento deixou meu cabelo macio e brilhante. Senti-me muito bem cuidada e com certeza voltarei mais vezes. Obrigada por me fazer sentir tão especial!"
    },
    {
        name: "Clara",
        job: "Moraes",
        image: "img/profile-2.jpg",
        info: "Simplesmente amei minhas unhas novas! A manicure foi extremamente cuidadosa e detalhista, e o ambiente do salão é super acolhedor. Foi um momento de relaxamento que eu realmente precisava. Minhas unhas ficaram lindas e a durabilidade do esmalte é ótima. Mal posso esperar para voltar na próxima semana!"
    }, {
        name: "Mariana",
        job: "Souza",
        image: "img/profile-3.jpg",
        info: "Eu não poderia estar mais feliz com meu novo visual! A cabeleireira foi maravilhosa, escutou todas as minhas preocupações e me deu ótimas sugestões. O resultado foi um corte moderno que combinou perfeitamente com meu estilo. Além disso, o ambiente do salão é super acolhedor. Obrigada por transformar meu dia e meu cabelo!"
    },
    {
        name: "Sofia",
        job: "Santos",
        image: "img/profile-4.jpg",
        info: "Estou apaixonada pelas minhas novas extensões de cílios! A lash designer foi incrível, explicou todo o processo e me deixou super confortável. O resultado ficou muito natural e realçou ainda mais meu olhar. Estou muito satisfeita e recomendo para todas as minhas amigas. Um trabalho impecável!"
    },
];

function Avaliacao() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const { name, job, image, info } = slides[currentSlideIndex];

    return (
        <section className="section-padding pt-5 avaliacao" data-aos='fade-left' data-aos-duration='500'>
            <div className="container">
                <div className='text-center py-5'>
                <h1><i>O que elas andam dizendo?</i></h1>
                </div>
                <div className="slider">
                    <div className="profile">
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <h6>{job}</h6>
                    </div>
                    <p>{info}</p>
                    <button id="prev" className='btn-avalia' onClick={prevSlide}><i className ="fa fa-arrow-left"></i></button>
                    <button id="next" className='btn-avalia' onClick={nextSlide}><i className ="fa fa-arrow-right"></i></button>
                </div>
            </div>
        </section>
    );
}

export default Avaliacao;