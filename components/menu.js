import Link from "next/link";
import style from "../styles/menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={style.menu}>
      <div className={style.menuNav}>
        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="/store" className={style.link}>
          Store
        </Link>
        <Link href="/faq" className={style.link}>
          FAQ
        </Link>
      </div>

      <div>
        <a href="#" className={style.link} onClick={handleOpenCart}>
          <div>Cart ({cart.getNumberOfItems()})</div>
        </a>
      </div>
    </nav>
  );
}
