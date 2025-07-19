export default function AboutTeam() {
  return (
    <section className="py-16 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-center text-gray-900">Member {i}</h3>
              <p className="text-sm text-center text-gray-500">Developer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
