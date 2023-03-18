import style from "../styles/shoppingCart.module.css";
import Product from "./product";
import { useAppContext } from "./stateWrapper";

export default function ShoppingCart() {
  const cart = useAppContext();
  function handleCloseCart() {
    cart.closeCart();
  }
  function getTotal() {
    let total = 0;
    cart.items.forEach((item) => {
      total += item.qty * item.price;
    });
    return total;
  }
  return (
    <div className={style.shoppingCart} style={{ display: cart.isOpen ? "block" : "none" }}>
      <button className={style.close} onClick={handleCloseCart}>
        Close
      </button>
      {cart.items.length === 0 ? (
        <div className={style.empty}>Cart is Empty</div>
      ) : (
        <>
          <h3>Your Items</h3>
          <div>
            {cart.items.map((item) => (
              <Product key={item.id} item={item} showAs="ListItem" qty={item.qty} />
            ))}
          </div>
          <div className={style.total}>Total: ${getTotal()}</div>
        </>
      )}
    </div>
  );
}
