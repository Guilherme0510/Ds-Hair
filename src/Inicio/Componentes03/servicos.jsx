import React from "react";
import './servicos.css';
import { Link } from "react-router-dom";
import '../Responsive/responsive.css';


function Servicos() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className="sc-text">
            <div className="bg-serv">
                <div className="overlay"></div>
                <h1 className="text-center">Serviços</h1>
            </div>
            <div className="container">
                <div className="serv-head section-padding">
                    <h1 className="text-center"><i>Nossos Serviços</i></h1>
                    <p>DS Hair oferece cortes, colorações, tratamentos e penteados para mulheres. <br /> Nossa equipe experiente está aqui para realçar sua beleza. Visite-nos e saia confiante.</p>
                </div>
                <div className="serv-types">
                    <div className="serv-type-item">
                        <div className="serv-type-img">
                            <img src="../../../../img/img-serv-type1.png" alt="" className="" />
                        </div>
                        <div className="serv-type-text">
                            <h2 className="pb-5"><i>Cabelo</i></h2>
                            <p>Em nosso salão, oferecemos serviços de cabelo excepcionais que vão além do comum. Nossos profissionais garantem uma experiência de revitalização completa, adaptada às suas necessidades.</p>
                            <Link onClick={scrollToTop} className="btn btn-primary btn-serv-mais" to={'/servicos-cabelo'}>Saiba Mais</Link>
                        </div>
                    </div>
                    <div className="serv-type-item-left ">
                        <div className="serv-type-text">
                            <h2 className="pb-5"><i>Unha</i></h2>
                            <p>Em nosso espaço de manicure, oferecemos serviços excepcionais que vão além do tradicional. Nossas profissionais garantem uma experiência completa, adaptada às suas preferências.</p>
                            <Link onClick={scrollToTop} to={'/servicos-unha'} className="btn btn-primary btn-serv-mais">Saiba Mais</Link>
                        </div>
                        <img src="../../../../img/img-serv-type2.png" alt="" />
                    </div>
                    <div className="serv-type-item">
                        <img src="../../../../img/img-serv-type3.png" alt="" />
                        <div className="serv-type-text">
                            <h2 className="pb-5"><i>Lash Design / Sobrancelha</i></h2>
                            <p>Não apenas realçamos a beleza natural de seus olhos com nosso serviço de lash design, mas também aprimoramos suas sobrancelhas para complementar sua aparência de maneira elegante e sofisticada.</p>
                            <Link onClick={scrollToTop} to={'/servicos-lash_sobrancelha'} className="btn btn-primary btn-serv-mais">Saiba Mais</Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default Servicos;