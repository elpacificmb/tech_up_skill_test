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

// 3 . Calculate the full price of all product combined
let total_price = 0;

item.forEach((product) => {
  total_price += product.price;

  if (product.price < cheap_product) {
    cheap_product = product.price;
  }
});
console.log(total_price);

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar
let total_price_for_up_to_ten_dollar_product = 0;

item.forEach((product) => {
  if (product.price >= 10) {
    total_price_for_up_to_ten_dollar_product += product.price;
  }
});
console.log(total_price_for_up_to_ten_dollar_product);
