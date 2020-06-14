const dbWithOutJsdoc = require('./without-jsdoc/db');
const calculatorWithOutJsdoc = require('./without-jsdoc/calculator');

const dbWithJsdoc = require('./with-jsdoc/db');
const calculatorWithJsdoc = require('./with-jsdoc/calculator');

function assertEqual(a, b) {
  if (a != b) {
    throw new Error(`${a} not equal ${b}`);
  }

  return true;
}

// Test calculator functions.
assertEqual(
  calculatorWithJsdoc.sum2Numbers(1, 2),
  calculatorWithOutJsdoc.sum2Numbers(1, 2)
);
assertEqual(
  calculatorWithJsdoc.sum(1, 2, 3),
  calculatorWithOutJsdoc.sum(1, 2, 3)
);
assertEqual(
  calculatorWithJsdoc.sumOverload.sum(1, 2, 3),
  calculatorWithOutJsdoc.sumOverload.sum(1, 2, 3)
);
assertEqual(
  calculatorWithJsdoc.sumOverload.sum([1, 2, 3]),
  calculatorWithOutJsdoc.sumOverload.sum([1, 2, 3])
);

// Test JSDoc db functions.
// Here, we can't see what fields that we can fill.
dbWithOutJsdoc.db.authors.push({});

// On the other hand, here, we can see the fields that exist within the type `Author`.
dbWithJsdoc.db.authors.push({});

// Similarly, we test the same for books.
dbWithOutJsdoc.db.books.push({});
dbWithJsdoc.db.books.push({});
