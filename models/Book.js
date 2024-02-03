class Book {
  constructor(author, title, isbn) {
    this.author = author;
    this.title = title;
    this.isbn = isbn;
  }

  displayBookInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`ISBN: ${this.isbn}`);
    console.log("-----------------------------");
  }
}

module.exports = Book;
