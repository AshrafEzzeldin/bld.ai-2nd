import React from "react";
import styles from "../../assets/css/about.module.css";
import Icon from "../Icon";
import { FaCheck } from "react-icons/fa";

function Learn(props) {
  return (
    <div
      className={["border", "border-dark", styles.shift_about, "mt-5"].join(
        " "
      )}
    >
      <h4 className={["ms-5"].join(" ")}>What you'll learn</h4>
      <div className={["m-1"].join(" ")}>
        {(props.info.overview ? props.info.overview : []).map((o) => {
          return (
            <div className={["ms-5"].join(" ")}>
              {Icon(<FaCheck />, "15px")}
              &ensp; <p className={["d-inline"].join(" ")}>{o} &ensp; </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Learn;
