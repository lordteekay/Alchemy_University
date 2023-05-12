function fiveGreater(array) {
    for(let i=array.length-1;i>=0;i--){
        if(array[i]>5){
            array.splice(i,1);
        }
    }
    return array;
}
console.log(fiveGreater([1,2,3,4,5,6,7,8,9]));