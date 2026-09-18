const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nomre"));
for(i=2;i<=n;i++){
    let h=0;
    for(j=2;j<i;j++){
        if(i%j===0)h++;
    }
    if(h===0)console.log(i);
}