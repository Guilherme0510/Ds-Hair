import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (<nav className="navbar navbar-expand-lg bg-inverse sticky-top scrolling-navbar">
    <div className="container">
      <Link to="/" className="navbar-brand"><img src="../img/logo-dshair-ñfundo.png" alt="" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto w-100 justify-content-end text-center">
          <li className="nav-item">
            <Link className="nav-link page-scroll" onClick={scrollToTop} to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link page-scroll" onClick={scrollToTop} to="/sobre-nos">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link page-scroll" onClick={scrollToTop} to="/servicos">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link page-scroll" onClick={scrollToTop} to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link page-scroll" onClick={scrollToTop} to="/contato">Contatos</Link>
          </li>
          <li className="nav-item row justify-content-center">
            <a className="btn btn-sigin-whats" href="https://wa.link/iod1ow"><i className="fa fa-whatsapp"></i></a>
            <a className="btn btn-sigin-face" href="https://wa.link/iod1ow"><i className="fa fa-facebook"></i></a>
            <a className="btn btn-sigin-insta" href="https://wa.link/iod1ow"><i className="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;