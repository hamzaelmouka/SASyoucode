const prompt = require('prompt-sync')();
const apprenants=[];
menu();
function menu(){
console.log(`===============Menu=========
1. Ajouter un apprenant (prenom + note)
2. Afficher tous les apprenants enregistres
3. Rechercher un apprenant par son prenom
4. Mettre a jour la note d'un apprenant existant
5. Supprimer un apprenant par son prenom
6. Afficher la moyenne de la classe
7. Afficher le meilleur et le moins bon apprenant
0. Quitter le programme
`);
let choix=Number(prompt("entre un choix 0 a 6 :"));
switch(choix){
    case 1:
        ajouter();
        break;
    case 2:
        afficher();
        break;
    case 3:
        rechercher()
        break;
    case 4:
        modification();
        break;
    case 5:
        Supprimer();
        break;
    case 6:
        moyenne();
        break;
    case 7:
        meilleur();
    case 0:
        break;
    default :
    console.log("\\\\ le choix pas valide entre outro choix////");
    menu();
}}
function ajouter(){
    let cont=0;
    const prenom=prompt("entre le prenom :" );
    for(i=0;apprenants[i]!==undefined;i++){
        cont++;
        if(apprenants[i].prenom===prenom){
            console.log("        le prenants et dija execti");
            return menu();
        }
    }
    const note=prompt("entre la note de apprenants : ");
    if(isNaN(note)||20<note||note<0){
        console.log(" le note qui entre pas valide  entre note entre 0 et 20");
        return menu();
    }
    const apprenant={
        prenom :prenom,
        note   :note
    }
    let skils=Number(prompt("As-tu une competence que tu maitrises entre 1 pour oui "));
    if(skils===1){
        let competene=prompt("entre le competence qui mestise");
        apprenant.skilse=competene;
    }
    apprenants.push(apprenant);
    console.log("        le prenants et Ajoute"); 
    menu();
}
function afficher(){
    let cont=0
    for(i=0;apprenants[i]!==undefined;i++){
        cont++;
        console.log(apprenants[i])
    }
    if(cont===0){
        console.log("\\\\ne pas exeste un apparenant ajouter un apparenante ///");
    }
    menu();
}
function rechercher(){
    let cont=0;
    const prenom=prompt("entre le prenom ");
    for(i=0;apprenants[i]!==undefined;i++){
        cont++;
        if(apprenants[i].prenom===prenom){
            console.log(apprenants[i]);
            return menu();
        }
    }
        console.log("\\\\le apparenant nexsist pas ////");
        menu();
}

function modification(){
    let cont=0;
    const prenom=prompt("entre le prenom ");
    for(i=0;apprenants[i]!==undefined;i++){
        cont++;
        if(apprenants[i].prenom===prenom){
        let note=prompt("entre les nouvelle note");
        if(isNaN(note)||20<note||note<0){
            console.log(" le note qui entre pas valide  entre note entre 0 et 20");
            return menu();
        }
        apprenants[i].note=note;
        console.log(" \\\\\le notr ete modivier /////")
            return menu();
        }
    }
        console.log("\\\\le apparenant nexsist pas ////");
        menu();
}
function Supprimer(){
    let cont=0;
    const prenom=prompt("entre le prenom ");
    for(i=0;apprenants[i]!==undefined;i++){
        cont++;
        if(apprenants[i].prenom===prenom){
            for (let j=i+1;apprenants[j]!==undefined;j++){
                apprenants[j-1] = apprenants[j];
            }
            delete apprenants[apprenants.length-1]
            console.log("\\\\le prenante et soupprime////")
            return menu();
        }
    }
        console.log("\\\\le apparenant nexsist pas ////");
        menu();
}
function moyenne(){
     let cont=0;
     let cont2=0;
    for(i=0;apprenants[i]!==undefined;i++){
        cont+=Number(apprenants[i].note)
        cont2++;
    }if(cont2!==0){
        let moyen=cont/cont2;
        console.log("\\\\le moyen de note et egale",moyen);
        return menu();
    }
        console.log("\\\\pas de appranant  ajouter les apprenants promiarmont ////");
        menu();
}
function meilleur(){
    let moins=20;
    let x=0;
    let y=0;
    let meilleur=0;
    cont=0;
    for(i=0;apprenants[i]!==undefined;i++){
        cont++;
    if(apprenants[i].note>meilleur){
        x=i;
        milleur=apprenants[i].note;
    }if(apprenants[i].note<moins){
        y=i;
        moins=apprenants[i].note;
    }
}
    if(cont!==0){
        console.log("\\\\le moilleur et ",apprenants[x]);
        console.log("\\\\le moins et ",apprenants[y]);

        return menu();
    }else{
        console.log("\\\\le apparenant nexsist pas ////");
        menu();
    }
}