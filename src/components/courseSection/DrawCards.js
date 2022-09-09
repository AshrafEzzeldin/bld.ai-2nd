import React from "react";
import styles from "../../assets/css/cardStyle.module.css";
import Card from "./Card";
function DrawCards(props) {
  return (
    <div className={styles.wrapper_container}>
      {props.courses.map((course, i) => (
        <Card key={course.id} course={course} idx={i % 4} />
      ))}
    </div>
  );
}

export default DrawCards;
