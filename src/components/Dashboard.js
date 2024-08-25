import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWidget, removeWidget, searchWidgets } from "../store/actions";
import Category from "./Category";


const Dashboard = () => {
  const { categories, searchQuery } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetContent, setNewWidgetContent] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);
  const [isGlobalAdd, setIsGlobalAdd] = useState(false);

  const handleAddWidget = () => {
    if (!selectedCategoryId) return;

    const newWidget = {
      id: `widget-${Date.now()}`,
      name: newWidgetName,
      content: newWidgetContent,
    };

    dispatch(addWidget(selectedCategoryId, newWidget));
    setNewWidgetName("");
    setNewWidgetContent("");
    setSelectedCategoryId("");
    setIsAddWidgetOpen(false);
    setIsGlobalAdd(false);
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  const handleSearch = (event) => {
    dispatch(searchWidgets(event.target.value));
  };

  const openAddWidgetPanel = (categoryId = null) => {
    setIsAddWidgetOpen(true);
    setIsGlobalAdd(categoryId === null);
    if (categoryId) {
      setSelectedCategoryId(categoryId);
    } else {
      setSelectedCategoryId("");
    }
  };

  // Filter categories and widgets based on search query
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          widget.content.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.widgets.length > 0);

  return (
    <div className="p-8 relative">
      <h1 className="text-3xl font-bold mb-4">CNAPP Dashboard</h1>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 border rounded-md w-[80%]"
        />
      <button
        onClick={() => openAddWidgetPanel()}
        className="mb-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Add Widget
      </button>
      </div>
      <div className="grid grid-cols-1  gap-4">
        {filteredCategories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onAddWidget={openAddWidgetPanel}
            onRemoveWidget={handleRemoveWidget}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      {isAddWidgetOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-gray-100 to-gray-500 opacity-50 z-40"></div>
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full sm:w-[50%] w-[90%] bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out z-50 ${
          isAddWidgetOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex-grow overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Add Widget</h2>
          {isGlobalAdd && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Widget Name
            </label>
            <input
              type="text"
              placeholder="Enter widget name"
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
              className="mt-1 px-4 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Widget Content
            </label>
            <textarea
              placeholder="Enter widget content"
              value={newWidgetContent}
              onChange={(e) => setNewWidgetContent(e.target.value)}
              className="mt-1 px-4 py-2 border rounded-md w-full"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={handleAddWidget}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full mb-2"
          >
            Add Widget
          </button>
          <button
            onClick={() => {
              setIsAddWidgetOpen(false);
              setIsGlobalAdd(false);
              setSelectedCategoryId("");
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
