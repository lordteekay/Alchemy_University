function removeOccurrences(array, num) {
    for(let i=array.length-1;i>=0;i--){
        if(array[i]===num){
            array.splice(i,1)
        }
    }
    return array;
}
console.log(removeOccurrences([1,2,3,1,3,4,5],1));
