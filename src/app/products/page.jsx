import Loading from "@/components/Loading";
export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/db.json");
  const products = await res.json();
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // simulate loader time
    return () => clearTimeout(timer);
  }, [pathname]); // run every route change
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
              <p className="text-sky-500 font-bold mt-2">{product.price}</p>
              <a
                href={`/p/${product.id}`}
                className="mt-4 block w-full text-center py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
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
