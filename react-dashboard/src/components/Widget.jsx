import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/widgetsSlice';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement, // Registering PointElement for line charts
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Pie, Bar, Line } from 'react-chartjs-2';

// Register the necessary elements
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement, // Ensure PointElement is registered
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const data = {
    labels: widget.data ? Object.keys(widget.data) : [],
    datasets: [
      {
        label: widget.name,
        data: widget.data ? Object.values(widget.data) : [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const renderChart = () => {
    switch (widget.type) {
      case 'donut-chart':
        return <Doughnut data={data} options={options} />;
      case 'pie-chart':
        return <Pie data={data} options={options} />;
      case 'bar-chart':
        return <Bar data={data} options={options} />;
      case 'line-chart':
        return <Line data={data} options={options} />;
      default:
        return <p>Unknown chart type</p>;
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{widget.name}</h3>
        <button onClick={handleRemove} className="text-red-600 hover:text-red-800 text-lg">
          &times;
        </button>
      </div>
      <div className="h-64">
        {renderChart()}
      </div>
      <p className="mt-4 text-gray-600 text-sm">{widget.text}</p>
    </div>
  );
};

export default Widget;
