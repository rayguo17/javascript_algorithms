//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function hey(message) {
  if (message.replace(/\s/g,'').slice(-1) == '?') {
    if (message == message.toUpperCase()&& message.split('').filter(i =>!'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(i)).length!=message.split('').length) {
      return "Calm down, I know what I'm doing!";
    } else {
      return 'Sure.'
    }
  } else if(message == message.toUpperCase() && message.split('').filter(i =>!'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(i)).length!=message.split('').length){
    return 'Whoa, chill out!';
  } else if (!message.replace(/\s/g, '')) {
    return "Fine. Be that way!";
  } else {
    return 'Whatever.';
  }
    
}

module.exports = { hey };