class Book {
  #isbn;
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
    this.available = true;
  }

  get isbn() {
    return this.#isbn;
  }

  set isbn(updatedISBN) {
    if (typeof updatedISBN === "string") {
      return this.#isbn = updatedISBN;
    } else {
      console.log("Invalid ISBN provided, cannot update");
    }
  }

  borrowBook() {
    if (this.available) {
      return this.available = false;
    } else {
      return `${this.title} by ${this.author} is not available`;
    }
  }

  returnBook() {
    return this.available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
    addBook(book) {
      return this.books.push(book);
    }

    removeBook(isbn) {
      return this.books = this.books.filter((book) => book.isbn !== isbn);
    }

    findBookByTitle(title) {
      return this.books = this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());
    }
}

class DigitalLibrary extends Library {
  constructor() {
    super();
  }

  downloadBook(isbn) {
    this.books = this.books.find((book) => book.isbn === isbn);
    if (this.books) {
      return `Downloading ${this.books.title} by ${this.books.author}...`;
    } else {
      return 'The book you requested for is currently not available';
    }
  }
}

// BOOK CLASS
const person2 = new Book('The millionaire fastlane', 'MJ DeMaro', '9675438213476');
console.log(person2); // returns a Book object

person2.borrowBook() // changes the available property of Book to false
console.log(person2); // returns available property of class Book as false

person2.returnBook(); // changes the available property of Book to true
console.log(person2); // returns available as true

console.log(person2.isbn) // returns original isbn

person2.isbn = "9675438213473" // updating isbn with setter method
console.log(person2.isbn); // returns updated isbn


// LIBRARY CLASS
const person3 = new Library();

person3.addBook({title: 'Deep Work', author: 'Cal Newport', isbn: '9347582948376'});
person3.addBook({title: 'One up on Wall Street', author: 'Peter Lynch', isbn: '9458472927392'});
person3.addBook({title: 'Atomic Habits', author: 'James Clear', isbn: '9539615602433'});
console.log(person3); // returns array of book objects

person3.removeBook('9458472927392'); // specifying book object to be removed from aray by ISBN number
console.log(person3); // returns filtered array devoid of removed book object

person3.findBookByTitle('Deep Work'); // specifying book object to be found based on title
console.log(person3); // returns book object with corresponding title


// DIGITALLIBRARY CLASS INHERITING PROPERTIES OF LIBRARY CLASS
const libraryBook = new DigitalLibrary();

libraryBook.addBook({title: 'Buffettology', author: 'Mary Buffett and David Clarke', isbn: '9740274674892'});
libraryBook.addBook({title: 'Goals!', author: 'Brian Tracy', isbn: '9463652971543'});
console.log(libraryBook); // returns an array of book objects

const newDownload = libraryBook.downloadBook('9463652971543'); // specifying which book to be downloaded based on ISBN
console.log(newDownload); // returns a book object with a corresponding ISBN













