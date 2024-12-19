import React from "react";
import "./App.css";
import HomePage from "./pages/user/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import Resume from "./pages/user/Resume";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/admin/Home";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
