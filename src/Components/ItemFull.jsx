import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import styles from '../Styles/ItemFull.module.css';
import { useState, useEffect } from 'react';

export default function ItemFull() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const { cartItems, setCartItems } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      const resp = await fetch('https://fakestoreapi.com/products/' + id);
      const data = await resp.json();
      setItem(data);
    }
    fetchItem();
  }, [id]);

  if (!item) {
    return <div className={styles.itemFull}>Loading...</div>;
  }

  const handleAddToCart = () => {
    const quantity = parseInt(document.querySelector('#numItems').value);
    setCartItems((prev) => {
      const isInCart = prev.find((curItem) => item.id === curItem.id);
      if (isInCart) {
        return prev.map((curItem) => {
          curItem.id == item.id
            ? { ...curItem, quantity: curItem.quantity + quantity }
            : curItem;
        });
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
    navigate('/catalog');
  };

  return (
    <div className={styles.itemFull}>
      <div>
        <img className={styles.image} src={item.image} alt={item.name} />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{item.title}</div>
        <div>${item.price}</div>
        <input id="numItems" type="number" min="1" max="10" defaultValue={1} />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
