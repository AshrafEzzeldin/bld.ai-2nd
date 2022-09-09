import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import Icon from "../Icon";
import styles from "../../assets/css/about.module.css";

function FlotingCart(props) {
  const a1 = ["Share", "Gift this course", "Apply Coupon"];

  return (
    <div
      className={[
        styles.float,
        "shadow",
        "p-3",
        "mb-5",
        "rounded",
        " text-wrap",
      ].join(" ")}
    >
      <div className={styles.inner}>
        <div className={styles.relative + " " + styles.imageDiv}>
          <img className={styles.image} src={props.info.image} alt=""></img>
          {Icon(<FaPlay className={styles.play} />, "25px")}
        </div>
        <h2 className="p-4">{"E£" + props.info.price}</h2>
        <div className=" text-center">
          <button
            type="button"
            className={[
              "btn",
              "btn-lg",
              "btn-block",
              "text-center",
              "w-100",
              "m-1",
              styles.blueviolet,
            ].join(" ")}
          >
            Add to cart
          </button>
          <button
            type="button"
            className={[
              "btn",
              "btn-light",
              "btn-lg",
              "btn-block",
              "text-center",
              "w-100",
              "border",
              "border-dark",
              "m-1",
            ].join(" ")}
          >
            Buy now
          </button>
          <p className="text-secondary">30-Day Money-Back Guarantee</p>
        </div>
        <p>This course includes:</p>
        <p className={["text-secondary"].join(" ")}>
          {Icon(<FaPlay />, "15px")}
          &ensp; 14 hours on-demand video
        </p>
        <p className={["text-secondary"].join(" ")}>
          {" "}
          {Icon(<FaArchive />, "15px")}&ensp; 3 downloadable resources
        </p>
        <div className={["text-center"].join(" ")}>
          {a1.map((c, idx) => {
            return (
              <a
                href="sa"
                key={"float" + idx}
                className={["ms-4", "link-dark", "fs-6"].join(" ")}
              >
                {c}
              </a>
            );
          })}
        </div>
        <hr />
        <h5>Training 5 or more people?</h5>
        <p>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button
          type="button"
          className={[
            "btn",
            "btn-light",
            "btn-lg",
            "btn-block",
            "text-center",
            "w-100",
            "border",
            "border-dark",
            "m-1",
          ].join(" ")}
        >
          Try Udemy Business
        </button>
      </div>
    </div>
  );
}

export default FlotingCart;
