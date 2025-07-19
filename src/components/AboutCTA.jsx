import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-16 text-center bg-sky-50">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to get started?</h2>
      <p className="mb-6 text-gray-700">Explore our products or reach out to the team today!</p>
      <Link href="/contact" className="bg-sky-600 text-white px-6 py-3 rounded hover:bg-sky-700">
        Contact Us
      </Link>
    </section>
  );
}
