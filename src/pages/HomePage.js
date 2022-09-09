import React, { useState, useEffect, useContext, useRef } from "react";
import CourseSection from "../components/courseSection/CourseSection";
import Header from "../components/headerSection/Header";
import { SearchContext } from "../App";
const newFetch = async (course) => {
  let response = await fetch("http://localhost:3000/" + course);
  let json = await response.json();
  return json;
};

function HomePage(props) {
  let [info, setInfo] = useState({});
  let [courses, setCourses] = useState([{}]);
  const [spinner, setSpinner] = useState(true);
  const searchContext = useContext(SearchContext);
  let allCourses = useRef([{}]);

  useEffect(() => {
    newFetch("python").then((data) => {
      setSpinner(false);
      setInfo(data[0]);
      setCourses(data.slice(1));
      allCourses.current = data.slice(1);
    });
  }, []);

  useEffect(() => {
    setCourses(
      allCourses.current.filter((d) => {
        return (
          !searchContext.search ||
          d["title"].toLowerCase().includes(searchContext.search.toLowerCase())
        );
      })
    );
  }, [searchContext.search]);

  return (
    <div className="App">
      <Header />
      <CourseSection info={info} courses={courses} spinner={spinner} />
    </div>
  );
}

export default React.memo(HomePage);
export { newFetch };
