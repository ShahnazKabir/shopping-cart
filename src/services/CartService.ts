import { Subject } from 'rxjs';
import { ProductViewInterface } from '@/services/ProductService';

const subject = new Subject();
const CartService: any = {
  addToCart: (item: ProductViewInterface) => subject.next(item),
  getCartList: () => subject.asObservable(),
};

export default CartService;
