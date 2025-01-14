import App from './App';
import HomePage from './Components/Homepage';
import Catalog from './Components/Catalog';
import ShoppingCart from './Components/ShoppingCart';
import ItemFull from './Components/ItemFull';

const routes = [
  { 
    path: '/', 
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'home-page',
        element: <HomePage />
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'catalog/:id',
        element: <ItemFull />
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCart />
      }
    ]
  }
];

export default routes
