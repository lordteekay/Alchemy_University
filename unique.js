function unique(array) {
    const arr = array.sort();
    const newArray=[];
    let prev;
    let curr = arr[0]
    newArray.push(curr)
    for(let i=1;i<arr.length;i++){
        prev=arr[i]
        if(prev!==curr){
            newArray.push(prev)
        }
        curr = prev;
    }
    return newArray;
}
console.log(unique([1,2,2,3,3,4,5,3,1,7,5,6]));