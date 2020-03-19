var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : "+a);
var b = a.sort();
console.log("Ascending : "+b);
var c = b.reverse();
console.log("Desecending : "+c);
console.log("filter > 10 : "+a.filter(a1=>a1 > 10));