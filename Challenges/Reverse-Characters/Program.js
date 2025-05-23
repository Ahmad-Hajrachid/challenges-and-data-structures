const ReverseCharacters =(word) => {
    reversedWord = "";
    for(let i=word.length-1;i>=0;i--){
        reversedWord = reversedWord+word[i];
        
    }
    return reversedWord
}

console.log(ReverseCharacters("javascript"));
console.log(ReverseCharacters("elyts"));
console.log(ReverseCharacters("nadroj"));
console.log(ReverseCharacters("abc564"));
console.log(ReverseCharacters("ecnetnes lluf a no skrow neve noitcnuf eht"));