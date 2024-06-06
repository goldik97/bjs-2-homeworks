"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let D = b ** 2 - 4 * a * c;

  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a)
    arr.push(x1, x2);
  }

  else if (D === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = parseInt(percent) / 100 / 12;
  let cont = parseInt(contribution);
  let am = parseInt(amount);
  let s = am - cont;
  let n = parseInt(countMonths);
  let pay = s * (per + (per / (((1 + per) ** n) - 1)));
  let total = (pay * n).toFixed(2);
  return +total;
}