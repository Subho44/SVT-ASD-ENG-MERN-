import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcourse = () => {
  const [course, setCourse] = useState({
    title: "",
    price: "",
    duration: "",
  });

  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const hc = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", course.title);
      formData.append("price", course.price);
      formData.append("image",image);
      await axios.post("http://localhost:5600/api/courses", formData);
      alert("Course added successfully");
      navigate("/about");
    } catch (error) {
      console.log(error);
      alert("Course add failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-16 overflow-hidden relative">
      {/* blur effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-ping"></div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
        {/* left content */}
        <div className="text-white animate-slideLeft">
          <p className="inline-block px-5 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 mb-5">
            🚀 Create New Course
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Add Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Professional Course
            </span>
          </h1>

          <p className="mt-5 text-gray-300 max-w-lg">
            Add industry based courses for students with price, duration and
            useful course details.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-blue-300">50+</h3>
              <p className="text-sm text-gray-400">Courses</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-purple-300">500+</h3>
              <p className="text-sm text-gray-400">Students</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-300">20+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 animate-slideRight">
          <h2 className="text-3xl font-bold text-white mb-2">Add Course</h2>
          <p className="text-gray-300 mb-6">
            Fill course information and submit.
          </p>

          <form onSubmit={hs} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Course Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter course title"
                value={course.title}
                onChange={hc}
                className="w-full bg-slate-900/80 text-white border border-white/20 p-4 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Course Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter course price"
                value={course.price}
                onChange={hc}
                className="w-full bg-slate-900/80 text-white border border-white/20 p-4 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">File Upload</label>
              <input
                type="file"
                name="image"
                onChange={(e)=>setImage(e.target.files[0])}
                className="w-full bg-slate-900/80 text-white border border-white/20 p-4 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>

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

export default Addcourse;
