//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function gigasecond(date) {
  let mydate = new Date(date)
  mydate.setUTCSeconds(date.getUTCSeconds() + 1000000000);
  return (mydate);
}

module.exports = { gigasecond };