import React from 'react';

function CustomDataDisplay({ data }) {
  return (
    <div className="custom-data">
      <h1>Affichage de l'API des vélib</h1>
      <div>
        <p>Nombre de stations disponibles : {data.total_count}</p>
        <ul>
          {data.results.map((station, index) => (
            <li key={index}>
              <p>Station : {station.name}</p>
              <p>Capacité : {station.capacity} places</p>
              <p>{station.coordonnees_geo.lon}</p>
              <p>{station.coordonnees_geo.lat}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomDataDisplay;