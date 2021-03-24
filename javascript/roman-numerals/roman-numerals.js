//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const toRoman = (numbers) => {
  let str = numbers.toString();
  let res = "";
  if (str.length === 4) {
    switch (str[0]) {
      case '3':
        res = res + 'M';
      case '2':
        res = res + 'M';
      case '1':
        res = res + 'M';
        break;
      default:
        break;
    }
  }
  if (str.length >= 3) {
    switch (str[str.length - 3]) {
      case '3':
        res = res + 'C';
      case '2':
        res = res + 'C';
      case '1':
        res = res + 'C';
        break;
      case '4':
        res = res + 'C';
      case '5':
        res = res + 'D';
        break;
      case '8':
        res = res + 'DCCC';
        break;
      case '7':
        res = res + 'DCC';
        break;
      case '6':
        res = res + 'DC';
        break;
      case '9':
        res = res + 'CM';
        break;
      
    }
  }
  if (str.length >= 2) {
    switch (str[str.length - 2]) {
      case '3':
        res = res + 'X';
      case '2':
        res = res + 'X';
      case '1':
        res = res + 'X';
        break;
      case '4':
        res = res + 'X';
      case '5':
        res = res + 'L';
        break;
      case '6':
        res = res + 'LX';
        break;
      case '7':
        res = res + 'LXX';
        break;
      case '8':
        res = res + 'LXXX';
        break;
      case '9':
        res = res + 'XC';
        break;
    }
  }
  if (str.length >= 1) {
    switch (str[str.length - 1]) {
      case '3':
        res = res + 'I';
      case '2':
        res = res + 'I';
      case '1':
        res = res + 'I';
        break;
      case '4':
        res = res + 'I';
      case '5':
        res = res + 'V';
        break;
      case '6':
        res = res + 'VI';
        break;
      case '7':
        res = res + 'VII';
        break;
      case '8':
        res = res + 'VIII';
        break;
      case '9':
        res = res + 'IX';
        break;
    }
  }
  return res;

};
module.exports = { toRoman };
