import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import Student from "./Routes/Student";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/add" &&
    location.pathname !== "/student" &&
    !location.pathname.startsWith("/student/");

  return (
    <>
      {!(isHome || isNotFound) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
