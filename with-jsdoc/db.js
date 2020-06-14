/**
 * @typedef Author
 * @type {Object}
 * @property {string} id
 * @property {string} name
 * @property {string} address
 */

/**
 * @typedef Book
 * @type {Object}
 * @property {string} id
 * @property {string} name
 * @property {string} release_date
 */

const db = {
  /** @type Author[] */
  authors: [],
  /** @type Book[] */
  books: []
};

module.exports = { db };
