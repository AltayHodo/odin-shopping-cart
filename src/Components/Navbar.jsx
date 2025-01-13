import { Link } from "react-router-dom";
import styles from "../Styles/NavBar.module.css"

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to="home-page" className={styles.link}>Home Page</Link>
      <Link to="catalog" className={styles.link}>Catalog</Link>
      <Link to="shopping-cart" className={styles.link}>Shopping Cart</Link>
    </div>
  );
}
