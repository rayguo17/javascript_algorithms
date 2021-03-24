//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function rows(num) {
  let arr = new Array();
  num = num - 1;
  for (let i = 0; i <= num; i++){
    let tem = new Array();
    for (let j = 0; j <= i; j++){
      if (j == 0) {
        tem.push(1);
      } else if(j<i){
        tem.push(arr[i-1][j - 1] + arr[i-1][j]);
      } else {
        tem.push(1)
      }
      }
      
      arr.push(tem);

    
  }
  return arr;
}
module.exports = { rows };