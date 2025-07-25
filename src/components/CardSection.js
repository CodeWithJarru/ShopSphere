'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

export default function CardSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    fetch("/db.json")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 3)));
  }, []);

  return (
    <section className="py-10 px-4 md:px-12 bg-gray-100 dark:bg-gray-900 transition">
      {loading && <Loading />}

      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/p/${product.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition block"
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

              {/* ⭐ RATING STARS */}
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46 1.287 3.975c.3.921-.755 1.688-1.539 1.118L10 13.347l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975-3.388-2.46c-.784-.57-.38-1.81.588-1.81h4.18L9.05 2.927z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviews})
                </span>
              </div>

              <p className="text-sky-500 font-bold mt-2">${product.price}</p>
              <div className="mt-4 w-full py-2 bg-sky-500 text-white text-center rounded hover:bg-sky-600 transition">
                View Details
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
