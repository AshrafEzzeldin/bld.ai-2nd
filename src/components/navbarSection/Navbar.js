import React, { useState } from "react";
import styles from "../../assets/navBarStyle.module.css";
import Icon from "../Icon";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar(props) {
  let [search, setSearch] = useState("");

  const handlechange = (event) => {
    setSearch(event.target.value);
    props.search(event.target.value);
  };

  return (
    <section className={styles.nav_css}>
      <div className={styles.nav_alt}>
        {Icon(<FaBars />, "20px")}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
          alt="Udemy"
          width="91"
          height="34"
        />
      </div>

      <div className={styles.list_css}>
        <ul className={styles.navL}>
          <li className={[styles.navLi, styles.nav_first].join(" ")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
              alt="Udemy"
              width="91"
              height="34"
            />
          </li>
          <li className={[styles.navLi, styles.nav_first].join(" ")}>
            <nav>Categories</nav>
          </li>
          <li className={[styles.navLi, styles.nav_first].join(" ")}>
            <form className={styles.search} action="">
              <button className={styles.search_button}>
                {Icon(<FaSearch />, "15px")}
              </button>
              <input
                className={styles.search_input}
                type="text"
                placeholder="Search for anything"
                name="search"
                value={search}
                onChange={handlechange}
              />
            </form>
          </li>
          <li
            className={[styles.navLi, styles.navHover, styles.nav_first].join(
              " "
            )}
          >
            Udemy Business
          </li>
          <li
            className={[styles.navLi, styles.navHover, styles.nav_first].join(
              " "
            )}
          >
            Teach on Udemy
          </li>
          <li className={[styles.navLi, styles.nav_first].join(" ")}>
            <a href="" className={styles.nostyle}>
              {Icon(<FaCartPlus />, "25px")}
            </a>
          </li>
          <li className={styles.navLi}>
            <form action="" className={styles.nav_form}>
              <button className={styles.black_button}>Login</button>
            </form>
          </li>
          <li className={styles.navLi}>
            <form action="" className={styles.nav_form}>
              <button className={styles.sign_up}>Sign up</button>
            </form>
          </li>
          <li className={styles.navLi}>
            <form action="" className={styles.nav_form}>
              <button className={styles.global}>
                {Icon(<FaGlobe />, "20px")}
              </button>
            </form>
          </li>
        </ul>
        <hr className="m-0" />
      </div>
    </section>
  );
}

export default Navbar;
