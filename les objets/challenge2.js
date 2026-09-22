let etudient = {
    nom: "motiee",
    prenom: "aaa",
    note: [12,11,15,11,18]
};
console.log("etudient : "+etudient.prenom+" "+etudient.nom);
console.log("lest des notes : " + etudient.note.join(", "));
let somme = 0;
for (let note of etudient.note) {
    somme += note;
}
let moyenne = somme / etudient.note.length;
console.log(`moyen : ${moyenne}`);