import { useState, useEffect } from 'react';
import './Styles/App.css';
import NavBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [items, setItems] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setItems(data.slice(0, 8));
      } catch (error) {
        alert('Error fetching items', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1>E-Commerce Website</h1>
      <NavBar />
      <Outlet context={{ items, cartItems, setCartItems }} />
    </>
  );
}

export default App;
