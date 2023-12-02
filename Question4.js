let num = prompt("Enter a number");
let n;
console.log(num);
for(let i = 0; num>0; i++){
    num = num/10;
    n = num%10;
}console.log((n + "").split(".")[0]);