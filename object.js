function countElements(array) {
    let elementObject={};
    for(let key=0;key<array.length;key++){
        if(!([array[key]] in elementObject)){
            elementObject[array[key]]=1;
        }
        else{
            elementObject[array[key]]++
            
        }

    }
    return elementObject;
}
console.log(countElements(["e", "k", "e", "z", "i", "z"]));