const formatDate = (timeInSeconds = 0) => {

  let hours = Math.floor(timeInSeconds/3600);
  let minutes = Math.floor((timeInSeconds % 3600)/60);
  let seconds = Math.round(timeInSeconds % 60);

  if (hours === 0 && minutes === 0) {
      return seconds + 's';
  } else if (hours === 0 && seconds === 0 ) {
      return minutes + 'm';
  } else if (minutes === 0 && seconds === 0) {
      return hours + 'h';
  } else if (hours === 0 && minutes !== 0 && seconds !== 0) {
      return `${minutes}m ${seconds}s`;
  } else if (hours !== 0 && minutes === 0 && seconds !== 0) {
      return `${hours}h ${seconds}s`;
  } else if (hours !== 0 && minutes !== 0 && seconds === 0) {
      return `${hours}h ${minutes}m`;
  } else {
      return `${hours}h ${minutes}m ${seconds}s`;
  }
}

module.exports = formatDate;
