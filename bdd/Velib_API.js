// import React, { Component } from 'react';

// class Velib_API extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {
//     fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=100')
//       .then(response => response.json())
//       .then(data => this.setState({ data }))
//       .catch(error => console.error('Erreur lors de la récupération des données :', error));
//   }

//   render() {
//     const { data } = this.state;

//     return (
//       <div>
//         {data ? (
//           <div>
//             {data.map(item => (
//               <div key={item.id}>
//                 {/* Affichez ici les détails spécifiques à chaque élément */}
//                 <p>Nom : {item.name}</p>
//                 <p>Description : {item.description}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Chargement en cours...</p>
//         )}
//       </div>
//     );
// }
// }

// export default Velib_API;
