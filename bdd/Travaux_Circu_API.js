// import React, { Component } from 'react';

// class Travaux_Circu_API extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//   }

// url_arr10 = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/chantiers-perturbants/records?limit=100&refine=cp_arrondissement%3A%2275001%22&refine=cp_arrondissement%3A%2275008%22&refine=cp_arrondissement%3A%2275007%22&refine=cp_arrondissement%3A%2275006%22&refine=cp_arrondissement%3A%2275005%22&refine=cp_arrondissement%3A%2275004%22&refine=cp_arrondissement%3A%2275002%22&refine=cp_arrondissement%3A%2275009%22&refine=cp_arrondissement%3A%2275010%22&refine=cp_arrondissement%3A%2275012%22';
// url_arr20 = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/chantiers-perturbants/records?limit=100&refine=cp_arrondissement%3A%2275012%22&refine=cp_arrondissement%3A%2275013%22&refine=cp_arrondissement%3A%2275014%22&refine=cp_arrondissement%3A%2275015%22&refine=cp_arrondissement%3A%2275016%22&refine=cp_arrondissement%3A%2275017%22&refine=cp_arrondissement%3A%2275018%22&refine=cp_arrondissement%3A%2275019%22&refine=cp_arrondissement%3A%2275020%22';
//   componentDidMount() {
//     fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=100')
//       .then(response => response.json())
//       .then(data => this.setState({ data }))
//       .catch(error => console.error('Erreur lors de la récupération des données :', error));
//   }

//   render() {
//     const { data } = this.state;

//     return (
//         <div>
//           {data ? (
//             <div>
//               {data.map(item => (
//                 <div key={item.id}>
//                   {/* Affichez ici les détails spécifiques à chaque élément */}
//                   <p>Nom : {item.name}</p>
//                   <p>Description : {item.description}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>Chargement en cours...</p>
//           )}
//         </div>
//       );
//   }
// }

// export default Travaux_Circu_API;