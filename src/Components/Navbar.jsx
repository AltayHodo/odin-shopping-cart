import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css"

export default function NavBar({numItems}) {
  return (
    <div className={styles.navbar}>
      <Link to="home-page" className={styles.link}>Home Page</Link>
      <Link to="catalog" className={styles.link}>Catalog</Link>
      <Link to="shopping-cart" className={styles.shoppingLink}>Shopping Cart  <span className={styles.number}>{numItems}</span></Link>
    </div>
  );
}
