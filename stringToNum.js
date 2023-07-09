function toNumber(string) {
    if(+string===parseFloat(string)){
        return +string;
    }
    return 0;

}
console.log(toNumber("123"));
console.log(toNumber("tokunbo"));
