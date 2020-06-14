// This is a copy of https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=107&pc=1#code/PTAEBMCMDoCsGcBQAXAngBwKagIIFdkALAewCdQBeUAb0VFAEtwAuUeZUhgOwHMBuOqC4BDALaZW7TrwH1h4cKUzx4Afkkdu-RAF9EKDNgBCxYgGtKNQUw3Tt9EeNtbZoJQBtMw+JgD64YWRMdTZNGV19AGNiLnYISEtaOQISUnhWAG0AXVBvXBSybIAaQUhTM3TQbNz4UBNzbN0BRBBQSOF3SLx3QLI4JAAzPC5I5AYYtjxRACYAOSnITDSACmFWLgWlotBIdc3SAEoreiVkPFIuXNAAah2BPUQhkbGJ+Cnl6E+N0UW0vZ+ltkjklQJ5kKBkMRkB1LAAGVxg3KkUjCVD-X7VKjZZr0BgDUCrUg8KaYLjIeDQTy8IiUChUWHAwT0IikYgAdyEmA5AFFkWRlgByHBEklk2pUng0+AkbrgHbYURkbBEYSXACM0AFB1cOlAmHcPkY+MJxPEYsppMlhFpVDVoAAZPbcMjUdAGPBhSjUCbReSMrCsgdGfQ5C7UJZvr94Dq9QbsCDQ17LMIRWbyTVclxUDr9PQBmQCYiGHDthKaVQU16LdTCHxGKAADygy1EOsMa7XYMhyHQ9w3CthjIMLI5wSnc6XHsde76bhBUgDYSRbAAZSmAHkAG5LdzEeTHSaiVgJglrIT7ba7c8Aw7opauejLSNLSrP0hAu+kB8Ez7QN+v-YP2vX4cweaJYnBN5RC3Hc9xYUA12g7dSF3fcqBBKCn32SpVVQA5WFwg96ERKc+3pb9EUrVFP0xKoR1zEM8VPVNSXJasrRtUAGSI7tCFZDkuC5UBeVZUhBWFU1WPFFtrWlYhZXlUBFSUCFCFVUANS1b9dX1Q0mJ9NMKTLa06VtB0nU9V13Us70U0ksV-UDLsQyRJMqH-bTY0NE9E1RZMWLFDNcO0hi8wLZYixLZsa38qtjLbRtoqtNsO2c7soRha4By9Id6Jch4XPHC4IQy9xQOaVognYfpHmGUZxkubwfFIZBuQARzwDpVgIrNLx6vCD304RQAAQioSA0pZdlOR5PkxIAAwAEmoYRdS4KE9Q6mFlsgHR5u1QQCrcTAzmKjg8EwGcWjAAAVZRwXaTpul6cgnnqmIKUQJqllarb3GWQQoLmbDljVbZpgOEp6CB+Yb3gUHwYORADu+lr2s6-7AfeMHQGmbYAGZIax0QEdxgmkZRlQfvRrriZglC4OgTCcbx0BCahw96dQ8Amex8HyeRgRUd+jGAehjdkO53mSYyFmCcDDmoK5xnMNl-m2cDQX9CgaAynMCl0DwaVlhBGxQAFNUBQ5xwJHNldiHENxVXAB2dnKAVdAOnXhAKNJoEN43Tfgi2rcEG3WAFAApYhCC4D2dAOoA.

// db.js
type Author = {
  id: string;
  name: string;
  address?: string;
};

type Book = {
  id: string;
  name: string;
  release_date?: string;
};

const db = {
  authors: [] as Author[],
  books: [] as Book[]
};

// calculator.js
function sum2Numbers(a: number, b: number) {
  return a + b;
}

function sum(...numbers: number[]) {
  let total = 0;
  let array: number[] = [];

  if (arguments.length === 0) {
    throw new Error('Arguments length should be more than 1.');
  } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
    array = numbers;
  } else {
    array = arguments as any;
  }

  for (let i = 0, length = array.length; i < length; i++) {
    total += array[i];
  }

  return total;
}

interface SumOverload {
  sum: {
    (a: number, b: number): number;
    (numbers: number[]): number;
    (...numbers: number[]): number;
  };
}

const sumOverload: SumOverload = {
  sum(numbers: any): any {
    let total = 0;
    let array: number[] = [];

    if (arguments.length === 0) {
      throw new Error('Arguments length should be more than 1.');
    } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
      array = numbers;
    } else {
      array = arguments as any;
    }

    for (let i = 0, length = array.length; i < length; i++) {
      total += array[i];
    }

    return total;
  }
};

// test.js
function assertEqual(a: any, b: any) {
  if (a != b) {
    throw new Error(`${a} not equal ${b}`);
  }

  return true;
}

// Test calculator functions.
assertEqual(sum2Numbers(1, 2), sum2Numbers(1, 2));
assertEqual(sum(1, 2, 3), sum(1, 2, 3));
assertEqual(sumOverload.sum(1, 2, 3), sumOverload.sum(1, 2, 3));
assertEqual(sumOverload.sum([1, 2, 3]), sumOverload.sum([1, 2, 3]));

db.books.push({
  id: '1',
  name: 'Some random book'
});
db.authors.push({
  id: '1',
  name: 'John'
});
