const prompt = require('prompt-sync')();
let n=parseInt(prompt("entre un nombre entie pour calcules la vactorial "));

let vactur=1;
for(i=2;i<=n;i++){
    vactur*=i;
}
console.log(`${n}!=${vactur}`);