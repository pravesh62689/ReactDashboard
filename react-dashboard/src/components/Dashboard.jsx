import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div className="container mx-auto px-4 py-6">
      {categories.map((category, index) => (
        <Category key={index} category={category} categoryId={index} />
      ))}
    </div>
  );
};

export default Dashboard;
