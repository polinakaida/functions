/** 1
 * Перевіряє, чи є людина працездатного віку (від 16 до 64 років)
 * @param {number} age - вік людини
 * @returns {boolean} true якщо вік працездатний
 */
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}

console.log(isWorkingAgePerson(20)); // true
console.log(isWorkingAgePerson(4));  // false
console.log(isWorkingAgePerson(88)); // false


/** 2
 * Перевіряє, чи ділиться перше число на друге без залишку
 * @param {number} a - число яке перевіряємо
 * @param {number} b - дільник
 * @returns {boolean} true якщо ділиться без залишку
 */
const checkMultiplicity = function (a, b) {
  return a % b === 0;
};

console.log(checkMultiplicity(25, 5)); // true
console.log(checkMultiplicity(15, 3)); // true
console.log(checkMultiplicity(15, 5)); // true
console.log(checkMultiplicity(15, 4)); // false


// 3
function isTrianglePossible(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTrianglePossible(3, 4, 5));
console.log(isTrianglePossible(1, 2, 10));


// 4
function calculateRectangleArea(width, height) {
  return width * height;
}

console.log(calculateRectangleArea(5, 10));


// 5
const isPrime = function (number) {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};

console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(10));