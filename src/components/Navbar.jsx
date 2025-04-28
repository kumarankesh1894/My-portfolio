import React from "react";
import styles from "../styles/Navbar.module.css";
import cvPdf from "../assets/ankesh general cv.pdf";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>Ankesh's Portfolio</div>
      <div className={styles.right}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#qualifications">Qualifications</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#github">GitHub</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href={cvPdf}
              download="Ankesh_CV.pdf"
              className={styles.cvButton}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
