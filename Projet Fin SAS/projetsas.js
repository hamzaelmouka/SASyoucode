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
let choix=Number(prompt("    Votre choix :"));
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
    let partiPolitique=prompt(` entre le nom du parti (ou Independant) : `);
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
     menu(); 
}
function AfficherListeCandidats(){
    console.log(`
        1. affichage simple 
        2. trier les candidats par nombre de votes
        3. afficher uniquement les candidats d'un parti politique spécifique.
         :`);
    let choix=Number(prompt(" Votre choix : "));
    switch(choix){
        case 1 :
            for(let i=0;i<cont;i++){
                console.log(`
                    cin    : ${candidats[i].cin}
                    nom    : ${candidats[i].nom}
                    prenom : ${candidats[i].prenom}
                    parti  : ${candidats[i].partiPolitique}
                    age    : ${candidats[i].age}
                    votes  : ${candidats[i].electeurs.length}
                    `);
            }
            break;
        case 2 :
            let reserv;
            for(let i=0;i<cont-1;i++){
                for(let j=0;j<cont-1-i;j++){
                    if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){
                        reserv=candidats[j];
                        candidats[j]=candidats[j+1];
                        candidats[j+1]=reserv;
                    }

                }
                
            }
            for(let i=0;i<cont; i++){
                console.log(`
                    cin    : ${candidats[i].cin}
                    nom    : ${candidats[i].nom}
                    prenom : ${candidats[i].prenom}
                    parti  : ${candidats[i].partiPolitique}
                    age    : ${candidats[i].age}
                    votes  : ${candidats[i].electeurs.length}
                    `);
            }
            break;
        case 3 :
            let parti=prompt("entre le nom de parti")
            for(let i=0;i<cont;i++){
                if(candidats[i].partiPolitique==parti){
                    console.log(`
                        cin    : ${candidats[i].cin}
                        nom    : ${candidats[i].nom}
                        prenom : ${candidats[i].prenom}
                        parti  : ${candidats[i].partiPolitique}
                        age    : ${candidats[i].age}
                        votes  : ${candidats[i].electeurs.length}
                        `);
                }
            }
            break;
        default :
        console.log("choix pas valide");
    }
menu();

}
function VoterCandidat(){
    let cinElecteur=prompt("entre le cin  :");
    for(let i=0;i<cont;i++){
        for(let j=0;j<candidats[i].electeurs.length;j++){
            if(candidats[i].electeurs[j]==cinElecteur){
                console.log("vous deja vote");
                return menu();
            }
        }
    }
    let cinCandidat=prompt("entre le cin de candidat :");
    for(let i=0;i<cont;i++){
        if(candidats[i].cin==cinCandidat){
            candidats[i].electeurs.push(cinElecteur);
            console.log("vote enregistre");
            return menu();
        }
    }
    console.log("candidat introvable ");
    menu();
}
function ModifierleCandidat(){
    let cin=prompt("entre le cin du candidat : ");
    for(let i=0;i<cont;i++){
        if(candidats[i].cin==cin){
            
        }
    }

}
function SupprimerCandidat(){

}
function RechercherCandidats(){

}
function Statistiqueselection(){

}