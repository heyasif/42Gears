"use client";

import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const InputField: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-l-lg text-gray-700"
          placeholder="Enter item"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          <FaPlus />
        </button>
      </div>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded-lg mt-2 shadow"
          >
            <span className="text-gray-700">{item}</span>
            <button
              onClick={() => handleDeleteItem(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputField;
