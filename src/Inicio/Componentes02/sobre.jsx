import React from "react";
import './sobre.css';

function Sobre() {
    return (
        <section className="">
            <div className="bg-sobre">
                <div className="overlay"></div>
                <h1 className="text-center">Quem somos?</h1>
            </div>
            <div className="container py-3">
                <div className="titulo-caixa text-center">
                    <h2 className="text-center py-4 mb-5">Sobre Nós</h2>
                </div>
                <div className="row dados-sobre">
                    <div className="img-sobre col-md-5 col-12">
                        <img src="../../img/img-sobre.jpg" alt="img1" className="img-sobre1 img-fluid" />
                        {/* <img src="../../img/img-sobre2.jpg" alt="img2" className="img-sobre2 img-fluid" /> */}
                    </div>
                    <div className="text-sobre col-md-7 col-12">
                        <div>
                            <h3 className="text-center pb-5">Desvendando o Encanto do DS Hair: Uma Jornada de Beleza e Autodescoberta.</h3>
                        </div>
                        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sed natus saepe maiores, quos id laboriosam mollitia ipsum. Vel in veritatis voluptates iusto tempore exercitationem unde pariatur est obcaecati facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maxime cumque eveniet aut nesciunt incidunt iure error omnis amet esse. Debitis, aut quisquam? Accusamus repellendus dolor enim quidem reprehenderit temporibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa deserunt neque, quasi corrupti explicabo ad! Itaque cum corrupti quaerat, ipsam odio alias reiciendis iure voluptate atque, exercitationem voluptates labore maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, laborum? Minus necessitatibus nam quaerat. Adipisci minus, corporis ipsam earum minima, repellendus vero, omnis expedita temporibus laborum nesciunt. Harum, tenetur nam!</p>
                    </div>
                </div>
                <div className="row valores text-center">
                    <div className="box-valores col-lg-3 col-10">
                        <i className ="fa fa-bullseye"></i>
                        <h4>Missão</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sit laboriosam sed omnis consequatur rem id delectus corrupti dolorem necessitatibus, iusto quisquam. Expedita dolorem, reiciendis quisquam aut minus non reprehenderit?</p>
                    </div>
                    <div className="box-valores col-lg-3 col-10">
                        <i className ="fa fa-eye"></i>
                        <h4>Visão</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sit laboriosam sed omnis consequatur rem id delectus corrupti dolorem necessitatibus, iusto quisquam. Expedita dolorem, reiciendis quisquam aut minus non reprehenderit?</p>
                    </div>
                    <div className="box-valores col-lg-3 col-10">
                        <i className ="fa fa-heart"></i>
                        <h4>Valores</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sit laboriosam sed omnis consequatur rem id delectus corrupti dolorem necessitatibus, iusto quisquam. Expedita dolorem, reiciendis quisquam aut minus non reprehenderit?</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;