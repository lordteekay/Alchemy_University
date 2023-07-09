//Destructing
// const person={
//     name:"Tokunbo",
//     surname:"Adebayo"
// }
// const {name,surname} = person;
// console.log(surname);

// const arr = ["lordteekay","THack"]
// const [a,b] = arr;
// console.log(a);
// console.log(b);

//Rest operator
/*function num(...args) {
    console.log(args);
}
num(1,2,3,4,5,6)

const [a,b,...args] = [1,2,3,4,5,6];
console.log(args);*/

//Spread operator
const num = [1,2,3,4,5]
const addNum = (a,b,c,d,e)=>{
    return a+b+c+d+e
}
console.log(addNum(...num));