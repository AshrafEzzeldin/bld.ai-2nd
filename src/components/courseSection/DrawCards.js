import React from "react";
import Card from "./Card";
function DrawCards(props) {
  return props.courses.map((course) => (
    <Card key={course.id} course={course} />
  ));
}

export default DrawCards;
