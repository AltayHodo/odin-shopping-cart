import { useOutletContext } from 'react-router-dom';


export default function ShoppingCart() {
  const {cartItems} = useOutletContext();


  if (cartItems.length == 0) {
    return <div>Shopping cart is empty</div>
  }

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <div>
            <span>{item.title}</span>
            <span>${item.price}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
          
          
        </div>
      ))}
    </div>
  )
}
