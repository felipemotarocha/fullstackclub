export class Product {
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }

  getInfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
  }
}

export function createProduct(id, name, price) {
  return new Product(id, name, price);
}

const productPrice = 200;

export default productPrice;

//   module.exports = {
//     createProduct,
//     Product,
//   };
