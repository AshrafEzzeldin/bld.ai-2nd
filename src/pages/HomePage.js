import React, { useState, useEffect } from "react";
import CourseSection from "../components/courseSection/CourseSection";
import Header from "../components/headerSection/Header";

const newFetch = async (course) => {
  let response = await fetch("http://localhost:3000/" + course);
  let json = await response.json();
  return json;
};

function HomePage(props) {
  let [info, setInfo] = useState({});
  let [courses, setCourses] = useState([{}]);
  useEffect(() => {
    newFetch("python").then((data) => {
      setInfo(data[0]);
      setCourses(
        data.slice(1).filter((d) => {
          return (
            !props.search ||
            d["title"].toLowerCase().includes(props.search.toLowerCase())
          );
        })
      );
    });
  }, [props.search]);

  return (
    <div className="App">
      <Header />
      <CourseSection info={info} courses={courses} />
    </div>
  );
}

export default React.memo(HomePage);
