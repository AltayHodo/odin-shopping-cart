import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="home-page">Home Page</Link>
      <Link to="catalog">Catalog</Link>
      <Link to="shopping-cart">Shopping Cart</Link>
    </div>
  );
}
