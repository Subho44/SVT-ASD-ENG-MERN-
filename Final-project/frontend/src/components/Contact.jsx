import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-4 py-16 overflow-hidden">
      {/* animated background */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <p className="inline-block px-5 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 mb-4">
            📞 Contact Support
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Touch
            </span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have any questions about courses, admission, projects or career
            guidance? Contact our support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* left contact info */}
          <div className="space-y-6 animate-slideLeft">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl font-bold mb-3">📍 Our Address</h3>
              <p className="text-gray-300">Kolkata, West Bengal, India</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl font-bold mb-3">📧 Email Us</h3>
              <p className="text-gray-300">support@elearning.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl font-bold mb-3">📱 Call Us</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
          </div>

          {/* right form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl animate-slideRight">
            <h2 className="text-3xl font-bold mb-6">Send Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-gray-300">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/20 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/20 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/20 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-white/20 outline-none focus:border-blue-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* custom animation */}
      <style>
        {`
          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slideLeft {
            animation: slideLeft 0.9s ease forwards;
          }

          .animate-slideRight {
            animation: slideRight 0.9s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
