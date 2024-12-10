import { RestService } from "../../api/services/rest-service";
import { Product } from "../models/product";

export class ProductService extends RestService<Product> {
    constructor() {
      super('https://dummyjson.com/products');
    }
  }