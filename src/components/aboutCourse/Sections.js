import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlay } from "react-icons/fa";
import Icon from "../Icon";

function Sections(props) {
  return props.info.content
    ? props.info.content.map((section, idx) => {
        return (
          <Accordion defaultActiveKey={props.toggle}>
            <Accordion.Item eventKey={props.toggle}>
              <Accordion.Header>{section[0][0]}</Accordion.Header>
              <Accordion.Body>
                {section[1].map((c) => {
                  return (
                    <div className="m-2">
                      {Icon(<FaPlay />, "10px")}
                      <p className="d-inline">&ensp;{c}</p>
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })
    : "";
}

export default Sections;
