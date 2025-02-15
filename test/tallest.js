const prices = [20000, 16000, 15000, 13000, 100000,400000];
function getmin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
    
}

const cheap = getmin(prices);
console.log("Cheapest one is :",cheap);
