export function formatDateTime(dateTimeString) {
  // Parse the string into a JavaScript Date object
  const date = new Date(dateTimeString.replace(' ', 'T'));

  // Get the parts of the date that we want
  const day = date.getDate();
  const month = date.getMonth();
  const hour = date.getHours();

  // Map the month number to the month name
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Format the hour and the AM/PM part
  let hourFormatted = hour % 12 || 12; // Convert 24-hour time to 12-hour time format
  const amOrPm = hour >= 12 ? "PM" : "AM";

  // Assemble the formatted date string
  const formattedDate = `${hourFormatted}${amOrPm}, ${day.toString().padStart(2, '0')} ${monthNames[month]}`;

  return formattedDate;
};

export function metersToKilometers(meters) {
  return meters / 1000;
}

export function unixToHumanReadable(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ':' + minutes.substr(-2) + ' ' + (hours >= 12 ? 'PM' : 'AM');
  return formattedTime;
}