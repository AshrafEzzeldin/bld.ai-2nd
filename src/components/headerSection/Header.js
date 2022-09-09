import React from "react";
import styles from "../../assets/css/header.module.css";
import img1 from "../../assets/images/1.png";

function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.header_text}>
        <h2>New to Udemy? Lucky you.</h2>
        <p>Courses start at E£169.99. Get your new student offer now</p>
      </div>
      <img src={img1} alt={"Alarm"} className={styles.alarm} />
    </section>
  );
}

export default Header;
