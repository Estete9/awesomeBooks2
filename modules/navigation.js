// NAVIGATION MENU LOGIC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const navBtns = document.querySelectorAll('#menu li');
// onclick receives the index of which btn was clicked
function HighlightSelection(index) {
  navBtns.forEach((btn, i) => {
    btn.classList.remove('selected');
    if (index === i) {
      // checks which button was clicked and adds a class
      btn.classList.add('selected');
    }
  });
}

function navigate(index, updateCollection) {
  const sections = ['list', 'add-new', 'contact'];
  const bookCollection = document.getElementById('book-collection');
  const addBookSection = document.getElementById('add-book-section');
  const contactSection = document.getElementById('contact-section');
  switch (sections[index]) {
    // compares and changes the elements class accordingly to show or hide the sections
    case 'list': {
      bookCollection.classList.add('show');
      addBookSection.classList.remove('show');
      contactSection.classList.remove('show');
      HighlightSelection(index);
      updateCollection();
      break;
    }
    case 'add-new': {
      bookCollection.classList.remove('show');
      addBookSection.classList.add('show');
      contactSection.classList.remove('show');
      HighlightSelection(index);
      break;
    }
    case 'contact': {
      bookCollection.classList.remove('show');
      addBookSection.classList.remove('show');
      contactSection.classList.add('show');
      HighlightSelection(index);
      break;
    }
    default: {
      break;
    }
  }
}

export default function attachNavigationOnClick(updateCollection) {
  // loop through btns adding onclick
  navBtns.forEach((btn, index) => {
    btn.onclick = () => navigate(index, updateCollection);
  });
}

