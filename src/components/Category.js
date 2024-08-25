import React from "react";
import Widget from "./Widget";


const Category = ({ category, onAddWidget, onRemoveWidget }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            onRemove={onRemoveWidget}
          />
        ))}
      <div className="bg-gray-100 rounded-md p-4 flex justify-center items-center cursor-pointer" onClick={()=>onAddWidget(category.id)}>
        <h3 className="text-lg font-bold mb-2"> Add Widget </h3>
      </div>
      </div>
    </div>
  );
};

export default Category;
