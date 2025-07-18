'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    setLoading(false);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading cart...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-12 bg-gray-50 dark:bg-gray-900">
      {/* Cart Items */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sky-600 font-bold">${item.price.toFixed(2)} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Sidebar */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow h-fit">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Summary</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Items: {totalCount}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Total: <span className="text-sky-600 font-bold">${totalPrice.toFixed(2)}</span></p>
        <button className="w-full px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
