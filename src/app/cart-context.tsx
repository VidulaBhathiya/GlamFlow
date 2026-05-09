import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type CartProduct = {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  description: string;
  category: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  cartCount: number;
  cartSubtotal: string;
  isCartOpen: boolean;
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setCartOpen: (open: boolean) => void;
  getItemQuantity: (id: string) => number;
};

const CART_STORAGE_KEY = 'glamflow-cart-items';

const CartContext = createContext<CartContextValue | undefined>(undefined);

function parsePrice(price: string) {
  const numericValue = Number(price.replace(/[^0-9.]/g, ''));
  return Number.isFinite(numericValue) ? numericValue : 0;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function loadCartItems() {
  if (typeof window === 'undefined') {
    return [] as CartItem[];
  }

  try {
    const storedItems = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!storedItems) {
      return [] as CartItem[];
    }

    const parsedItems = JSON.parse(storedItems) as CartItem[];
    return Array.isArray(parsedItems) ? parsedItems : [];
  } catch {
    return [] as CartItem[];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadCartItems);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = useCallback((product: CartProduct) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }, []);

  const decreaseItem = useCallback((id: string) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const cartSubtotal = useMemo(
    () => formatCurrency(cartItems.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0)),
    [cartItems],
  );

  const getItemQuantity = useCallback(
    (id: string) => cartItems.find((item) => item.id === id)?.quantity ?? 0,
    [cartItems],
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartSubtotal,
      isCartOpen,
      addItem,
      removeItem,
      decreaseItem,
      clearCart,
      openCart,
      closeCart,
      setCartOpen,
      getItemQuantity,
    }),
    [
      addItem,
      cartCount,
      cartItems,
      cartSubtotal,
      clearCart,
      closeCart,
      decreaseItem,
      getItemQuantity,
      isCartOpen,
      openCart,
      removeItem,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }

  return context;
}