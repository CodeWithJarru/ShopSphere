'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading from './Loader';

export default function LayoutClientWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // simulate loader time
    return () => clearTimeout(timer);
  }, [pathname]); // run every route change

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
