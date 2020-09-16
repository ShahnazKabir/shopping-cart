import http from '../http-common';

const ProductService = {
  getAll: () => http.get('Products'),
};

interface ProductViewInterface {
  description: string;
  picture: string;
  price: number;
  stock: number;
  title: string;
  _id: string;
  quantity: number;
}

interface OldProductViewInterface {
  description: string;
  picture: string;
  price: number;
  stock: number;
  title: string;
  _id: string;
}

class Product implements ProductViewInterface {
  description = '';

  picture = '';

  price = 0;

  stock = 0;

  title = '';

  _id = '';

  quantity = 0;

  constructor(desc: string, picture: string, price: number, stock: number,
    title: string, id: string) {
    this.description = desc;
    this.picture = picture;
    this.price = price;
    this.stock = stock;
    this.title = title;
    /* eslint no-underscore-dangle: 0 */
    this._id = id;
  }
}

export {
  Product, ProductViewInterface, ProductService, OldProductViewInterface,
};
