'use client';

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Loyal Customer",
    comment: "Amazing quality! Got my headphones within 2 days. Love the sound!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ali Raza",
    role: "Tech Enthusiast",
    comment: "The smartwatch is worth every rupee. Smooth delivery and premium feel.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Fatima Noor",
    role: "Verified Buyer",
    comment: "Customer support was great. They helped me replace a faulty item fast!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        What Our Customers Say
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-900 font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              “{t.comment}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
