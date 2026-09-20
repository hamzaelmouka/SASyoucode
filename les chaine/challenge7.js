const prompt=require('prompt-sync')();
const chan1=prompt("entre un chain ");
let j=0;
let a=0;
while(true){
        if(chan1[j]===undefined){
        break ;
        }
        j++;
}
let chan2="";
for(i=0;i<j;i++){
    let code=chan1.charCodeAt(i);
    if(code>=97&&code<=122){
        chan2+=String.fromCharCode(code-32);
    }else{
        chan2+=chan1[i];
    }
}console.log("alour la nouvele chaine et : "+chan2);