import style from "../styles/addButton.module.css";
import { useAppContext } from "./stateWrapper";

export default function AddButton({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={style.button} onClick={handleClick}>
      Add to cart
    </button>
  );
}
