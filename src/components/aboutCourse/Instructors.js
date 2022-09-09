import React from "react";
import styles from "../../assets/css/about.module.css";
import Icon from "../Icon";
import { FaPeopleArrows, FaStar, FaRev, FaPlay } from "react-icons/fa";
function Instructors(props) {
  let ii = props.info.instructor ? props.info.instructor : [{}];

  return (
    <div className={[styles.shift_about, "mt-5"].join(" ")}>
      <h4>Instructors</h4>
      {ii.map((i) => {
        return (
          <>
            <a href="" className="d-block">
              {i.name}
            </a>
            <p className="text-secondary">{i.Intro}</p>
            <div className={["d-flex", "align-items-center"].join(" ")}>
              <img
                src={i.Image}
                alt={i.name}
                className={["rounded-circle", "w-25"].join(" ")}
              ></img>
              <div className={["d-inline-block", "ms-4"].join(" ")}>
                {Icon(<FaStar />, "17px")}{" "}
                <p className="d-inline">{i.Rating} Instructors Rating </p>
                <br />
                {Icon(<FaRev />, "17px")}{" "}
                <p className="d-inline">{i.reviewsNumber} Reviews </p>
                <br />
                {Icon(<FaPeopleArrows />, "17px")}{" "}
                <p className="d-inline">{i.studentsNumber} Students </p>
                <br />
                {Icon(<FaPlay />, "17px")}{" "}
                <p className="d-inline">{i.coursesNumber} Courses </p>
              </div>
            </div>
            <p>{i.description}</p>
          </>
        );
      })}
    </div>
  );
}

export default Instructors;
