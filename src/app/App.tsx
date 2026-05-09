import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CartProvider } from './cart-context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel-styles.css';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
