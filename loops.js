//1 while
let num = 25;
while (0 <= num) {
    console.log(num);
    num--;
}

//1 do..while
let num2 = 25;

do {
    console.log(num2);
    num2--;
} while (0 <= num2);

//1 for
for (let num3 = 25; num3 >= 0; num3--) {
    console.log(num3);
}

//2 while
let a = 10;
while (a <= 50) {
    if (a % 5 === 0) console.log(a);
    a++;
}

//2 do..while
let b = 10;
do {
    if (b % 5 === 0) console.log(b);
    b++;
} while (b <= 50);

//2 for
for (let c = 10; c <= 50; c++) {
    if (c % 5 === 0) console.log(c);
}

//3 while
let d = 1;
let sum = 0;

while (d <= 100) {
    sum += d;
    d++;
}

console.log(sum);

//3 do..while
let e = 1;
let sum2 = 0;

do {
    sum2 += e;
    e++;
} while (e <= 100);

console.log(sum2);


//3 for
let sum3 = 0;

for (let f = 1; f <= 100; f++) {
    sum3 += f;
}

console.log(sum3);
