import React from "react";
import Stars from "../Stars";
import styles from "../../assets/css/cardStyle.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();
  let onClick = () => {
    navigate("./course/" + props.idx);
  };

  return (
    <span className={styles.card_css} onClick={onClick}>
      <img
        src={props.course.image}
        alt={"course name"}
        className={styles.image}
      ></img>
      <h4>{props.course.title}</h4>
      <p className={styles.grey}>{props.course.headline}</p>
      <span className={styles.gold}>{props.course.rating}</span>
      <Stars number={props.course.rating} />
      <p className={styles.bold}>E£ {props.course.price}</p>
    </span>
  );
}

export default Card;
