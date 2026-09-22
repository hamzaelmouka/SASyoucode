function initialise(auteur,titre,anne){
    if(isNaN(anne)){
        console.log("les infomrmation invalide");
        return;
    }else{
          const livre={auteur : auteur, titre  :titre,anne   :anne}
          return livre
        }

}
console.log("alour si initiale les information de livre\n"  , initialise ("anase","javascript","22"))
