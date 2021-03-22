// let message= "'1,2,3'"
// let bool = message.split('').filter(i => !('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(i))).length != message.split('').length;
// console.log(message.split('').filter(i => !('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(i))))
// console.log(message.split(''))

// console.log(bool)

let message = '\t\t\t';
let bool = !message.replace(/\s/g, '');
console.log(bool);