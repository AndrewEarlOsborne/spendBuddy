import React from 'react';
import { Link } from 'react-router-dom';

function ResultsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Your Spending Analysis</h1>
      <p className="text-xl mb-8">Here are your results...</p>
      {/* Add your analysis results here */}
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ResultsPage;