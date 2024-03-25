const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// This will store our books in memory,
// "id" is the unique identifier,
// other fields are up to you
let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    description:
      "A portrait of the Jazz Age in all of its decadence and excess, Gatsby believed in the green light, the orgastic future that year by year recedes before us.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description:
      "A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions.",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    description:
      "A novel that explores the tragedy of racism in the 1930s and the dramatics of trial in a small Alabama town seen through the eyes of a young girl.",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-Age",
    description:
      "The story of Holden Caulfield, a teenage boy who becomes disillusioned with the adult world as he enters it.",
  },
  {
    title: "Pride and Prejudice",
    id: 5,
    author: "Jane Austen",
    genre: "Romance",
    description:
      "A classic novel about the prejudice that occurred between the 19th century classes and the pride which would keep lovers apart.",
  },
  {
    title: "The Hobbit",
    id: 6,
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description:
      "The adventure of Bilbo Baggins as he journeys with a group of dwarves to reclaim a treasure taken from them by the dragon Smaug.",
  },
  {
    title: "Brave New World",
    id: 7,
    author: "Aldous Huxley",
    genre: "Science Fiction",
    description:
      "A dystopian novel that presents a future where humans are bred in labs and controlled by a totalitarian government to maintain a supposedly perfect society.",
  },
  {
    title: "The Fault in Our Stars",
    id: 8,
    author: "John Green",
    genre: "Young Adult",
    description:
      "A heart-wrenching love story between two teenagers, Hazel and Augustus, who meet in a cancer support group and embark on a journey of love and discovery.",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    id: 9,
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    description:
      "An exploration of the history of humankind from the Stone Age to the modern day, and how Homo sapiens came to dominate the world.",
  },
  {
    title: "Beloved",
    id: 10,
    author: "Toni Morrison",
    genre: "Historical Fiction",
    description:
      "A powerful, Pulitzer Prize-winning novel about a former slave's struggle to overcome her haunted past in post-Civil War America.",
  },
];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Add a new book
app.post("/books", (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

// Update a book
app.put("/books/:id", (req, res) => {
  const index = books.findIndex((book) => book.id === parseInt(req.params.id));
  if (index >= 0) {
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
