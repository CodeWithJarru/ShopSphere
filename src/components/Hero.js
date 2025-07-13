"use client";

export default function Hero() {
  return (
    <div className="bg-sky-500 dark:bg-gray-900 w-full h-[400px] flex justify-center items-center transition">
      <div className="text-center px-4 md:w-1/2">
        <h2 className="text-white text-3xl font-bold">
          Save 50% Discount on Headphones
        </h2>
        <p className="text-white mt-4">
          Enjoy unbeatable savings on premium sound gear. Offer ends soon!
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-sky-500 font-semibold rounded hover:bg-sky-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
