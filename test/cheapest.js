const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 45000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 23000, camera: '12mp', color: 'black'},
    {name: 'Vivo', price: 22000, camera: '12mp', color: 'black'},
    {name: 'Htc', price: 25000, camera: '12mp', color: 'black'}
]

function getLuxuaryPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone
        }
    }
    return max;
    
}

const Costly = getLuxuaryPhone(phones);
console.log("Luxuary Phone is : ",Costly);
