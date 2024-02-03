
// Add books to the library
library.addBook("John Doe", "Book 1", "ISBN001");
library.addBook("Jane Smith", "Book 2", "ISBN002");
library.addBook("James Johnson", "Book 3", "ISBN003");

// Create members
const member1 = new Member("M001", "John");
const member2 = new Member("M002", "Jane");

// Member borrows a book
const book1 = library.books[0];
member1.borrowBook(book1);

// Member returns a book
member1.returnBook(book1);

// Display member's borrowed books
member1.displayBorrowedBooks();

// Search for a book
library.searchBook("ISBN002");
