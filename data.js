// data.js -- les données de Jàng Afrig
const pays = [
{ cca3: "SEN", nom: "Sénégal", capitale: "Dakar" },
{ cca3: "MLI", nom: "Mali", capitale: "Bamako" },
{ cca3: "GHA", nom: "Ghana", capitale: "Accra" },
{ cca3: "KEN", nom: "Kenya", capitale: "Nairobi" },
{ cca3: "MAR", nom: "Maroc", capitale: "Rabat" },
{ cca3: "NGA", nom: "Nigéria", capitale: "Abuja" },
{ cca3: "EGY", nom: "Égypte", capitale: "Le Caire" },
{ cca3: "CIV", nom: "Côte d'Ivoire", capitale: "Yamoussoukro" },
{ cca3: "TUN", nom: "Tunisie", capitale: "Tunis" },
{ cca3: "ETH", nom: "Éthiopie", capitale: "Addis-Abeba" }
];
function choisirAuHasard(tableau) {
const index = Math.floor(Math.random() * tableau.length);
return tableau[index];
}
// Mélange un tableau (algorithme classique d'échange)
function melanger(tableau) {
const copie = [...tableau]; // copie du tableau (à prendre tel quel, CM3)
for (let i = copie.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
const temp = copie[i];
copie[i] = copie[j];
copie[j] = temp;
}
return copie;
}