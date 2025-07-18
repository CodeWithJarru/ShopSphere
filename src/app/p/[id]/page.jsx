'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        if (!found) {
          setError('Product not found');
        } else {
          setProduct(found);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-xl font-semibold text-green-600">{product.price}</p>
    </div>
  );
}
