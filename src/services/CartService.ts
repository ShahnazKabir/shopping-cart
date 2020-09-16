import { Subject } from 'rxjs';
import { ProductViewInterface } from '@/services/ProductService';

const cart = new Subject();

const CartService: any = {
  addToCart: (item: ProductViewInterface) => cart.next(item),
  getCartList: () => cart.asObservable(),
};

export default CartService;
