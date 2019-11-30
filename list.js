var initialArray = [1,2,3,4,5];
var val = 10;
let index = 5;
let finalArray = [];
finalArray.length = initialArray.length + 1;

function push(val) {
    for(var i=0;i<initialArray.length;i++) {
        finalArray[i]=initialArray[i];
        finalArray[initialArray.length]=val;
    } 
}

function popList() {
        return finalArray[finalArray.length-1]
}

function size() {
    return finalArray.length;
}

function getValue(index) {
    for(var i=0;i<finalArray.length;i++) {
        if (i=index) {
            return finalArray[index]
        }
    }
}

push(val);
popList(val);
let value = popList();
let sizeValue = size();
let indexValue = getValue(index);
console.log(indexValue);