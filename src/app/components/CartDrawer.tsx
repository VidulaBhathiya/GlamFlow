import { Link } from 'react-router';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from './ui/sheet';
import { useCart } from '../cart-context';

function formatLineTotal(price: string, quantity: number) {
  const numericValue = Number(price.replace(/[^0-9.]/g, ''));
  return `$${(Number.isFinite(numericValue) ? numericValue : 0) * quantity}`;
}

export default function CartDrawer() {
  const {
    cartItems,
    cartCount,
    cartSubtotal,
    isCartOpen,
    setCartOpen,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-[#FAF7F4]">
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b border-[#E7D8C7] px-6 py-6">
            <SheetTitle style={{ fontFamily: 'Fraunces, serif', color: '#5A2C3D' }}>
              Your Cart
            </SheetTitle>
            <SheetDescription>
              {cartCount > 0 ? `${cartCount} item${cartCount === 1 ? '' : 's'} ready to review.` : 'Your cart is empty.'}
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-[#E7D8C7] bg-white p-4 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A66B]">{item.brand}</p>
                          <h3 className="truncate text-base font-semibold text-[#2D2D2D]">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.price}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="rounded-full p-2 text-gray-500 transition-colors hover:bg-[#F5EDE4] hover:text-[#5A2C3D]"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-[#E7D8C7] bg-[#FAF7F4]">
                          <button
                            type="button"
                            onClick={() => decreaseItem(item.id)}
                            className="rounded-full p-2 text-[#5A2C3D] transition-colors hover:bg-white"
                            aria-label={`Decrease ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 px-3 text-center text-sm font-semibold text-[#5A2C3D]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => addItem(item)}
                            className="rounded-full p-2 text-[#5A2C3D] transition-colors hover:bg-white"
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-[#5A2C3D]">
                          {formatLineTotal(item.price, item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EDE4] text-[#5A2C3D]">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]" style={{ fontFamily: 'Fraunces, serif' }}>
                  No products yet
                </h3>
                <p className="mt-2 max-w-xs text-sm text-gray-600">
                  Add products from the shop and they will appear here immediately.
                </p>
              </div>
            )}
          </div>

          <SheetFooter className="border-t border-[#E7D8C7] bg-white px-6 py-5">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="text-lg font-semibold text-[#5A2C3D]">{cartSubtotal}</span>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={clearCart}
                disabled={cartItems.length === 0}
                className="flex-1 rounded-full border border-[#C9A66B] px-4 py-3 text-sm font-semibold text-[#5A2C3D] transition-colors hover:bg-[#F5EDE4] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Clear Cart
              </button>
              <Link
                to="/booking"
                className="flex-1 rounded-full bg-[#5A2C3D] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#472332]"
              >
                Book Appointment
              </Link>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}