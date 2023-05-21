function numberOfPizzas(orders) {
    console.log(orders)
    let sum=0;
    for(let i=0;i<orders.length;i++){
        if(orders[i].pizzas!==undefined){
            sum+=orders[i].pizzas
        }
        
    }
    return sum;
}
console.log(numberOfPizzas([
    { pizzas: 3, type: 0 },
    { type: 'PIZZA' },
    { type: 'WINGS' },
    { type: 'SALAD' }
  ])); 
