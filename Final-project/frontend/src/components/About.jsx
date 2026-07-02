import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const About = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5600/api/courses");
      setCourses(Array.isArray(res.data) ? res.data : res.data.courses || []);
    } catch (error) {
      console.log(error);
      setCourses([]);
    }
  };

  const deleteCourse = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5600/api/courses/${id}`);
      alert("Course deleted");
      getCourses();
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">All Courses</h2>
          <p className="text-gray-300 mt-3">View all uploaded courses</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.length === 0 ? (
            <h2 className="text-center col-span-full text-2xl">
              No Courses Found
            </h2>
          ) : (
            courses.map((course) => {
              const imageUrl = course.image
                ? `http://localhost:5600/uploads/${course.image}`
                : null;

              return (
                <div
                  key={course._id}
                  className="bg-white/10 border border-white/20 rounded-3xl p-6"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="img"
                      className="w-full h-56 object-cover rounded-2xl mb-5"
                     
                    />
                  ) : (
                    <div className="w-full h-56 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-5xl mb-5">
                      🎓
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>

                  <p className="text-gray-300 mb-5">
                    <b>Price:</b> ₹{course.price}
                  </p>

                  <div className="flex gap-3">
                    <Link
                      to={`/course/${course._id}`}
                      className="bg-blue-600 px-5 py-2 rounded-full"
                    >
                      View
                    </Link>

                    <Link
                      to={`/edit/${course._id}`}
                      className="bg-yellow-500 px-5 py-2 rounded-full"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteCourse(course._id)}
                      className="bg-red-600 px-5 py-2 rounded-full"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
