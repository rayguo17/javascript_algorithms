//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function clean(number) {
  const AllowChar = "1234567890+()-. ";
  const Letter = "abcdefghijklmnopqrstuvwxyz";
  if (number.split('').filter(i => AllowChar.includes(i)).length != number.length ) {
    if (number.split('').filter(i => !Letter.includes(i)).length != number.length) {
      throw "Letters not permitted";
    }
    throw "Punctuations not permitted";
  }
  const choosefrom = "1234567890";
  let puretext = number.split('').filter(i => choosefrom.includes(i)).join('');
  if (puretext.length > 11) {
    throw "More than 11 digits";
  }
  if (puretext.length <= 11 && puretext.length > 9) {
    if (puretext[0] != '1' && puretext.length === 11) {
      throw "11 digits must start with 1";
    }
    
    let edit = puretext.slice(-10);
    if (edit[0] == '0') {
      throw 'Area code cannot start with zero';
    }
    if (edit[0] == '1') {
      throw 'Area code cannot start with one';
    }
    if (edit[3] == '0') {
      throw 'Exchange code cannot start with zero';
    }
    if (edit[3] == '1') {
      throw 'Exchange code cannot start with one';
    }
    
    return edit;
  } else throw "Incorrect number of digits";
}
  module.exports = {clean}
