const prompt = require('prompt-sync')();
let revenu = parseFloat(prompt("quel est votre revenu annuel "));
let score = parseInt(prompt("quel est votre score de credit (sur 1000) "));
let duree = parseInt(prompt("quelle est la duree du pret (en annees) e"));
if (revenu >= 30000 && score >= 700 && duree < 10) {
    console.log("statut : eligible");
} 
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("statut : eligible avec conditions");
} 
else {
    console.log("statut : Non eligible");
}