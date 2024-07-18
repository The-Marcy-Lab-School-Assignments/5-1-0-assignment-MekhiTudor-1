import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  #cartItems = [];
  static #shoppingCarts = [];
  constructor(id) {
    this.id = getId();
    this.#cartItems;
    ShoppingCart.#shoppingCarts.push(this);
  }
  static id = 0;
  static listAll() {
    return [...ShoppingCart.#shoppingCarts];
  }
  // getId() {
  //   ShoppingCart.id++;
  //   return ShoppingCart.id;
  // }
  createItem(item, price) {
    const newItem = new CartItem(item, price);
    this.#cartItems.push(newItem);
    return newItem;
  }
  getItems() {
    return [...this.#cartItems];
  }
  getTotal() {
    return this.#cartItems
      .map((e) => e.price)
      .reduce((acc, curr) => acc + curr, 0);
  }
  removeItem(idNum) {
    this.#cartItems.splice(idNum - 1, 1);
  }
  static findBy(id) {
    return ShoppingCart.#shoppingCarts.find((element) => element.id === id);
  }
}

export default ShoppingCart;
