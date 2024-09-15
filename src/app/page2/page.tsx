"use client";

import React, { useState } from "react";
import {
  FaEllipsisV,
  FaPlay,
  FaStop,
  FaChevronRight,
  FaShareAlt,
  FaCopy,
  FaSync,
  FaFileAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const Menu2: React.FC = () => {
  const projects = [
    {
      status: "Running",
      user: "sayedameen_Pro",
      duration: "3.1 hrs",
      progress: 60,
      message: "Downloading packages...",
    },
    {
      status: "Not Running",
      user: "sayedameen_Pro",
      duration: "3.1 hrs",
      progress: null,
      message: "Some issue encountered.",
    },
    {
      status: "Running",
      user: "sayedameen_Pro",
      duration: "3.1 hrs",
      progress: null,
      message: "Packages are being installed.",
    },
    {
      status: "Not Running",
      user: "sayedameen_Pro",
      duration: "3.1 hrs",
      progress: 30,
      message: "Error package demo...",
    },
  ];

  const statusClass = (status: string) =>
    status === "Running" ? "text-green-500" : "text-red-500";

  const iconBgClass = (status: string) =>
    status === "Running" ? "bg-green-100" : "bg-gray-100";

  const [showDropdown, setShowDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Test Project</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 relative"
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                {/* Icon */}
                <div
                  className={`w-8 h-8 flex justify-center items-center rounded-full ${iconBgClass(
                    project.status
                  )} mr-2`}
                >
                  <MdPerson className="text-gray-700" />
                </div>
                <p className="text-gray-700 font-medium">{project.user}</p>
              </div>
              <div>
                <FaEllipsisV
                  onClick={() => toggleDropdown(index)}
                  className="cursor-pointer"
                />
                {showDropdown === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    <ul className="text-gray-700">
                      {" "}
                      {/* Ensure the text color is set here */}
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <FaShareAlt className="mr-2 text-gray-500" /> Share
                        Project
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <FaCopy className="mr-2 text-gray-500" /> Copy Project
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <FaSync className="mr-2 text-gray-500" /> Refresh
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <FaFileAlt className="mr-2 text-gray-500" /> Logs
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <FaEdit className="mr-2 text-gray-500" /> Edit
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <FaTrash className="mr-2 text-gray-500" /> Delete
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <p className={statusClass(project.status)}>{project.status}</p>
            <p className="text-gray-500">{project.duration}</p>
            <p className="text-gray-700">{project.message}</p>
            {project.progress !== null && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-xs text-gray-500">
                  {project.progress}%
                </p>
              </div>
            )}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <button className="text-green-500">
                  <FaPlay />
                </button>
                <button className="text-red-500">
                  <FaStop />
                </button>
              </div>
              <button className="text-blue-500 flex items-center">
                Details <FaChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu2;
