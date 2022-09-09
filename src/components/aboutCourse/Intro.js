import React from "react";
import Stars from "../Stars";
import styles from "../../assets/css/about.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Intro(params) {
  const a1 = ["Development", "Programmin language", "Python"];

  return (
    <div
      className={["bg-dark", "text-white", "mb-2", "p-4", styles.display].join(
        " "
      )}
    >
      <div className={[styles.shift_about].join(" ")}>
        <div>
          {a1.map((c, idx) => {
            return (
              <p key={"intro" + idx} className={["d-inline"].join(" ")}>
                <a href="">{c} </a>
                &ensp;
                {a1.length > idx + 1 ? ">" : ""}
                &ensp;
              </p>
            );
          })}
        </div>
        <h2>{params.info.title}</h2>
        <p>{params.info.Introduction}</p>
        <p className={["d-inline"].join(" ")}>{params.info.rate}</p>
        <Stars number={params.info.rate} className={["d-inline"].join(" ")} />
        <p className={["d-inline"].join(" ")}>
          ({params.info.ratingCount} ratings)
        </p>
        <p>
          careated by{" "}
          {params.info.instructor
            ? params.info.instructor.map((i) => (
                <a href="" className="ms-2">
                  {i.name}
                </a>
              ))
            : ""}
        </p>
      </div>
    </div>
  );
}

export default Intro;
