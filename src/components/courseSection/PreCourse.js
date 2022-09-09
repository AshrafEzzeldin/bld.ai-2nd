import React from "react";
import styles from "../../assets/css/cardStyle.module.css";

function PreCourse(props) {
  return (
    <div className={styles.center}>
      <h3>{props.info.header}</h3>
      <p>{props.info.description}</p>
      <form>
        <button className={styles.black_button}>
          Explore {props.info.clicked}
        </button>
      </form>
    </div>
  );
}

export default PreCourse;
