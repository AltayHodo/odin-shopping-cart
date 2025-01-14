import styles from '../Styles/Item.module.css';

export default function Item({ title, description, price, image, rating }) {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <img className={styles.image} src={image} alt={title} />
      <div>${price}</div>
    </div>
  );
}
