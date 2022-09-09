import React from "react";
import styles from "../../assets/css/about.module.css";
function Requirements(props) {
  return (
    <div className={[styles.shift_about, "mt-5"].join(" ")}>
      <h4>Requirements</h4>

      <ul>
        {(props.info.requirements ? props.info.requirements : []).map((r) => {
          return (
            <>
              <li>{r}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Requirements;
