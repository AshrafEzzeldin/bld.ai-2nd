import React, { useState, useEffect } from "react";
import styles from "../../assets/css/about.module.css";
import ReadMoreReact from "read-more-react";

function Description(props) {
  let [s, setS] = useState("temp");

  useEffect(() => {
    let func = async () => {
      let x = "";
      await (props.info.description ? props.info.description : []).forEach(
        (element) => {
          x += element + "\n";
        }
      );
      await setS(x);
      // console.log(s);
    };
    func();
  }, [props.info.description, s]);

  return (
    <div className={[styles.shift_about, "mt-5"].join(" ")}>
      <h4>Description</h4>
      {/* <ReadMoreReact text={s} /> */}
      <p>{s}</p>
      <h4>Who this course is for:</h4>
      <p>{props.info.whoFor}</p>
    </div>
  );
}

export default Description;
