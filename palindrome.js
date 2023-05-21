function palindrome(string) {
    let newString="";
    for(let i =string.length-1;i>=0;i--){
        newString+=string[i];
    }
    if(string===newString){
        return true;
    }
    return false;
}
console.log(palindrome("cooc"));