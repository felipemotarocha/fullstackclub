class Product {
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }

  getInfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
  }
}

function createProduct(id, name, price) {
  return new Product(id, name, price);
}

const productPrice = 500;

module.exports = {
  createProduct,
  Product,
  productPrice,
};
