//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isPaired(test) {
  var left_bracket = '{[(';
  var right_bracket = '}])';
  let pure = test.split('').filter(i => left_bracket.includes(i) || right_bracket.includes(i));
  let flag = true;
  let stack = new Array();
  
  for (let i = 0; i < pure.length; i++){
    
      if (left_bracket.includes(pure[i])) {
          stack.push(pure[i]);
        
          
      } else {
          
              if (left_bracket.indexOf(stack[stack.length-1]) === right_bracket.indexOf(pure[i])) {
                  stack.pop();
          
              }
              else {
                  flag = false;
                  break;
              }
          }
      }
  
  if (stack.length != 0) flag = false;
  return flag;

}
module.exports = { isPaired };
