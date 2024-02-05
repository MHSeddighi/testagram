class Member {
  constructor(membershipID, name) {
    this.membershipID = membershipID;
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    this.borrowedBooks.push(book.isbn);
    console.log(
      `Book with ISBN ${book.isbn} has been borrowed by ${this.name}`
    );
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book.isbn);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      console.log(
        `Book with ISBN ${book.isbn} has been returned by ${this.name}`
      );
    } else {
      console.log(
        `Book with ISBN ${book.isbn} was not borrowed by ${this.name}`
      );
    }
  }

  displayBorrowedBooks() {
    console.log(`${this.name}'s Borrowed Books:`);
    this.borrowedBooks.forEach((isbn) => {
      console.log(`ISBN: ${isbn}`);
    });
    console.log("-----------------------------");
  }
}

module.exports = Member;
