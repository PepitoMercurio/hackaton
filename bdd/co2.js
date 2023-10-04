// Ce code permet de calculer le CO2 économisé en utilisant le vélo par rapport à tous les moyens de transport

// Données de CO2 par kilomètre pour chaque moyen de transport
const co2ParKilometre = {
    transilienRER: 6.2,
    tramway: 3.4,
    metro: 3.8,
    bus: 104,
    voiture: 134,
    velo: 0,
    };

    // Fonction pour calculer la quantité de CO2 économisée en utilisant le vélo par rapport à tous les moyens de transport
function calculerEconomieCO2() {
    const distanceEnKm = parseFloat(document.getElementById("distanceEnKm").value);

    // Calcul de l'économie de CO2 pour chaque moyen de transport
    const economies = {};
    for (const moyen in co2ParKilometre) {
        if (moyen !== "velo") { 
        const economieCO2 = distanceEnKm * (co2ParKilometre[moyen] - co2ParKilometre.velo );
        economies[moyen] = economieCO2;
        }
    }

    // Afficher les résultats dans la div de résultat
    let resultatHTML = "<h2>Économies de CO2 par rapport à tous les moyens de transport :</h2>";
    for (const moyen in economies) {
        resultatHTML += `<p>Avec le vélo, vous économisez ${economies[moyen]} g de CO2 par rapport au ${moyen}.</p>`;
    }
    document.getElementById("resultat").innerHTML = resultatHTML;
}