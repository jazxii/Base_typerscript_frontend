export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to AXELerate</h1>
      <p className="mb-8 text-lg text-gray-600">
        Upload or analyze your accessibility reports with AI precision.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        Let's Analyze
      </button>
    </div>
  );
}
