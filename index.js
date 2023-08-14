// import { dateTime } from 'luxon';
import displayTime from './displayTime.js';
import { Books } from './books.js';
import navigationSetup from './navigation.js';
import populateCollections from './populateCollection.js';

const bookItem = new Books();
populateCollections(bookItem);
bookItem.attachEventListener();
navigationSetup();
