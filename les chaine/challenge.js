const prompt=require('prompt-sync')();
const arr=["youcode","test","javascripr"];


for(j=0;j<arr.length;j++){
let reserve="";
let chain=arr[j];
for(let i=chain.length-1;i>=0;i--){
    reserve+=chain[i];
  
}
arr[j]=reserve;
}
console.log(arr);