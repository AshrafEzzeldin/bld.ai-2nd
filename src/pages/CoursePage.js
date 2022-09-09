import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Intro from "../components/aboutCourse/Intro";
import FlotingCart from "../components/aboutCourse/FlotingCart";
import Learn from "../components/aboutCourse/Learn";
import CourseContent from "../components/aboutCourse/CourseContent";
import { newFetch } from "./HomePage";
import Requirements from "../components/aboutCourse/Requirements";
import Description from "../components/aboutCourse/Description";
import Instructors from "../components/aboutCourse/Instructors";
import Feedback from "../components/aboutCourse/Feedback";
import Reviews from "../components/aboutCourse/Reviews";
function CoursePage() {
  let [course, setCourse] = useState([{}]);
  let navigate = useNavigate();
  let idx = useParams().CourseId;

  useEffect(() => {
    newFetch("courses").then(async (data) => {
      setCourse(data);
      if (!(idx < data.length)) {
        navigate("/notFound");
      }
    });
  }, [idx, navigate]);
  return (
    <div>
      <Intro info={course[idx < course.length ? idx : 0]} />
      <FlotingCart info={course[idx < course.length ? idx : 0]} />
      <Learn info={course[idx < course.length ? idx : 0]} />
      <CourseContent info={course[idx < course.length ? idx : 0]} />
      <Requirements info={course[idx < course.length ? idx : 0]} />
      <Description info={course[idx < course.length ? idx : 0]} />
      <Instructors info={course[idx < course.length ? idx : 0]} />
      <Feedback info={course[idx < course.length ? idx : 0]} />
      <Reviews info={course[idx < course.length ? idx : 0]} />
    </div>
  );
}

export default CoursePage;
