import populateBookSection from './populateCollection.js';

export class Books {
  constructor() {
    this.title = '';
    this.author = '';
    this.booksArr = [];
  }

  deleteBook(event, bookItem) {
    console.log('delete book run');
    const localData = localStorage.getItem('books');
    let local = [];
    const bookId = event.target.id;

    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.warn('local storage is empty');
      local = [];
    }

    this.booksArr = local;
    this.booksArr.splice(bookId, 1);
    localStorage.setItem('books', JSON.stringify(this.booksArr));
    populateBookSection(bookItem);
  }

  // SAVE INTERACTION WITH USER IN LOCAL STORAGE
  addToStorage() {
    const localData = localStorage.getItem('books');
    let local = [];

    try {
      local = JSON.parse(localData);
      if (local === null) local = [];
    } catch (error) {
      console.warn('local storage is empty');
      local = [];
    }

    this.booksArr = local;
    const book = {};
    book.title = document.querySelector('#book_title').value;
    book.author = document.querySelector('#book_author').value;
    this.booksArr.push(book);
    localStorage.setItem('books', JSON.stringify(this.booksArr));
    document.querySelector('#book_title').value = '';
    document.querySelector('#book_author').value = '';
  }
}
