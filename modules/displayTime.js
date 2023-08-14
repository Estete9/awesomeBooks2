import { DateTime } from '../node_modules/luxon.min.js';

// DISPLAY CURRENT TIME LOGIC
export default function displayTime() {
  // luxon library for time
  const date = DateTime.now().toFormat('MMMM d, yyyy hh:mm:ss a');

  document.getElementById('date-subheader').innerHTML = date;
  setTimeout(displayTime, 1000);
}
