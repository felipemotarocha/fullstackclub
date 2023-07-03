// Módulo incompatível com ES Modules
import lodash from "lodash";
const { filter } = lodash;

// Módulo nativo do Node
import path from "path";

// const { createProduct, Product, productPrice } = require("./product");
import productPrice, { Product, createProduct } from "./product.js";
// import * as productModule from './product.js'

const product = createProduct(1, "Macbook", productPrice);

const product2 = new Product(2, "iPhone", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());
