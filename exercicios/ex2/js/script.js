let n1 = "5"
let n2 = "6"
let n3 = "7" 
let n4 = "8" 
let n5 = "9"
let n6 = "10"

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
n5 = parseFloat(n5);
n6 = parseFloat(n6);

// part 1
let media = (n1+n2+n3+n4+n5+n6) / 6;
console.log (`A média é: ${media.toFixed(2)}`);