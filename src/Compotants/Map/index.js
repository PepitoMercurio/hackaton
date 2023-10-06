import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
// import '../../Style/scss/Map/style.scss'
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

import customMarkerIcon from '../../Style/img/custom-marker-icon.png'; // Remplacez le chemin par le chemin de votre icône

const Map = ({ address }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Utilisez le service de géocodage de Nominatim pour obtenir les coordonnées géographiques à partir de l'adresse
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`;

    axios
      .get(geocodeUrl)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];

          console.log("ADRS " + lat +" " + lon);

          if (!mapInstance.current) {
            // Créez une instance de carte avec les coordonnées obtenues
            mapInstance.current = L.map(mapRef.current).setView([lat, lon], 13);

            // Ajoutez une couche de tuiles pour afficher la carte
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstance.current);
          } else {
            // Mettez à jour les coordonnées de la carte
            mapInstance.current.setView([lat, lon], 13);
          }

          // Ajoutez un marqueur à la localisation spécifiée avec un marqueur personnalisé
          const marker = L.marker([lat, lon], { icon: L.icon({ iconUrl: customMarkerIcon, iconSize: [32, 50] }) }).addTo(mapInstance.current);
          marker.bindPopup('Emplacement').openPopup();
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la géocodage :', error);
      });
  }, [address]);


  return <div className='Map' ref={mapRef} style={{ width: '600px', height: '400px' }}></div>;
};

export default Map;