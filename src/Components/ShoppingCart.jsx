import { useOutletContext } from 'react-router-dom';
import styles from '../Styles/ShoppingCart.module.css';


export default function ShoppingCart() {
  const {cartItems} = useOutletContext();


  if (cartItems.length == 0) {
    return <div className={styles.empty}>Shopping cart is empty :(</div>
  }

  const totalPrice = cartItems.reduce((total, cur) => total + cur.price * cur.quantity, 0)

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div>
              <img className={styles.image} src={item.image} alt={item.title} />
            </div>
            <div>
              <span>{item.title}</span>
              <span>${item.price}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
          </div>
        ))}
        <div className={styles.total}>Total price: ${totalPrice}</div>
      </div>
    </div>
  )
}
