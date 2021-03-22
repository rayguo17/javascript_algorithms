class List{
    constructor(arr = null) {
        if (arr == null) {
            this.list = new Array();
            this.count = 0;
        } else {
            this.list = arr;
            this.count = this.length();
        }
        
    }
    length() {
        let count = 0;
        for (let i = 0; this.list[i] != undefined; i++){
            count++;
        }
        return count;
    }
    append(list2) {
        let newLength = this.count + list2.count;
        let newArr = new Array(newLength);
        for (let i = 0; i<this.count; i++){
            newArr[i] = this.list[i];
        }
        for (let i = 0; i < list2.count; i++){
            newArr[i + this.count] = list2.list[i];
        }
        
        this.list = newArr;
        this.count = newLength;
    }
    concat(listOfLists) {
        
        
        for (let i = 0; listOfLists.list[i] != undefined; i++){
            this.append(listOfLists.list[i]);
        }
    }
    reverse() {
        let newArray = new Array(this.count);
        for (let i = this.count-1; i >= 0; i--) {
            newArray[this.count-1-i] = this.list[i];
            
        }
        this.list = newArray;
    }
    filter(callback) {
        let newArr = new List();
        for (let i = 0; i < this.count; i++) {
            if (callback(this.list[i]) == true) {
                let tem = new List([this.list[i]]);
                newArr.append(tem);
            }
            
        }
        this.list = newArr.list;
        this.count = newArr.count;
    }
    map(callback) {
        for (let i = 0; i < this.count; i++) {
            this.list[i] = callback(this.list[i]);
            
        }
        return this;
    }
    foldl(callback, init) {
        let acc = init;
        let num = 0;
        for (let i = 0; i < this.count; i++){
            acc = callback(acc, this.list[i]);
        }
        return acc;
    }
    foldr(callback, init) {
        let acc = init;
        let num = 0;
        for (let i = this.count-1; i >= 0; i--){
            acc = callback(acc,this.list[i])
        }
        return acc;
    }
}
let list0 = new List();
let list1 = new List([7,8]);
let list2 = new List([1]);

let list3 = new List([2]);
let list4 = new List([3]);
let listOfLists = new List([list1, list2, list3, list4]);
list0.concat(listOfLists);
list0.reverse();
list0.filter((el) => el % 2 === 1);
list0.map((el) => ++el);
let list5 = new List([1,2,3,4]);

console.log(list5.foldr((acc, el) => el / acc, 24));