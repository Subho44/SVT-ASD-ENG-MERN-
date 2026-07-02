import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="relative px-6 md:px-16 py-20">
        {/* animated background */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left content */}
          <div>
            <p className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full mb-6">
              🚀 Modern E-Learning Platform
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Learn Skills Online & Build Your Future
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Join our industry based e-learning platform and learn MERN Stack,
              UI/UX, Python, AI/ML, Cloud Computing and more with real projects.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                <Link to="/about">Explore Courses</Link>
              </button>

              <button className="px-8 py-4 border border-gray-500 hover:bg-white hover:text-black rounded-full font-semibold transition">
                Watch Demo
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">500+</h3>
                <p className="text-gray-400">Students</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-400">50+</h3>
                <p className="text-gray-400">Courses</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-400">20+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>
          </div>

          {/* right design card */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500 rounded-full animate-ping opacity-70"></div>

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Online Learning"
                className="w-full h-80 object-cover rounded-2xl"
              />

              <div className="mt-6 bg-slate-900 rounded-2xl p-5">
                <h2 className="text-2xl font-bold">Full Stack Development</h2>
                <p className="text-gray-400 mt-2">
                  Live Class • Project Work • Certificate
                </p>

                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Course Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
