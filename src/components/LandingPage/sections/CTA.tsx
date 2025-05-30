export default function CTA() {
  return (
    <section className="w-full h-[400px] py-20 bg-cyan-500/30">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-gray-700 sm:text-4xl">
          <span className="block">Ready to transform your job search?</span>
          <span className="block">Start with TrabaHope today.</span>
        </h2>
        <p className="max-w-md mx-auto mt-4 text-xl text-gray-600">
          Join thousands of job seekers and recruiters who are already using our
          AI-powered platform.
        </p>
        <div className="flex justify-center max-w-sm mx-auto mt-6 space-x-4">
          <button className="px-4 py-2 text-lg text-gray-700 transition-transform duration-300 bg-white rounded-lg shadow hover:scale-105">
            Get started for free
          </button>
          <button className="px-4 py-2 text-lg text-white transition-transform duration-300 rounded-lg shadow bg-cyan-500 hover:scale-105">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
