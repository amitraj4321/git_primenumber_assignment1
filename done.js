let number=5;
let count=0;
for(let i=0; i<=number; i++){
if(number%i==0){
count++
}
}
if(count==2){
console.log("prime number");
}else{
console.log("not a prime number");