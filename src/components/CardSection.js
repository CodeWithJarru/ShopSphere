'use client';

import { useEffect, useState } from "react";

export default function CardSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 3))); // 👈 Only 3 featured
  }, []);

  return (
    <section className="py-10 px-4 md:px-12 bg-gray-100 dark:bg-gray-900 transition">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {product.title}
              </h3>
              <p className="text-sky-500 font-bold mt-2">{product.price}</p>
              <button className="mt-4 w-full py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
