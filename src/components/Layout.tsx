import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
