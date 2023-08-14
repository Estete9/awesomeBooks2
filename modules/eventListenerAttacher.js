const addButton = document.getElementById('add_button');
const attachEventListener = (book) => {
  addButton.onclick = book.addToStorage;
  const deleteBtns = Array.from(document.querySelectorAll('.delete-btn'));
  deleteBtns.forEach((it) => {
    it.onclick = (event) => book.deleteBook(event, book);
  });
};

export default attachEventListener;
