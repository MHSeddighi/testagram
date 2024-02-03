const Member = require("./Member");
const Book = require("./Book");

const Library = {
  books: [],
  members: [
    new Member("1", "Ali"),
    new Member("2", "Sara"),
    new Member("3", "Ahmad"),
    new Member("4", "Reza"),
    new Member("5", "Keyvan"),
    new Member("6", "Mehrdad"),
  ],

  addBook(author, title, isbn) {
    const newBook = new Book(author, title, isbn);
    this.books.push(newBook);
    console.log("Book added to the library.");
  },

  searchBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      console.log("Book Found:");
      book.displayBookInfo();
    } else {
      console.log("Book not found in the library.");
    }
  },
};

module.exports = Library;
