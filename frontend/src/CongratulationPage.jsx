import React from "react";
import { FaStar, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

const CongratulationsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-yellow-400 p-4">
      <div className="text-center">
        <div className="animate-bounce mb-6">
          <FaTrophy className="text-yellow-500 text-6xl mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
        <p className="text-lg text-gray-300 mb-8">
          You have successfully completed the task. Great job!
        </p>
      </div>

      {/* Animated Stars */}
      <div className="flex justify-center space-x-3 mb-8">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className="text-yellow-500 text-3xl animate-spin"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Button to Go Back to Home or Main Page */}
      <Link
        to="/homePage"
        className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default CongratulationsPage;