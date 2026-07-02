import React from "react";

const Service = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Learn MERN Stack, MEAN Stack, Next.js, Laravel and build real industry projects.",
    },
    {
      icon: "🤖",
      title: "AI & ML Training",
      desc: "Start AI/ML with Python, data handling, model basics and smart project building.",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      desc: "Learn AWS cloud, EC2, hosting, deployment and server management practically.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Design modern website layouts, mobile apps, wireframes and prototypes using Figma.",
    },
    {
      icon: "🧑‍💻",
      title: "Project Guidance",
      desc: "Get complete help for final year projects, report, PPT and presentation preparation.",
    },
    {
      icon: "🚀",
      title: "Career Support",
      desc: "Interview preparation, resume building, freelancing guidance and placement support.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-4 py-16 overflow-hidden relative">
      {/* blur animated effect */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-14 animate-fadeDown">
          <p className="inline-block px-5 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 mb-4">
            ⚡ Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Industry Based{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Learning Services
            </span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We provide practical training, live projects, career support and
            modern technology learning for students and professionals.
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:-translate-y-4 hover:scale-105 transition-all duration-500 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl mb-6 group-hover:rotate-12 group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{item.desc}</p>

              <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* custom animations */}
      <style>
        {`
          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeDown {
            animation: fadeDown 0.9s ease forwards;
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
            opacity: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Service;
