import React from "react";
import styles from "../assets/css/footer.module.css";
import Icon from "./Icon";

import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className={"text-bg-dark p-3 ps-5 pb-5 " + styles.flow + " " + styles.z}
    >
      <div>
        <h5 className="d-inline-block">
          Top companies choose <a href="">Udemy Business</a> to build in-demand
          career skills.
        </h5>

        <div className={styles.display}>
          <img
            className="ms-4"
            alt="Nasdaq"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            width="115"
            height="44"
          />
          <img
            className="ms-4"
            alt="Volkswagen"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            width="44"
            height="44"
          />
          <img
            className="ms-4"
            alt="Box"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            width="67"
            height="44"
          />
          <img
            className="ms-4"
            alt="NetApp"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            width="115"
            height="44"
          />
          <img
            className="ms-4"
            alt="Eventbrite"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            width="115"
            height="44"
          />
        </div>
        <hr />
      </div>
      <div className={styles.flow}>
        <div className="container float-start pb-5 d-inline-block">
          <div className="row">
            <a className="col link-light">Udemy Business</a>
            <a className="col link-light">Careers</a>
            <a className="col link-light">Terms</a>
          </div>
          <div className="row">
            <a className="col link-light">Teach on Udemy</a>
            <a className="col link-light">Blog</a>
            <a className="col link-light">Privacy policy</a>
          </div>
          <div className="row">
            <a className="col link-light">Get the app</a>
            <a className="col link-light">Help and Support</a>
            <a className="col link-light">Cookie settings</a>
          </div>
          <div className="row">
            <a className="col link-light">About us</a>
            <a className="col link-light">Affiliate</a>
            <a className="col link-light">Sitemap</a>
          </div>
          <div className="row">
            <a className="col link-light">Contact us</a>
            <a className="col link-light">Investors</a>
            <a className="col link-light">Accessibility statement</a>
          </div>
        </div>
        <button type="button" className="btn btn-outline-light float-end me-3">
          {Icon(<FaGlobe className="m-2" />, "20px")}
          English
        </button>
      </div>

      <div>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="Udemy"
          width="91"
          height="34"
        />
        <p className="text-light float-end me-3">© 2022 Udemy, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
