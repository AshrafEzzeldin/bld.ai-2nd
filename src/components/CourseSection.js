import React from "react";
import DrawCards from "./DrawCards";
import PreCourse from "./PreCourse";
import styles from "./cardStyle.module.css";
function CourseSection(props) {
  return (
    <section className={styles.course_section}>
      <PreCourse info={props.info} />
      <DrawCards courses={props.courses} />
    </section>
  );
}

export default CourseSection;
