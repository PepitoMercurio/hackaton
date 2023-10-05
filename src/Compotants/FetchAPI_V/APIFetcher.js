import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BornesFetch from '../../API/BornesFetch';
import CustomDataDisplay from './CustomDataDisplay';
import MapDisplay from './MapDisplay'; // Assurez-vous que le chemin d'importation est correct
import Header from '../Header';
import Footer from '../Footer';

function APIFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BornesFetch({ setData, setLoading });
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div className="App">
      <Header/>
      <CustomDataDisplay data={data} />
      <MapDisplay stations={data.results} />
      <Footer/>
    </div>
  );
}

export default APIFetcher;
