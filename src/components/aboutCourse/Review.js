import React, { useState, useEffect } from "react";
import Stars from "../Stars";
import styles from "../../assets/css/about.module.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Icon from "../Icon";

function Review(props) {
  let r = props.rev ? props.rev : {};

  let [report, setReport] = useState("0");
  let [text, setText] = useState("Was this review helpful?");
  let [buttonD, setButtonD] = useState("border-0");
  let [buttonu, setButtonU] = useState("border-0");

  const onClickUp = () => {
    setButtonD("border-0");

    if (report === "1") {
      setReport("0");
      setButtonU("");
      setText("Was this review helpful?");
    } else {
      setButtonU("btn-dark");
      setReport("1");
      setText("Thank you for your feedback");
    }
  };

  const onClickDown = () => {
    setButtonU("border-0");
    if (report === "2") {
      setReport("0");
      setButtonD("");
      setText("Was this review helpful?");
    } else {
      setReport("2");
      setButtonD("btn-dark");
      setText("Thank you for your feedback");
    }
  };

  return (
    <div>
      <div className="rounded-circle p-3 m-3 mt-0 bg-dark text-white d-inline-block top-1 float-start">
        {r.name[0]}
      </div>
      <div className=" d-inline-block w-75">
        <p className="fw-bold m-0">{r.name}</p>
        <Stars number={r.rate} />
        <p className="d-inline-block fw-lighter ms-2">2 weeks</p>
        <p className={styles.med}>{r.content}</p>
        <p className={styles.small}>{text}</p>
        <button
          onClick={onClickUp}
          type="button"
          className={"btn rounded-circle " + buttonu}
        >
          {Icon(<FaThumbsUp />, "15px")}
        </button>
        <button
          onClick={onClickDown}
          type="button"
          className={"btn rounded-circle ms-1 " + buttonD}
        >
          {Icon(<FaThumbsDown />, "15px")}
        </button>
        <a href="" className="ms-2 link-dark">
          Report
        </a>
      </div>
      <hr></hr>
    </div>
  );
}

export default Review;
