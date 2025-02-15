

function layeredDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 70;

    if(quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }else if(quantity <= 200) {

    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;
    
}else{
    const  first100Total = 100 * first100Price;
    const second100Total = 90 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * third100Price;
    total = first100Total + second100Total + remainingTotal;
    return total;
}

}

const pdt = layeredDiscount(170);
console.log(pdt);
