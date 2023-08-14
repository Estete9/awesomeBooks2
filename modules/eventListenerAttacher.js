const addButton = document.getElementById('add_button');
export default function attachEventListener(book) {
  addButton.onclick = book.addToStorage;
  const deleteBtns = Array.from(document.querySelectorAll('.delete-btn'));
  deleteBtns.forEach((it) => {
    it.onclick = (event) => book.deleteBook(event, book);
  });
}

