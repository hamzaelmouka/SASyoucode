const prompt = require('prompt-sync')();
let a=parseInt(prompt("entre un nombre entie pour calcule les anvirce "));
let invi=0;
for(i=1;a>0;i++){
   invi=invi*10+(a%10);
   a=Math.floor(a/10);
}
console.log("aloure l anvirce de cet nombre egele : "+invi);