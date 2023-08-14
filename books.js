const addButton = document.getElementById('add_button');
export class Books {
  constructor() {
    this.title = '';
    this.author = '';
    this.booksArr = [];
  }

  deleteBook(event) {
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
    populateBookSection();
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
    populateBookSection();
  }

  attachEventListener() {
    addButton.onclick = this.addToStorage;
    const deleteBtns = Array.from(document.querySelectorAll('.delete-btn'));
    deleteBtns.forEach((it) => {
      it.onclick = this.deleteBook;
    });
  }
}
