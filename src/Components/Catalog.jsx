import { useState, useEffect } from 'react';

export default function Catalog() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setItems(data.slice(0, 6));
      } catch (error) {
        alert('Error fetching items', error);
      }
    };

    fetchItems();
  }, []);

  return <div className="catalog">Catalog</div>;
}
