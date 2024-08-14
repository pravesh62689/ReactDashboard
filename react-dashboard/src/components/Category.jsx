import React from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category, categoryId }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={categoryId} />
        ))}
        <AddWidgetModal categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Category;
