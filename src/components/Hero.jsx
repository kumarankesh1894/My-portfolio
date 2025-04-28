import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer.",
        "Frontend Developer.",
        "Backend Developer.",
        "MERN Stack Developer.",
        "Software Engineer.",
        "Problem Solver.",
        "Tech Enthusiast.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.leftsection}>
        <h1 className={styles.greeting}>Hello, I'm</h1>
        <h1 className={styles.name}>Kumar Ankesh</h1>
        <div className={styles.typingContainer}>
          <span ref={el} className={styles.typedText}></span>
        </div>
        <p className={styles.description}>
          I craft beautiful and functional digital experiences. Passionate about
          creating innovative solutions that make a difference.
        </p>
        <div className={styles.buttonContainer}>
          <a href="#contact" className={styles.ctaButton}>
            Contact Me
          </a>
          <a href="#about" className={styles.secondaryButton}>
            Learn More
          </a>
        </div>
      </div>
      <div className={styles.rightsection}>
        <div className={styles.imageContainer}>
          <img src="\IMG_0834 (1).jpg" alt="Kumar Ankesh" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
