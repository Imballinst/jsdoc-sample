function sum2Numbers(a, b) {
  return a + b;
}

function sum(numbers) {
  let total = 0;
  let array = [];

  if (arguments.length === 0) {
    throw new Error('Arguments length should be more than 1.');
  } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
    array = numbers;
  } else {
    array = arguments;
  }

  for (let i = 0, length = array.length; i < length; i++) {
    total += array[i];
  }

  return total;
}

const sumOverload = {
  sum(numbers) {
    let total = 0;
    let array = [];

    if (arguments.length === 0) {
      throw new Error('Arguments length should be more than 1.');
    } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
      array = numbers;
    } else {
      array = arguments;
    }

    for (let i = 0, length = array.length; i < length; i++) {
      total += array[i];
    }

    return total;
  },
  sum(a, b) {
    return a + b;
  }
};

module.exports = { sum2Numbers, sum, sumOverload };
