import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Java", level: 85 },
    { name: "Backend Development", level: 80 },
    { name: "Problem Solving", level: 95 },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              I am a passionate developer with a strong foundation in Frontend,
              Java, and Fullstack web development. My journey in technology began with
              a curiosity about how things work, which evolved into a deep love
              for creating elegant solutions to complex problems.
            </p>
            <p className={styles.description}>
              With a keen eye for detail and a commitment to clean, efficient
              code, I strive to create applications that are not only functional
              but also provide an exceptional user experience.
            </p>
          </div>
          <div className={styles.skills}>
            <h3 className={styles.skillsTitle}>My Skills</h3>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
