const prompt = require('prompt-sync')();
function fibonace(x) {
let tab=[];
 for(i=0;i<=x;i++){
    if(i==1);tab[i]=0;
    if(i==2);tab[i]=1;
    if(i>2){
        tab[i]=tab[i-1]+tab[i-2];
    }
 }
 return tab[x];
}
let x=Number(prompt("entre un nembre pour calcule la le terme de nombre pour fibounace :"));
console.log("alour le terme "+x+"et egale : "+fibonace(x));