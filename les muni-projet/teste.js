const tab=[1,2,6,3,4,9,12,5,11,7,10,7,13,8]
let x=0;
for(let i=0;i<tab.length;i++){
    for(let j=0;j<tab.length-i-1;j++){
        if(tab[j]>tab[j+1]){
            x=tab[j];
            tab[j]=tab[j+1];
            tab[j+1]=x;
        }

    }
}
console.log(tab);