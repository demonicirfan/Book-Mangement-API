const books = [
  {
    ISBN: '3ger545fe',
    title: 'Tesla',
    pubDate: '2021-08-05',
    language: 'en',
    numPage: '200',
    author: [1, 2],
    publication: [1],
    category: ['tech', 'space', 'education'],
  },
  {
    ISBN: '343423fefd',
    title: 'Google',
    pubDate: '2020-05-04',
    language: 'en',
    numPage: '500',
    author: [3],
    publication: [2],
    category: ['tech', 'education'],
  },
];

const author = [
  {
    id: 1,
    name: 'elon',
    books: ['12345Book', 'secretBook'],
  },
  {
    id: 2,
    name: 'ankoor',
    books: ['12345Book'],
  },
  {
    id: 3,
    name: 'aman',
    books: ['343423fefd'],
  },
];

const publication = [
  {
    id: 1,
    name: 'oxford',
    books: ['12345Book', '343423fefd'],
  },
];

module.exports = { books, author, publication };
