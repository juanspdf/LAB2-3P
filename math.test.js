
const math = require('./math.js');

test('factorial de 3 debe ser 6', () => {
  expect(math.factorial(3)).toBe(6);
});
test('fibonacci de 4 debe ser 3', () => {
  expect(math.fibonacci(4)).toBe(3);
});

test('factorial de -1 debe lanzar error', () => {
  expect(() => math.factorial(-1)).toThrow('n debería ser un entero no negativo');
});

test('fibonacci de -1 debe lanzar error', () => {
  expect(() => math.fibonacci(-1)).toThrow('n debería ser un entero no negativo');
});
test('factorial de 0 debe ser 1', () => {
  expect(math.factorial(0)).toBe(1);
});

//Forzar la falla del test

test('fib(5) = 7 (intencionalmente mal)', () => expect(fibonacci(5)).toBe(7));
