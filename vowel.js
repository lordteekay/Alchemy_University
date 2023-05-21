// let vowels=['a','e','i','o','u'];
// console.log(vowels.indexOf('p'));
function countVowels(str) {
    let count=0;
    let vowels=['a','e','i','o','u'];
    for(let i=0;i<str.length;i++){
        if(vowels.indexOf(str[i].toLowerCase())!== -1){           
            count++;
        }
    }
    return count;
}
console.log(countVowels("aeio"));