import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className="header style2">
            <div class="img-body"></div>

            <div className="middle-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center">
                            <div className="logo">
                                <Link to="/" className="navbar-brand">
                                    <img src="../img/logo-dshair-ñfundo.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <div className="widget-main d-inline-flex flex-sm-row flex-column">
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <a className="btn btn-sigin-whats btn-sigin" href="https://wa.link/sq3g7d"><i className="fa-brands fa-whatsapp"></i></a>
                                    <a className="btn btn-sigin-face btn-sigin" href="https://www.facebook.com/danisilvalora"><i className="fa-brands fa-facebook"></i></a>
                                    <a className="btn btn-sigin-insta btn-sigin" href="https://www.instagram.com/ds_hairespacomulher/"><i className="fa-brands fa-instagram"></i></a>
                                    <span className="btn-block text-nowrap">
                                        <h5><strong className="text-white">Horário de Atendimento</strong></h5>
                                        <p className="text-white">Segunda - Sábado das 07:00 às 20:00</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`header-inner ${isScrolled ? 'fixed' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-lg-center">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={scrollToTop} to="/">Início</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={scrollToTop} to="/sobre-nos">Sobre</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={scrollToTop} to="/servicos">Serviços</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={scrollToTop} to="/blog">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={scrollToTop} to="/contato">Contato</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Navbar;
