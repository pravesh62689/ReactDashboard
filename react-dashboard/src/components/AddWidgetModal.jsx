import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../features/widgetsSlice';

const AddWidgetModal = ({ categoryId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWidgetId, setSelectedWidgetId] = useState("");
  const widgets = useSelector((state) => state.widgets.categories[categoryId].widgets);
  const dispatch = useDispatch();
  const selectedWidget = widgets.find(widget => widget.id === selectedWidgetId) || {};

  const handleAddWidget = () => {
    if (!selectedWidgetId) return; 
    const widget = {
      id: `widget-${widgets.length + 1}`,
      name: selectedWidget.name,
      text: "Random data text here",
      type: selectedWidget.type,
      data: selectedWidget.data,
    };
    dispatch(addWidget({ categoryId, widget }));
    setIsOpen(false);
    setSelectedWidgetId(""); 
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        + Add Widget
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Widget</h2>
            <select
              value={selectedWidgetId}
              onChange={(e) => setSelectedWidgetId(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="" disabled>Select a widget</option>
              {widgets.map((widget) => (
                <option key={widget.id} value={widget.id}>{widget.name}</option>
              ))}
            </select>
            <div className="flex justify-between">
              <button onClick={handleAddWidget} className="px-4 py-2 bg-green-500 text-white rounded">
                Confirm
              </button>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 text-black rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWidgetModal;
