let x="ert";
let y="rte"
let tab1=[]
let tab2=[]
for(let i=0;i<x.length;i++){
  tab1.push(x.charCodeAt(i));
  tab2.push(y.charCodeAt(i));
}
console.log(tab1)
console.log(tab2)
let cont=0;
for(let i=0;i<tab1.length;i++){
  for(let j=0;j<tab1.length;j++){
    if(tab1[i]===tab2[j]){
      cont++;
    }
  }
}
if(cont===tab1.length){
  console.log("le doux nom edontique")
}
