const fizzbuzz = (arr)=>{
    const newArr=[];
    for(let x of arr){
        if((x%3===0) && (x%5===0)){
            newArr.push("fizzbuzz")
        }
        else if(x%3===0){
            newArr.push("fizz")
        }
        else if(x%5===0){
            newArr.push("buzz")
        }
    }
    return newArr.join('')
}
const numbers = [1, 3, 5, 9, 11, 12, 20];
console.log(fizzbuzz(numbers));