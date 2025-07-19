export default function AboutTech() {
  const tech = ['Next.js', 'Tailwind CSS', 'React', 'Node.js'];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Technologies We Use</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {tech.map((item, i) => (
            <li key={i} className="bg-gray-100 p-4 rounded shadow text-gray-800 font-semibold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
