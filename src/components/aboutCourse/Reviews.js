import React from "react";
import styles from "../../assets/css/about.module.css";
import Icon from "../Icon";
import { FaSearch } from "react-icons/fa";
import DropDown from "../DropDown";
import Review from "./Review";
function Reviews(props) {
  let r = props.info.reviews ? props.info.reviews : [];
  return (
    <div className={styles.shift_about + " mt-5"}>
      <h4>Reviews</h4>
      <div className={"input-group mb-3"}>
        <input
          type="text"
          className="form-control"
          placeholder="Search reviews"
          aria-label="Search reviews"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-dark"
          type="button"
          id="button-addon2"
        >
          {Icon(<FaSearch />, "15px")}
        </button>
        <DropDown
          items={[
            "All ratings",
            "five stars",
            "four stars",
            "three stars",
            "two stars",
            "one star",
          ]}
        />
      </div>
      {r.map((i, idx) => (
        <Review rev={i} />
      ))}
    </div>
  );
}

export default Reviews;
