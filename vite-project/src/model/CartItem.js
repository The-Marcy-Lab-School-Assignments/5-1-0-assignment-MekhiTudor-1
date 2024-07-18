import getId from "../utils/getId";

class CartItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = this.getId();
  }
  static counter = 0;
  getId() {
    CartItem.counter++;
    return CartItem.counter;
  }
}

export default CartItem;
