const { createProduct, Product, productPrice } = require("./product");

require("./hello");

const product = createProduct(1, "Macbook", productPrice);

const product2 = new Product(2, "iPhone", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());
