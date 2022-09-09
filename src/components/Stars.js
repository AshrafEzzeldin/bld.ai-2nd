import React from "react";
import { FaStar } from "react-icons/fa";
import Icon from "./Icon";
function Stars(props) {
  let star = (x) =>
    [...Array(Math.round(x)).keys()].map((i) =>
      Icon(<FaStar key={"star" + i} />, "17px", "gold")
    );
  return star(props.number ? props.number : 0);
}

export default Stars;
