import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
