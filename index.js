// import { dateTime } from 'luxon';
import displayTime from './displayTime.js';
import { Books } from './books.js';
import * as navigationFunctions from './navigation.js';
import populateCollections from './populateCollection.js';

const bookItem = new Books();
populateCollections(bookItem);
