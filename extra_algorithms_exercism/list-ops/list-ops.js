//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class List{
  constructor(arr) {
    if (arr == null) {
      this.values = new Array();
      this.count = 0;
    } else {
      this.values = arr;
      this.count = this.length();
    }
  }
  append(list2) {
    let newLength = this.count + list2.count;
    let newArr = new Array(newLength);
    for (let i = 0; i<this.count; i++){
        newArr[i] = this.values[i];
    }
    for (let i = 0; i < list2.count; i++){
        newArr[i + this.count] = list2.values[i];
    }
    
    this.values = newArr;
    this.count = newLength;
    return this;
  }
  concat(listOfLists) {
    for (let i = 0; listOfLists.values[i] != undefined; i++){
      this.append(listOfLists.values[i]);
    }
    return this;
  }
  filter(callback) {
    let newArr = new List();
        for (let i = 0; i < this.count; i++) {
            if (callback(this.values[i]) == true) {
                let tem = new List([this.values[i]]);
                newArr.append(tem);
            }
            
        }
        this.values = newArr.values;
    this.count = newArr.count;
    return this;
  }
  map(callback) {
    for (let i = 0; i < this.count; i++) {
      this.values[i] = callback(this.values[i]);
      
    }
    return this;
  }
  length() {
    let count = 0;
    for (let i = 0; this.values[i] != undefined; i++){
      count++;
    }
    return count;
  }
  foldl(callback,init) {
    let acc = init;
        let num = 0;
        for (let i = 0; i < this.count; i++){
            acc = callback(acc, this.values[i]);
        }
        return acc;
  }
  foldr(callback,init) {
    let acc = init;
        let num = 0;
        for (let i = this.count-1; i >= 0; i--){
            acc = callback(acc,this.values[i])
        }
        return acc;
  }
  reverse() {
    let newArray = new Array(this.count);
        for (let i = this.count-1; i >= 0; i--) {
            newArray[this.count-1-i] = this.values[i];
            
        }
    this.values = newArray;
    return this;
  }
}
// export class List {
//   constructor() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   append() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   concat() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   filter() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   map() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   length() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   foldl() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   foldr() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   reverse() {
//     throw new Error('Remove this statement and implement this function');
//   }
// }
module.exports = { List };
