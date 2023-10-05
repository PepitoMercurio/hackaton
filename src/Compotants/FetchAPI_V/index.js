import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomDataDisplay from './CustomDataDisplay';

function APIFetcher() {
  const [data, setData] = useState(null); // Initialisez data à null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=100')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('La requête n\'a pas abouti. Statut : ' + response.status);
        }
        return response.data;
      })
      .then(apiData => {
        setData(apiData);
        // console.log(apiData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite :', error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div className="App">
      <CustomDataDisplay data={data} />
    </div>
  );
}

export default APIFetcher;