export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-sky-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 dark:text-white text-lg">Loading page...</p>
    </div>
  );
}
