const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Member = require("../models/Member");
const library = require("../models/Library");

router.post("/books", (req, res) => {
  const { title, author, isbn } = req.body;
  const book = new Book(title, author, isbn);
  library.books.push(book);
  res.status(201).json(book);
});

router.get("/books", (req, res) => {
  res.json(library.books);
});

router.post("/borrow", (req, res) => {
  const { membershipID, isbn } = req.body;
  const member = library.members.find(
    (member) => member.membershipID == membershipID
  );
  const book = library.books.find((book) => book.isbn == isbn);

  console.log(library.books);
  if (!member) {
    res.status(404).json({ message: "Member not found" });
  } else if (!book) {
    res.status(404).json({ message: "Book not found" });
  } else {
    member.borrowedBooks.push(isbn);
    res.json({ message: "Book borrowed successfully" });
  }
});

router.post("/return", (req, res) => {
  const { membershipID, isbn } = req.body;
  const member = library.members.find(
    (member) => member.membershipID == membershipID
  );
  const book = library.books.find((book) => book.isbn == isbn);

  if (!member) {
    res.status(404).json({ message: "Member not found" });
  } else if (!book) {
    res.status(404).json({ message: "Book not found" });
  } else {
    const index = member.borrowedBooks.indexOf(isbn);
    if (index !== -1) {
      member.borrowedBooks.splice(index, 1);
      res.json({ message: "Book returned successfully" });
    } else {
      res.status(404).json({ message: "Book not borrowed by the member" });
    }
  }
});

// Get all members
router.get("/members", (req, res) => {
  res.json(library.members);
});

module.exports = router;
