const item = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
];

// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
let cheap_product = item[0].price;

item.forEach((product) => {
  if (product.price < cheap_product) {
    cheap_product = product.price;
  }
});
console.log(cheap_product);

// 2 . Filter and show the product that will be expensive in the array
let expensive_product = item[0].price;

item.forEach((product) => {
  if (product.price > expensive_product) {
    expensive_product = product.price;
  }
});
console.log(expensive_product);
