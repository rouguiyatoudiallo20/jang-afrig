// data.js -- les données de Jàng Afrig
const pays = [
{ cca3: "SEN", nom: "Sénégal", capitale: "Dakar" },
{ cca3: "MLI", nom: "Mali", capitale: "Bamako" },
{ cca3: "GHA", nom: "Ghana", capitale: "Accra" },
{ cca3: "KEN", nom: "Kenya", capitale: "Nairobi" },
{ cca3: "MAR", nom: "Maroc", capitale: "Rabat" }
];
function choisirAuHasard(tableau) {
const index = Math.floor(Math.random() * tableau.length);
return tableau[index];
}