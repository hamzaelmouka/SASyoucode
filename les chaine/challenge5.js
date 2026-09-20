const prompt=require('prompt-sync')();
const chan1=prompt("entre 1ere chain ");
let cont=0;
let j=0;
while(true){
        if(chan1[j]===undefined){
        break ;
        }
cont++;
        j++;
}
let resrve="";
for(let i=cont-1;i>=0;i--){
    resrve+=chan1[i]
}
console.log(resrve);