import React from "react"
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {

  return (


    <div className=" site-footer">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
          <ul className="nav col-md-4 justify-content-end text-center">
            <li className="nav-item"><Link to={'/'} className="nav-link px-2">Inicio</Link></li>
            <li className="nav-item"><Link to={'/sobre-nos'} className="nav-link px-2">Sobre</Link></li>
            <li className="nav-item"><Link to={'/servicos'} className="nav-link px-2">Serviços</Link></li>
            <li className="nav-item"><Link to={'/blog'} className="nav-link px-2">Blog</Link></li>
            <li className="nav-item"><Link to={'/contato'} className="nav-link px-2">Contato</Link></li>
          </ul>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="../img/logo-dshair-ñfundo.png" alt="" />
          </a>
          <p className="col-md-4 mb-0 text-center text-md-start text-white">&copy; 2024 Silva's Web</p>


        </footer>
      </div>
    </div>

  );
}

export default Footer;