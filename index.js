// import { dateTime } from 'luxon';
import displayTime from './displayTime.js';
import { Books } from './books.js';
import navigationSetup from './navigation.js';
import populateCollections from './populateCollection.js';
import attachEventListener from './eventListenerAttacher.js';

const bookItem = new Books();
populateCollections(bookItem);
// attachEventListener(bookItem);
navigationSetup(() => populateCollections(bookItem));
attachEventListener(bookItem);
