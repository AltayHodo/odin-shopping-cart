import { useParams, useOutletContext } from 'react-router-dom';

export default function ItemFull() {
  const { id } = useParams();
  const items = useOutletContext();

  const itemId = parseInt(id);
  const item = items.find((i) => i.id == itemId);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <div>${item.price}</div>
      <button>Add to cart</button>
    </div>
  );
}
