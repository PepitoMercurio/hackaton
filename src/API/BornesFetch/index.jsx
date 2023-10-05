import React, { useEffect } from 'react';
import axios from 'axios';


function BornesFetch(props) {
    axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=100')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('La requête n\'a pas abouti. Statut : ' + response.status);
        }
        return response.data;
      })
      .then(apiData => {
        props.setData(apiData);
        props.setLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite :', error.message);
        props.setLoading(false);
    });
}

export default BornesFetch;
