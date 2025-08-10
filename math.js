
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('n debería ser un entero no negativo');
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('n debería ser un entero no negativo');
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

module.exports = {
  factorial,
  fibonacci
};