'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  const addToCart = (product) => {
    console.log("Added to cart:", product.title);
    // Later: Dispatch to cart context or store in localStorage
  };

  return (
    <section className="py-10 px-4 md:px-12 bg-gray-100 dark:bg-gray-900 transition">
      {loading && <Loading />}

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {product.title}
              </h3>

              <p className="text-sky-500 font-bold mt-2">${product.price}</p>

              {/* ⭐ Review Stars */}
              <div className="flex items-center mt-2 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                ))}
                <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
              </div>


              {/* 🔍 View Details */}
              <a
                href={`/p/${product.id}`}
                className="mt-2 block w-full text-center py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
