/*const tab=[1,2,2,3,3,3,4,4,4,4,4,5,5,5,6,8,7,7,9]
const comptou={}
for(i=0;tab[i]!=undefined;i++){
    if(comptou[tab[i]]){
        comptou[tab[i]]+=1
    }else{
        comptou[tab[i]]=1
    }
}
let max=0;
console.log(comptou);
for(let a in comptou){
    for(let cle of a){
        if(comptou[cle]>max){
            max=comptou[cle];

        }
    }
}
console.log(max)
*/
let arr = [10, 9,7,13,7,9,7] 
let max = 0;
for(let i = 0;i < arr.length ; i++){
    if(arr[i]> max){
        max=arr[i] ;
    }
}
console.log(max);