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
          {item.title}
          ${item.price}
        </div>
      ))}
    </div>
  )
}
