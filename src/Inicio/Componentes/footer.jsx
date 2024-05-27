import React from "react"
import './footer.css';
import '../Responsive/responsive.css';
import { Link } from "react-router-dom";


function Footer() {

  return (

  
    
    <footer class="site-footer " id="contato">
      <div class="row justify-content-center text-center">
        <div class="col-lg-2 col-md-4 col-10 logo-footer">
          <a href="#home"><img src="../img/logo-dshair-ñfundo.png" alt="" /></a>
        </div>
        <div class="col-lg-3 col-md-6 col-12 text-white menu-footer">
          <ul class="">
            <h4 class="my-4 title-footer">Menu</h4>
            <li>
              <Link to={'/'}>Início</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="#home">Blog</Link>
            </li>
            <li>
              <Link to="#home">Contato</Link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-12 text-white">
          <h4 class="my-4 title-footer">Contatos</h4>
          <p class="mb-1">
            <i class="fa fa-phone mr-2 footer-icon"></i>
            (11) 94366-2796
          </p><br />
          <p>
            <a class="text-primary" href="mailto:daniefilhostres@gmail.com">
              <i class="fa fa-envelope mr-2 footer-icon"></i>
              daniefilhostres@gmail.com
            </a>
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-12 text-white">
          <h4 class="my-4 title-footer">Nosso estúdio</h4>

          <p class="mb-1">
            <i class="fa fa-home mr-2 footer-icon"></i>
            R. Visconde de Antunes Braga, 43 - Vila Dorna, São Paulo - SP, 02322-030
          </p>
        </div>

      </div>
      <div class=" text-white">
        <p class="copyright-text">Desenvolvido por &copy; Guilherme
        </p>
      </div>
    </footer>
  );
}

export default Footer;