const prompt=require('prompt-sync')();
let chan1=prompt("entre un test");
let chan2=prompt("entre un sous chain pour recherch");
n=chan2.length;
let cont=0;
for(i=0;i<chan1.length;i++){
    if(cont===n){
        break;
    }
    if(chan1[i]===chan2[0]){
        for(j=0;j<n;j++){
            if(chan1[i+j]===chan2[j]){
                cont++;
            }
        }
    }
}
if(cont===n){
    console.log("le sous chain et treveu sur test");
}else{
    console.log("le sous chain et ne pas treveu sur test");
}