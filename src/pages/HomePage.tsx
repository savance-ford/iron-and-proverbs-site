export default function Home() {
  return (
    <section className="text-center px-6 py-20">

      <h1 className="text-4xl font-bold mb-4">
        Iron & Proverbs
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Strengthen your faith and discipline with daily scripture,
        streak tracking, and encouragement.
      </p>

      <div className="space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-lg">
          Download App
        </button>

        <a href="/privacy" className="border px-6 py-2 rounded-lg">
          Learn More
        </a>
      </div>
    </section>
  );
}