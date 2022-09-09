import React, { useState } from "react";
import styles from "../../assets/css/about.module.css";
import Sections from "./Sections";
function CourseContent(props) {
  const l = 10;
  let [key, setKey] = useState("0");

  return (
    <div className={[styles.shift_about, "mt-5"].join(" ")}>
      <h4>Course Content</h4>
      <p className={["d-inline"].join(" ")}>
        {props.info.sectionsCount} sections • {props.info.lecturesCount}{" "}
        lectures • {props.info.totalLength} total length
      </p>

      <a
        type="button"
        className={[styles.right].join(" ")}
        onClick={() => {
          if (key === "0") setKey("1");
          else setKey("0");
        }}
      >
        Toggle all sections
      </a>
      <Sections toggle={key} info={props.info} />
    </div>
  );
}

export default CourseContent;
