import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        navigate('/results');
      } else {
        console.error('Error uploading file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to SpendBuddy</h1>
      <p className="text-xl mb-8">Upload your PDF to analyze your spending</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-2 rounded bg-white text-gray-800"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Analyze Spending
        </button>
      </form>
    </div>
  );
}

export default LandingPage;