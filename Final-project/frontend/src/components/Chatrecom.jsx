import { useState } from "react";
import axios from "axios";

function Chatrecom() {
  const [form, setForm] = useState({
    name: "",
    education: "",
    skills: "",
    interest: "",
    goal: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const hc = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hs = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("http://localhost:5600/api/recommend", form);
      setResult(res.data.reply);
    } catch (err) {
      setResult("Something went wrong. Please check backend server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <p className="text-blue-300 font-semibold mb-3">
            AI Course Recommendation System
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Find Best Course For Your Career
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            Enter student details and Groq AI will analyze skills, interest,
            education and career goal to suggest the best course.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <h3 className="font-bold text-xl">MERN</h3>
              <p className="text-sm text-gray-300">Web Development</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <h3 className="font-bold text-xl">AI/ML</h3>
              <p className="text-sm text-gray-300">Python Based</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <h3 className="font-bold text-xl">AWS</h3>
              <p className="text-sm text-gray-300">Cloud Career</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <h3 className="font-bold text-xl">UI/UX</h3>
              <p className="text-sm text-gray-300">Design Career</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Student Analysis Form
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Fill all details to get AI recommendation
          </p>

          <form onSubmit={hs} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              onChange={hc}
              required
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="education"
              placeholder="Education e.g. BCA, MCA, B.Tech"
              onChange={hc}
              required
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills e.g. HTML, CSS, JavaScript"
              onChange={hc}
              required
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="interest"
              placeholder="Interest e.g. Web, AI, Design, Cloud"
              onChange={hc}
              required
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="goal"
              placeholder="Goal e.g. Job, Freelancing, Startup"
              onChange={hc}
              required
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold transition disabled:bg-gray-500"
            >
              {loading ? "Analyzing..." : "Get AI Recommendation"}
            </button>
          </form>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="max-w-4xl mx-auto mt-10 bg-white text-gray-900 rounded-3xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            AI Recommendation Result
          </h2>

          <pre className="whitespace-pre-wrap text-gray-700 leading-7">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Chatrecom;
