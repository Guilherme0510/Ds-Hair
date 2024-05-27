import React from "react";
import './avaliacao.css';

function Avaliacao() {
    return (
        <section class="section-padding pt-5 avaliacao text-light">
            <div class="container">
                <div>
                    <h2 class="text-center"><b>Avaliações de nossas clientes</b></h2>
                </div>
                <div class="row avalia ">
                    <div class="avalia-1 text-center ">
                        <img src="img/mulher-avalia.jpg" alt="" class="img-avalia"/>
                            <p class="text-justify">Adorei meu dia no salão! A equipe foi super acolhedora e a Dani fez um trabalho
                                incrível
                                no meu cabelo. Estou me sentindo maravilhosa! Obrigada, equipe do Salão DsHair!</p>
                            <br/>
                                <div class="avalia-foot">
                                    <p>Cliente</p>
                                    <p>Luana Oliveira</p>
                                </div>
                            </div>
                            <div class="avalia-2 text-center ">
                                <img src="img/homem-avalia.jpg" alt="" class="img-avalia"/>
                                    <p class="text-justify">Sempre me sinto mimada quando venho aqui! A Dani é uma artista com as tesouras, deixou
                                        meu cabelo exatamente como eu queria. Obrigada pelo excelente atendimento, Salão Ds Hair!</p>
                                    <br/>
                                        <div class="avalia-foot">
                                            <p>Cliente</p>
                                            <p>Mariana Silva</p>
                                        </div>
                                    </div>
                                    <div class="avalia-3 text-center ">
                                        <img src="img/mulher-avalia.jpg" alt="" class="img-avalia"/>
                                            <p class="text-justify">Obrigada, Salão Ds Hair, por sempre cuidar tão bem de mim! A Dani é simplesmente a
                                                melhor esteticista, sempre me deixando radiante. Mal posso esperar pela próxima visita!</p>
                                            <br/>
                                                <div class="avalia-foot">
                                                    <p>Cliente</p>
                                                    <p>Isabela Santos</p>
                                                </div>
                                            </div>
                                            <div class="avalia-4 text-center ">
                                                <img src="img/homem-avalia.jpg" alt="" class="img-avalia"/>
                                                    <p class="text-justify">Não troco o Salão Ds Hair por nada! A equipe é impecável e a Renata sempre consegue
                                                        fazer mágica no meu cabelo. Estou sempre saindo de lá com um sorriso no rosto. Recomendo a todos!</p>
                                                    <br/>
                                                        <div class="avalia-foot">
                                                            <p>Cliente</p>
                                                            <p>Ana Paula Costa</p>
                                                        </div>
                                                    </div>
                                            </div>
                                    </div>
                                </section>    );
}

                                export default Avaliacao;