// DISPLAY CURRENT TIME LOGIC
export default function displayTime() {
  const option = {
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const today = new Date();
  let date = today.toLocaleString('en-US', option);
  date = date.replace(' at', ',');
  document.getElementById('date-subheader').innerHTML = date;
  setTimeout(displayTime, 1000);
}
