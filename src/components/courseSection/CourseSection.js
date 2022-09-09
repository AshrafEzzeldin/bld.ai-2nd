import React from "react";
import DrawCards from "./DrawCards";
import PreCourse from "./PreCourse";
import styles from "../../assets/css/cardStyle.module.css";

function CourseSection(props) {
  return (
    <section className={styles.course_section}>
      {props.spinner ? (
        <p>loading..</p>
      ) : (
        <>
          <PreCourse info={props.info} />
          <DrawCards courses={props.courses} />
        </>
      )}
    </section>
  );
}

export default CourseSection;
