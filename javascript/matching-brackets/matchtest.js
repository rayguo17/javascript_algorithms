

function isPaired(test) {
    var left_bracket = '{[(';
    var right_bracket = '}])';
    let pure = test.split('').filter(i => left_bracket.includes(i) || right_bracket.includes(i));
    let flag = true;
    let stack = new Array();
    console.log(pure);
    for (let i = 0; i < pure.length; i++){
      
        if (left_bracket.includes(pure[i])) {
            stack.push(pure[i]);
          
            console.log(stack, pure);
        } else {
            if (stack.length < 2) {
                console.log("smaller than 2")
                if (left_bracket.indexOf(stack[0]) === right_bracket.indexOf(pure[i])) {
                    stack.pop();
            
                }
                else {
                    flag = false;
                    break;
                }
            } else {
                console.log("bigger than 2", stack, pure, i);
                console.log(stack.lastItem,right_bracket.indexOf(pure[i]))
                if (left_bracket.indexOf(stack[stack.length-1]) === right_bracket.indexOf(pure[i])) {
                    stack.pop();
                    
                }
                else {
                    flag = false;
                    break;
                }
            }
        }
    }
    if (stack.length != 0) flag = false;
    return flag;
  
}
  
console.log(isPaired('{[]}'));