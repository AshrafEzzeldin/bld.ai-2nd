import React from "react";
import styles from "../../assets/css/about.module.css";
import Stars from "../Stars";
import ProgressBar from "react-bootstrap/ProgressBar";

function Feedback(props) {
  let i = props.info.instructor ? props.info.instructor[0] : {};
  return (
    <div className={[styles.shift_about, "mt-5"].join(" ")}>
      <h4>Student feedback</h4>

      <div className={["d-flex", "align-items-center"].join(" ")}>
        <div className="d-inline-block">
          <p className={["display-3", styles.gold].join(" ")}>{i.Rating}</p>
          <Stars number={i.Rating} />
          <p className={styles.gold}>Course Rating</p>
        </div>
        <div className={["d-inline-block", "w-100"].join(" ")}>
          {(props.info.studentFeedback ? props.info.studentFeedback : []).map(
            (f) => {
              return (
                <div className={["d-flex", "align-items-center"].join(" ")}>
                  <ProgressBar now={f} className={["w-100", "m-2"].join(" ")} />
                  <a href="" className="d-inline-block">
                    {f}%
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
