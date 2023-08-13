import { dateTime } from 'luxon';
import displayTime from './displayTime.js';
import { Books } from './books.js';
import * as navigation from './navigation.js';
import populateCollections from './populateCollection.js';

const addButton = document.getElementById('add_button');
const booksWrapper = document.getElementById('book-collection-wrapper');
let populateBookSection = () => {};
const navBtns = document.querySelectorAll('#menu li');

const bookItem = new Books();

displayTime();

// FUNCTION CALLS
bookItem.attachEventListener();
populateBookSection();
