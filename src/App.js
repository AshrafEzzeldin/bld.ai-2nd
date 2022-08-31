import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbarSection/Navbar";
import CoursePage from "./pages/CoursePage";

function App() {
  let [search, setSearch] = useState("");

  return (
    <div className="App">
      <Navbar search={setSearch} />
      <HomePage search={search} />
      {/* <CoursePage /> */}
    </div>
  );
}

export default App;
