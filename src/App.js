import React, { useState, createContext } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbarSection/Navbar";
import CoursePage from "./pages/CoursePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const SearchContext = createContext();
function App() {
  let [search, setSearch] = useState("");

  return (
    <div className="App">
      <SearchContext.Provider value={{ search: search, setSearch: setSearch }}>
        <Navbar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="course/:CourseId" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export { SearchContext };
export default App;
