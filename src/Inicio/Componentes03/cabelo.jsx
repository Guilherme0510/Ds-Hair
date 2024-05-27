import React from "react";
import "./cabelo.css";
import { Link } from "react-router-dom";

function Cabelo() {

    return (
        <section className="text-light container py-5 cabelo">
            <Link to={'/servicos'} className="btn btn-voltar"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
            <div className="text-center header-cabelo">
                <h1>Escolha um serviço</h1>
                <p>Nesta página, você pode selecionar um serviço que você precisa. Aqui estão apresentados todos os serviços de cabelo que oferecemos, incluindo os mais populares. Se você precisar de um serviço de cabelo personalizado, por favor, entre em contato conosco.</p>
            </div>
            <div className="row itens-cabelo">
                <div className="item-cabelo">
                    <img src="../../../img/icon-secador.png" alt="" />
                    <h4>Escova</h4>
                    <p>Com uma escova caprichada, seus cabelos ganham um brilho especial, realçando sua beleza natural.</p>
                    <Link to={'https://wa.link/4c89t6'} className=" btn saiba-mais ">Agende já</Link>
                </div>
                <div className="item-cabelo">
                    <img src="../../../img/icon-cabelo.png" alt="" />
                    <h4>Hidratação</h4>
                    <p>Com uma hidratação intensa, seus cabelos ficam macios e sedosos, destacando ainda mais sua beleza natural.</p>
                    <Link to={'https://wa.link/f5x5sc'} className="btn saiba-mais ">Agende já</Link>
                </div>
                <div className="item-cabelo">
                    <img src="../../../img/icon-tinta.png" alt="" />
                    <h4>Coloração</h4>
                    <p>Com uma coloração vibrante, seus cabelos ganham vida e luminosidade, realçando sua beleza natural de maneira deslumbrante.</p>
                    <Link to={'https://wa.link/dwd180'} className="saiba-mais ">Agende já</Link>
                </div>
            </div>

            <div className="row itens-cabelo">
                <div className="item-cabelo">
                    <img src="../../../img/icon-tesoura.png" alt="" />
                    <h4>Corte</h4>
                    <p>Com um corte bem-feito, seus cabelos ganham forma e movimento, destacando sua beleza natural de maneira sofisticada.</p>
                    <Link to={'https://wa.link/eo570b'} className="saiba-mais ">Agende já</Link>
                </div>
                <div className="item-cabelo">
                    <img src="../../../img/icon-tinta.png" alt="" />
                    <h4>Luzes/Mechas</h4>
                    <p>Com luzes bem-feitas, seus cabelos ganham profundidade e luminosidade, realçando sua beleza natural com elegância.</p>
                    <Link to={'https://wa.link/wdqrra'} className="saiba-mais ">Agende já</Link>
                </div>
                <div className="item-cabelo">
                    <img src="../../../img/icon-alisa.png" alt="" />
                    <h4>Relaxamento</h4>
                    <p>
                        Com um relaxamento caprichado, seus cabelos ganham uma textura suave e natural, realçando sua beleza de forma delicada e única.</p>
                    <Link to={'https://wa.link/g2j6gl'} className="saiba-mais ">Agende já</Link>
                </div>
            </div>

            <div className="row itens-cabelo">
                <div className="item-cabelo">
                    <img src="../../../img/icon-fio.png" alt="" />
                    <h4>Cauterização</h4>
                    <p>Com uma cauterização dedicada, seus cabelos ganham força e vitalidade, realçando sua beleza natural com um brilho incomparável.</p>
                    <Link to={'https://wa.link/8nxgo9'} className="saiba-mais ">Agende já</Link>
                </div>
                <div className="item-cabelo">
                    <img src="../../../img/icon-alisa.png" alt="" />
                    <h4>Progressiva</h4>
                    <p>Com uma progressiva bem-feita, seus cabelos ficam incrivelmente lisos e sedosos, realçando sua beleza natural com um toque de elegância e praticidade.</p>
                    <Link to={'https://wa.link/fpn3n5'} className="saiba-mais ">Agende já</Link>
                </div>
                <div className="item-cabelo">
                    <img src="../../../img/icon-alisa.png" alt="" />
                    <h4>Botox Capilar</h4>
                    <p>
                        Com um tratamento de botox capilar, seus cabelos ficam profundamente revitalizados e nutridos, realçando sua beleza natural com um brilho e maciez irresistíveis.</p>
                    <Link to={'https://wa.link/fyb1jy'} className="saiba-mais ">Agende já</Link>
                </div>
            </div>
        </section>

    );
}

export default Cabelo;