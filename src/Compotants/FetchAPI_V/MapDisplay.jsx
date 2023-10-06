import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import customMarkerIcon from '../../Style/img/custom-marker-icon.png';

function MapDisplay(props) {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [loading, setLoading] = useState(true);
  const defaultAddress = "75010 Paris";
  const address = props.address || defaultAddress; // Utiliser props.address ou l'adresse par défaut

  useEffect(() => {
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`;

    axios
      .get(geocodeUrl)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          console.log("ADRS " + lat + " " + lon);
          setLat(lat);
          setLon(lon);
        }
        setLoading(false); // Arrête le chargement une fois que les coordonnées sont disponibles
      })
      .catch((error) => {
        console.error('Erreur lors de la géocodage :', error);
        setLoading(false); // Arrête le chargement en cas d'erreur
      });
  }, [address]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      {loading && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Chargement en cours...</div>}
      {!loading && (
        <MapContainer
          center={lat && lon ? [lat, lon] : [0, 0]}
          zoom={12}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {props.stations.map((station, index) => (
            <Marker
              key={index}
              position={[station.coordonnees_geo.lat, station.coordonnees_geo.lon]}
              icon={L.icon({ iconUrl: customMarkerIcon, iconSize: [32, 50] })}
            >
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export default MapDisplay;
