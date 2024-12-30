import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./index.css";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
