let num1 = 1;
let num2 = 2;
let num3 = 3;
let mayor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}

console.log(mayor);
