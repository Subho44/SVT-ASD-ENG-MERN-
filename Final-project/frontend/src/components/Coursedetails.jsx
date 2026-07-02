import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Coursedetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5600/api/courses/${id}`);
      console.log("single course:", res.data);

      setCourse(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Course fetch error:", error);
      setCourse(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleCourse();
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
  }

  if (!course) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-red-600">Course Not Found</h2>
        <Link to="/about">Back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          {course.title}
        </h1>

       

        <p>
          <b>Price:</b> ₹{course.price}
        </p>

        

        <Link
          to="/about"
          className="inline-block mt-5 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Coursedetails;
