import attachEventListener from './eventListenerAttacher.js';

const booksWrapper = document.getElementById('book-collection-wrapper');

export default function populateBookSection(bookItem) {
  const localData = localStorage.getItem('books');
  let local = [];

  try {
    local = JSON.parse(localData);
    if (local === null) local = [];
  } catch (error) {
    console.warn('local storage is empty');
    local = [];
  }

  bookItem.booksArr = local;

  if (bookItem.booksArr.length <= 0) {
    booksWrapper.textContent = 'Empty list';
    return;
  }

  booksWrapper.innerHTML = '';
  for (let i = 0; i < bookItem.booksArr.length; i += 1) {
    const book = document.createElement('div');
    book.className = 'book-item';
    const bookElement = bookItem.booksArr[i];

    const bookHTML = `
        <p>"${bookElement.title}" by</p>
        <p>${bookElement.author}</p>
        <button class="delete-btn" id="${i}">Remove</button>
        <hr />
      `;

    book.innerHTML = bookHTML;
    booksWrapper.appendChild(book);
  }
  attachEventListener(bookItem);
}

