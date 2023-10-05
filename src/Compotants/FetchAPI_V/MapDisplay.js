import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Assurez-vous que customMarkerIcon est correctement importé depuis l'emplacement approprié
import customMarkerIcon from '../../Style/img/custom-marker-icon.png';

function MapDisplay({ stations }) {
  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={12}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stations.map((station, index) => (
        <Marker
          key={index}
          position={[station.coordonnees_geo.lat, station.coordonnees_geo.lon]}
          icon={L.icon({ iconUrl: customMarkerIcon, iconSize: [32, 50] })} // Utilisez l'icône personnalisée
        >
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapDisplay;
