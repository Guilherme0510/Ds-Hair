import React, { useState } from "react";
import './equipe.css';

function Equipe() {
    // Estado para controlar a visibilidade do texto para cada equipe
    const [showProfession, setShowProfession] = useState({});

    // Função para alternar a visibilidade do texto para uma equipe específica
    const toggleProfession = (id) => {
        setShowProfession({ ...showProfession, [id]: !showProfession[id] });
    };

    return (
        <section className="container caixa-equipe">
            <div className="titulo-caixa text-center">
                <h2 className="text-center py-4">Nossa Equipe</h2>
            </div>
            <div className="salao-equipe py-5 row">
                <div className="equipe image-container col-lg-6 col-12" onClick={() => toggleProfession(1)}>
                    <div className="img-bg"></div>
                    <img
                        src="img/img-equipe1.png"
                        alt="Imagem"
                        className="img-opacity img-fluid"
                    />
                    <div className={`text-behind ${showProfession[1] ? "active" : ""}`}>
                        Cabeleireira
                    </div>
                    <div>
                        <h4 className="text-center py-4 title-equipe">Daniela</h4>
                    </div>
                </div>
                <div className="equipe image-container margin-equipe-reponsive col-lg-6 col-12" onClick={() => toggleProfession(2)}>
                    <div className="img-bg"></div>

                    <img
                        src="img/img-equipe1.png"
                        alt="Imagem"
                        className="img-opacity img-fluid"
                    />
                    <div className={`text-behind ${showProfession[2] ? "active" : ""}`}>
                        Manicure
                    </div>
                    <div>
                        <h4 className="text-center py-4 title-equipe">Agatha</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Equipe;
