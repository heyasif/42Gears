"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Project {
  id: number;
  project: string;
  progress: string;
  description: string;
}

const projectsData: Project[] = require("../data/projectsData.json");

const Table: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleToggleRow = (id: number) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-medium border-r border-white">
              S. No
            </th>
            <th className="py-3 px-4 text-left font-medium border-r border-white">
              Project
            </th>
            <th className="py-3 px-4 text-left font-medium border-r border-white">
              Progress
            </th>
            <th className="py-3 px-4 text-left font-medium">Analysis</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project, index) => (
            <React.Fragment key={project.id}>
              <tr className="border-b">
                <td className="py-4 px-4 text-gray-700 border-r border-gray-200">
                  {index + 1}
                </td>
                <td className="py-4 px-4 text-gray-700 border-r border-gray-200">
                  {project.project}
                </td>
                <td className="py-4 px-4 text-gray-700 border-r border-gray-200">
                  {project.progress}
                </td>
                <td className="py-4 px-4 text-gray-700">
                  <button
                    onClick={() => handleToggleRow(project.id)}
                    className="flex items-center text-blue-500"
                  >
                    {expandedRows.includes(project.id)
                      ? "View Less"
                      : "View More"}
                    <FaChevronDown
                      className={`ml-2 transform ${
                        expandedRows.includes(project.id)
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    />
                  </button>
                </td>
              </tr>
              {expandedRows.includes(project.id) && (
                <tr>
                  <td colSpan={4} className="py-4 px-4">
                    <div className="p-4 bg-gray-100 rounded-lg shadow-inner text-gray-800">
                      {project.description}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
