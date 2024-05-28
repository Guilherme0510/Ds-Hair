import React from "react";
import './map.css';

function Map() {
  return (
    <section class="location-section">
      <div className="text-center py-5">
        <h1><i>Nossa Localização</i></h1>
      </div>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.400624800324!2d-46.59857781909013!3d-23.44600930288602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef69d78bdb617%3A0xd8cb4733cd6e2a38!2sDs%20Hair%20-%20Espa%C3%A7o%20mulher!5e0!3m2!1spt-BR!2sbr!4v1714674300982!5m2!1spt-BR!2sbr"
          title="Mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="location-info">
          <h2>Nosso Endereço</h2>
          <p><span class="location-icon">📍</span>Rua Visconde de Antunes Braga, 43 - Vila Dorna, São Paulo - SP</p>
          <p>Horário de funcionamento:<br />Segunda a Sábado, das 07h00 às 20h00</p>
        </div>
      </div>
    </section>
  );
}

export default Map;