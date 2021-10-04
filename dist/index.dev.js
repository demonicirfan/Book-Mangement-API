"use strict";

var express = require('express');

var database = require('./database');

var booky = express();
/*
 * Route         "/"
 * Description   Get all the books
 * Access        PUBLIC
 * Parameters    NONE
 * Methods       Get
 */

booky.get('/', function (req, res) {
  return res.json({
    books: database.books
  });
});
/*
 * Route         "/is"
 * Description   Get specific books on ISBN
 * Access        PUBLIC
 * Parameters    ISBN
 * Methods       Get
 */

booky.get('/is/:isbn', function (req, res) {
  console.log(req.params.isbn);
  console.log(database.books);
  var getSpecificBook = database.books.filter(function (book) {
    return book.ISBN === req.params.isbn;
  });

  if (!getSpecificBook.length) {
    return res.json({
      error: "No book found for the ISBN of ".concat(req.params.isbn)
    });
  }

  return res.json({
    book: getSpecificBook
  });
});
/*
 * Route         "/c"
 * Description   Get specific books on Category
 * Access        PUBLIC
 * Parameters    category
 * Methods       Get
 */

booky.get('/c/:category', function (req, res) {
  var getSpecificBook = database.books.filter(function (book) {
    return book.category.includes(req.params.category);
  });

  if (getSpecificBook.length === 0) {
    return res.json({
      error: "No book found for the category of ".concat(req.params.category)
    });
  }

  return res.json({
    book: getSpecificBook
  });
});
/*
 * Route         "/d"
 * Description   Get specific books on language
 * Access        PUBLIC
 * Parameters    language
 * Methods       Get
 */

booky.get('/d/:language', function (req, res) {
  var getSpecificBook = database.books.filter(function (book) {
    return book.language === req.params.language;
  });

  if (getSpecificBook.length === 0) {
    return res.json({
      error: "No book found for the category of ".concat(req.params.language)
    });
  }

  return res.json({
    book: getSpecificBook
  });
});
/*
 * Route         "/authors"
 * Description   Get specific books on language
 * Access        PUBLIC
 * Parameters    none
 * Methods       Get
 */

booky.get('/author', function (req, res) {
  return res.json({
    author: database.author
  });
});
/*
 * Route         "/authors/book"
 * Description   Get specific authors based on books
 * Access        PUBLIC
 * Parameters    isbn
 * Methods       GET
 */

booky.get('/author/book/:isbn', function (req, res) {
  var getSpecificAuthor = database.author.filter(function (author) {
    return author.books.includes(req.params.isbn);
  });

  if (getSpecidifAuthor.length === 0) {
    return res.json({
      error: "No author found for the book of ".concat(req.params.isbn)
    });
  }

  return res.json({
    authors: getSpecificAuthor
  });
});
booky.listen(3000, function () {
  console.log('Server is up and running on port 3000');
});