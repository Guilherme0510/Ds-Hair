import { Link } from 'react-router-dom';
import React from "react";
import './blog.css';
import '../Responsive/responsive.css';

function BlogInicio() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section>
            <div className="bg-blog">
                <div className="overlay"></div>
                <h1 className="text-center">Blog</h1>
            </div>
            <div className="container">
                <div className='head-blog text-center'>
                    <h1>Nosso Blog</h1>
                    <p>Nosso blog é o seu guia definitivo para descobrir as últimas tendências de beleza, dicas de cuidados capilares e atualizações sobre os serviços oferecidos em nosso salão. Explore conosco e descubra como realçar sua beleza e bem-estar!</p>
                </div>
                <div className="blog ">
                    <div className="item-blog ">
                        <div className='img-blog'>
                            <img src="../../../../img/img-bg-blog02.png" alt="" />
                        </div>
                        <div className='content-blog'>
                            <div className='text-blog'>
                                <h3 className='color-black'>Microblading e Micropigmentação: Qual a Melhor Opção para Você?</h3>
                                <p className='color-black'>Explore as técnicas de sobrancelhas: microblading vs. micropigmentação para um visual impecável em 2024 [...]</p>
                                <Link to={'/blog/post04'} className='btn btn-blog' onClick={scrollToTop}>Ver Sobre</Link>
                            </div>
                            <div className='footer-blog'>
                                <p className='color-black'><i class="fa fa-calendar"></i>22/05/2024</p>
                                <p className='color-black'><i class="fa fa-user"></i>Postado por <b>Daniela da Silva</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="item-blog ">
                        <div className='img-blog'>
                            <img src="../../../../img/img-bg-blog03.png" alt="" />
                        </div>
                        <div className='content-blog'>
                            <div className='text-blog'>
                                <h3 className='color-black'>Guia Completo de Extensões de Cílios: Tipos, Cuidados e Benefícios!</h3>
                                <p className='color-black'>Descubra o mundo das extensões de cílios: tipos, cuidados e como realçar seu olhar em 2024 [...]</p>
                                <Link to={'/blog/post03'} className='btn btn-blog' onClick={scrollToTop}>Ver Sobre</Link>
                            </div>
                            <div className='footer-blog'>
                                <p className='color-black'><i class="fa fa-calendar"></i>22/05/2024</p>
                                <p className='color-black'><i class="fa fa-user"></i>Postado por <b>Daniela da Silva</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog ">
                    <div className="item-blog ">
                        <div className='img-blog01'>
                            <img src="../../../../img/img-bg-blog.png" alt="" />
                        </div>
                        <div className='content-blog'>
                            <div className='text-blog'>
                                <h3 className='color-black'>Tendências de Cortes e Colorações para o Verão de 2024!</h3>
                                <p className='color-black'>Descubra as tendências de cortes e colorações para o verão de 2024 e transforme seu visual [...]</p>
                                <Link to={'/blog/post02'} className='btn btn-blog' onClick={scrollToTop}>Ver Sobre</Link>
                            </div>
                            <div className='footer-blog'>
                                <p className='color-black'><i class="fa fa-calendar"></i>22/05/2024</p>
                                <p className='color-black'><i class="fa fa-user"></i>Postado por <b>Daniela da Silva</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="item-blog ">
                        <div className='img-blog'>
                            <img src="../../../../img/img-bg-blog01.png" alt="" />
                        </div>
                        <div className='content-blog'>
                            <div className='text-blog'>
                                <h3 className='color-black'>Os desenhos e técnicas de nail art que estão bombando em 2024!</h3>
                                <p className='color-black'>Explore as tendências e técnicas mais populares de nail art para o ano de 2024 [...]</p>
                                <Link to={'/blog/post01'} className='btn btn-blog' onClick={scrollToTop}>Ver Sobre</Link>
                            </div>
                            <div className='footer-blog'>
                                <p className='color-black'><i class="fa fa-calendar"></i>22/05/2024</p>
                                <p className='color-black'><i class="fa fa-user"></i>Postado por <b>Daniela da Silva</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default BlogInicio;