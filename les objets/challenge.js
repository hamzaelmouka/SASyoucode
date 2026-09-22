function initialise(auteur,titre,anne){
    const livre={}
    if(isNaN(anne)){
        console.log("les infomrmation invalide");
        return;
    }else{
           livre.auteur=auteur,
           livre.titre=titre,
           livre.anne=anne
          console.log("alour si initiale les information de livre")
          
        }
 return livre
}
console.log( initialise ("anase","javascript",2025))
