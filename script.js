console.log("script.js est bien branché !");
const prenom = "Rouguiyatou";
console.log("Bonjour " + prenom);
console.log(`Bonjour ${prenom}, prêt(e) à coder ?`);

const pseudo = "Aminata"; // texte (string)
let score = 0; // nombre (number), va changer -> let
const partieFinie = false; // booléen (boolean)
console.log(`Joueur : ${pseudo}`);
console.log(`Score de départ : ${score}`);
score = score + 5; // on réécrit l'ardoise
console.log(`Nouveau score : ${score}`); // 5

function direBonjour(nom) {
return `Bonjour ${nom}, bienvenue sur Jàng Afrig !`;
}
console.log(direBonjour("Cheikh"));
console.log(direBonjour("Ndèye"));

function appreciation(note) {
if (note >= 16) {
return "Très bien";
} else if (note >= 12) {
return "Bien";
} else if (note >= 10) {
return "Passable";
} else {
return "À retravailler";
}
}
console.log(appreciation(14)); // "Bien"
console.log(appreciation(8)); // "À retravailler"

function statutMajorite(age) {
return age >= 18 ? "majeur" : "mineur";
}
console.log(statutMajorite(20)); // "majeur"

const pays = ["Sénégal", "Mali", "Ghana", "Kenya"];
for (const nom of pays) {
console.log(`Pays africain : ${nom}`);
}
console.log(`Il y a ${pays.length} pays dans la liste.`);

