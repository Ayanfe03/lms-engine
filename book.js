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
      return `You can go ahead to download ${this.books.title}`;
    } else {
      return `${this.books.title} is unavailable for download`;
    }
  }
}

const person2 = new Book('The millionaire fastlane', 'MJ DeMaro', '9675438213476');
person2.borrowBook()

// console.log(person2.isbn) // returns original isbn
// person2.isbn = "9675438213473" // updating isbn with setter method
// console.log(person2.isbn); // returns updated isbn
// console.log(person2); // returns available: false

// person2.returnBook();
// console.log(person2); // returns available: true

const person3 = new Library();

person3.addBook({title: 'Deep Work', author: 'Cal Newport', isbn: '9347582948376'});
person3.addBook({title: 'One up on Wall Street', author: 'Peter Lynch', isbn: '9458472927392'});
person3.addBook({title: 'Atomic Habits', author: 'James Clear', isbn: '9539615602433'});

// console.log(person3); // returns array of book objects

// person3.removeBook('9539615602433'); // specifying book object to be removed from aray by ISBN number

// console.log(person3); // returns filtered array devoid of removed book object

// const newBook = person3.findBookByTitle('Deep Work'); // returns book object based on title
// console.log(newBook);

const libraryBook = new DigitalLibrary();

libraryBook.addBook({title: 'Buffettology', author: 'Mary Buffett and David Clarke', isbn: '9740274674892'});
libraryBook.addBook({title: 'Goals!', author: 'Brian Tracy', isbn: '9463652971543'});

console.log(libraryBook); // returns an array of book objects

libraryBook.downloadBook('9740274674892'); // specifying which book to be downloaded based on ISBN

console.log(libraryBook); // returns a book object with a corresponding ISBN












