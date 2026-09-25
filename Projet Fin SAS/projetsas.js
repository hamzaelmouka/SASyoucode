const prompt=require('prompt-sync')()
const candidats=[]
let cont=0;
menu();
function menu(){
    console.log(`
        ================================= 
         Gestion des Élections et Listes 
         Électorales au Maroc
        ================================= 
        1. Ajouter un nouveau candidat 
        2. Ajouter plusieurs candidats à la fois.
        3. Afficher la liste des candidats 
        4. Voter pour un candidat 
        5. Modifier les informations d'un candidat 
        6. Supprimer un candidat 
        7. Rechercher des candidats 
        8. Statistiques de l'élection  
        0. Quitter 
        Votre choix :`)
let choix=(prompt("    Votre choix :"));
switch(choix){
    case 1:
        AjouterCandidat();
        menu();
        break;
    case 2:
        AjouterPlusieursCandidats();
        break;
    case 3:
        AfficherListeCandidats();
        break;
    case 4:
        VoterCandidat();
        break;
    case 5:
        ModifierleCandidat();
        break;
    case 6:
        SupprimerCandidat();
        break;
    case 7:
        RechercherCandidats();
        break;
    case 8:
        Statistiqueselection();
    case 0:
        break;
    default :
    console.log("le choix pas valide entre outro choix");
    menu();
}
}
function AjouterCandidat(){
    let cont1=0;
    let cin=prompt("entre le cin   :");
    for(let i=0;i<cont;i++){
        if(cin==candidats[i].cin){
            console.log("le candidant est  dija inscrit ");
            cont1++;
        }

    }if(cont1==0){
    let nom=prompt("entre le nom de candidant   :");
    let prenom=prompt("entre le prenom de candidant   :");
    console.log(` Vous organisez une fete ?
        pour oui entre le nom de parter
        si non entre le nombre 1 : `);
    let partiPolitique=prompt=("");
    let age=prompt("entre le age  :");
    cont++;
    let candidat = { 
        cin : cin, 
        nom : nom, 
        prenom :prenom, 
        partiPolitique : partiPolitique, 
        age: age,         
        electeurs: [] 
    }; 
    candidats.push(candidat);
    console.log(`
           le condidants et ajouter
            `);
    }
}
function AjouterPlusieursCandidats(){
    let pluseur=Number(prompt("entre le nombre de candidant pou ajour : "));
    for(i=0;i<pluseur;i++){
        AjouterCandidat();
    }
}
function AfficherListeCandidats(){
    console.log(`
        1. affichage simple 
        2. trier les candidats par nombre de votes
        3. afficher uniquement les candidats d'un parti politique spécifique.
        Votre choix :`);
    let choix=prompt(" ");
    switch(choix){
        case 1 :
            let i=0;
            for(let cle of candidats){
                console.log(`
                    cin    : ${cle.cin}
                    nom    : ${cle.nom}
                    prenom : ${cle.cin}
                    age    : ${cle.cin}
                    `);i++;
            }
            break;
        case 2 :
            for(let cle of candidats){
                
            }
    }


}
function VoterCandidat(){

}
function ModifierleCandidat(){

}
function SupprimerCandidat(){

}
function RechercherCandidats(){

}
function Statistiqueselection(){

}