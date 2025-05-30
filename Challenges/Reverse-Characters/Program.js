const ReverseCharacters =(word) => {
    reversedWord = "";
    for(let i=word.length-1;i>=0;i--){
        reversedWord = reversedWord+word[i];
        
    }
    return reversedWord
}

// console.log(ReverseCharacters("javascript"));
// console.log(ReverseCharacters("elyts"));
// console.log(ReverseCharacters("nadroj"));
// console.log(ReverseCharacters("abc564"));
// console.log(ReverseCharacters("ecnetnes lluf a no skrow neve noitcnuf eht"));

function RemoveMiddleValue(arr){
    let midIndex;
    if(arr.length%2 ==0) {
        midIndex = arr.length/2;
    } else {
        midIndex = (arr.length-1)/2;
    }
    let newArr = [];
    for(i=0;i<arr.length;i++){
        if(i !== midIndex) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

console.log(RemoveMiddleValue([1,2,3,4,5]))
console.log(RemoveMiddleValue([27,8,15,73,27]))
console.log(RemoveMiddleValue([7,9,13,25,5,17]))