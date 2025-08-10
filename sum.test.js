const suma = require('./sum');


test('Suma de 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Suma de 10 + 5 debe ser 15', () => {
  expect(suma(10, 5)).toBe(15);
});
