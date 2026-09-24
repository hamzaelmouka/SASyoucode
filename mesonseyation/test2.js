const workers = [
  { name: "John", job: "Developer", price: 500 },
  { name: "Sarah", job: "Designer", price: 450 },
  { name: "Mike", job: "Developer", price: 600 },
  { name: "Emma", job: "Writer", price: 350 },
  { name: "David", job: "Manager", price: 750 },
  { name: "Lisa", job: "Developer", price: 550 },
  { name: "James", job: "Designer", price: 400 },
  { name: "Anna", job: "Writer", price: 300 },
  { name: "Robert", job: "Manager", price: 800 },
  { name: "Sophia", job: "Developer", price: 650 },
  { name: "Daniel", job: "Designer", price: 425 },
  { name: "Olivia", job: "Writer", price: 375 },
  { name: "William", job: "Developer", price: 575 },
  { name: "Mia", job: "Designer", price: 475 },
  { name: "Alex", job: "Manager", price: 700 }
];
let cont=0; 
let prie=0;
for(i=0;workers[i]!==undefined;i++){
  prie+=workers[i].price;
  cont++
}
let moyen=prie/cont
console.log(moyen)
let x=0;
for(i=0;workers[i]!==undefined;i++){
    x=workers[i].price
  if(x>moyen){
    console.log(workers[i].name)
  }
}