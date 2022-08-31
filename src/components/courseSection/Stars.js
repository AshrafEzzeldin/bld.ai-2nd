import React from "react";
import { FaStar } from "react-icons/fa";
import Icon from "../Icon";

function Stars(props) {
  let star = (x) => {
    let temp = [];
    for (let i = 0; i < x; i++) {
      temp.push(Icon(<FaStar />, "17px", "gold"));
    }
    return temp;
  };
  return star(props.number);
}

export default Stars;
