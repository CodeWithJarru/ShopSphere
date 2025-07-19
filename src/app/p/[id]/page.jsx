'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch('/db.json');
        const data = await res.json();
        const found = data.find(p => p.id === parseInt(id));
        setProduct(found);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    if (!product) return;

    // Get existing cart or create empty array
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If exists, increase quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // If new, push item with quantity
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('✅ Added to Cart');
  };

  if (loading) return <Loading />;

  if (!product) {
    return <div className="p-10 text-red-500 text-center">Product not found.</div>;
  }

  return (
    <div className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg shadow"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sky-600 font-semibold text-xl mb-4">{product.price}</p>

          {/* ⭐ Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46 1.287 3.975c.3.921-.755 1.688-1.539 1.118L10 13.347l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975-3.388-2.46c-.784-.57-.38-1.81.588-1.81h4.18L9.05 2.927z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="mb-6 text-gray-700 dark:text-gray-300">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
