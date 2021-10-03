const express = require('express');
const database = require('./database');
const booky = express();

/*
 * Route         "/"
 * Description   Get all the books
 * Access        PUBLIC
 * Parameters    NONE
 * Methods       Get
 */

booky.get('/', (req, res) => {
  return res.json({ books: database.books });
});

/*
 * Route         "/is"
 * Description   Get specific books on ISBN
 * Access        PUBLIC
 * Parameters    ISBN
 * Methods       Get
 */

booky.get('/is/:isbn', (req, res) => {
  console.log(req.params.isbn);
  console.log(database.books);
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
  );

  if (!getSpecificBook.length) {
    return res.json({
      error: `No book found for the ISBN of ${req.params.isbn}`,
    });
  }
  return res.json({ book: getSpecificBook });
});

/*
 * Route         "/c"
 * Description   Get specific books on Category
 * Access        PUBLIC
 * Parameters    category
 * Methods       Get
 */

booky.get('/c/:category', (req, res) => {
  const getSpecificBook = database.books.filter((book) =>
    book.category.includes(req.params.category)
  );
  if (getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for the category of ${req.params.category}`,
    });
  }
  return res.json({ book: getSpecificBook });
});

/*
 * Route         "/d"
 * Description   Get specific books on language
 * Access        PUBLIC
 * Parameters    language
 * Methods       Get
 */

booky.get('/d/:language', (req, res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.language === req.params.language
  );
  if (getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for the category of ${req.params.language}`,
    });
  }
  return res.json({ book: getSpecificBook });
});

/*
 * Route         "/authors"
 * Description   Get specific books on language
 * Access        PUBLIC
 * Parameters    none
 * Methods       Get
 */

booky.get('/author', (req, res) => {
  return (res.json = { author: database.author });
});
/*
 * Route         "/authors"
 * Description   Get specific books on language
 * Access        PUBLIC
 * Parameters    none
 * Methods       Get
 */

booky.get('/author', (res, req) => {
  return (res.json = { author: database.author });
});

booky.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});
