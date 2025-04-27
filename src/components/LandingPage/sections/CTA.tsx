export default function CTA() {
  return (
    <section className="w-full h-[400px] py-20 main-gradient-bg">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to transform your job search?</span>
          <span className="block">Start with TrabaHope today.</span>
        </h2>
        <p className="text-blue-100 mt-4 max-w-md mx-auto text-xl">
          Join thousands of job seekers and recruiters who are already using our
          AI-powered platform.
        </p>
        <div className="max-w-sm mx-auto flex justify-center mt-6 space-x-4">
          <button className="px-4 py-2 text-lg text-dusty-sky-blue bg-white rounded-lg shadow transition-transform duration-300 hover:scale-105">
            Get started for free
          </button>
          <button className="px-4 py-2 text-lg text-white bg-blue-400 rounded-lg shadow transition-transform duration-300 hover:scale-105">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
