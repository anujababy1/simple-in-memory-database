class Book {
    constructor(id, title, author, year) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Create
    addBook(book) {
      this.books.push(book);
    }
  
    // Read
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    }
  
    findBookByAuthor(author) {
      return this.books.filter(book => book.author === author);
    }
  
    findBookByYear(year) {
      return this.books.filter(book => book.year === year);
    }
  
    // Update
    updateBook(id, updates) {
      const book = this.findBookById(id);
      if (book) {
        for (const key in updates) {
          book[key] = updates[key];
        }
      }
    }
  
    // Delete
    deleteBook(id) {
      this.books = this.books.filter(book => book.id !== id);
    }
  }
  
  const library = new Library();
  
  const book1 = new Book(1, "The God of Small Things", "Arundhati Roy", 1997);
  const book2 = new Book(2, "Pride and Prejudice", "Jane Austen", 1813);
  const book3 = new Book(3, "Stranger in a Strange Land", "Robert A Heinlein", 1961);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  console.log(library.findBookByTitle("The God of Small Things"));
  console.log(library.findBookByAuthor("Jane Austen"));
  console.log(library.findBookByYear(1961));
  
  library.updateBook(1, { title: "The God of Small Things (New)" });
  console.log(library.findBookByTitle("The God of Small Things (New)"));
  
  library.deleteBook(2);
  console.log(library.books);
  