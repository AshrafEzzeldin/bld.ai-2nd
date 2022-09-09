import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

function DropDown(props) {
  return (
    <Dropdown className="ms-2">
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="btn-light border border-dark"
      >
        All ratings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.items.map((i, idx) => {
          return (
            <Dropdown.Item href={"#/action-" + { idx }}>{i}</Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
