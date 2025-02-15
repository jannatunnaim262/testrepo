const number = [300,400,500,700];


const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Oil', price: 250},
    {name: 'Shirt', price: 150},
    {name: 'Pant', price: 1700}
]

function getShoppingTotal(product) {
    let total = 0;
for(const product of products){ 
    total = total + product.price;

}
return total;
}
const total = getShoppingTotal(products);
console.log("Totoal Cost",total);
