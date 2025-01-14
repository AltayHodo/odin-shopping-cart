import { useParams } from 'react-router-dom';
import styles from '../Styles/ItemFull.module.css';
import { useState, useEffect } from 'react';

export default function ItemFull() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

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

  return (
    <div className={styles.itemFull}>
      <div>
        <img className={styles.image} src={item.image} alt={item.name} />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{item.title}</div>
        <div>${item.price}</div>
        <input type="number" min="0" max="10" />
        <button>Add to cart</button>
      </div>
    </div>
  );
}
