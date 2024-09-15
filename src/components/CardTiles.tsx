"use client";

import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

interface Card {
  id: number;
  user: string;
  status: string;
  time: string;
}

const cardsData: Card[] = [
  { id: 1, user: "sayedameen_Pro", status: "Running", time: "3.1 hrs" },
  { id: 2, user: "sayedameen_Pro", status: "Not Running", time: "3.1 hrs" },
  { id: 3, user: "sayedameen_Pro", status: "Running", time: "3.1 hrs" },
  { id: 4, user: "sayedameen_Pro", status: "Not Running", time: "3.1 hrs" },
];

const CardTiles: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    if (showDropdown === id) {
      setShowDropdown(null);
    } else {
      setShowDropdown(id);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="relative bg-white p-4 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">User: {card.user}</h3>
              <p
                className={`text-sm ${
                  card.status === "Running" ? "text-green-500" : "text-red-500"
                }`}
              >
                {card.status}
              </p>
              <p className="text-sm text-gray-500">{card.time}</p>
            </div>
            <button onClick={() => toggleDropdown(card.id)}>
              <FaEllipsisV />
            </button>
          </div>
          {showDropdown === card.id && (
            <div className="absolute right-4 top-10 bg-white border border-gray-300 rounded-lg shadow-md w-40">
              <ul className="text-gray-700">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Share Project
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Copy Project
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Refresh
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Logs</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Delete</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardTiles;
