import React from "react";
import styles from "../styles/Achievements.module.css";

const achievements = [
  {
    title: "One India Runner Up",
    description: "Won 1st runner-up prize in One India 2025",
    year: "2025",
  },
  {
    title: "LeetCode Global Rank 7591",
    description:
      "Secured Global Rank 7591 among 20k+ participants in Bi-weekly LeetCode contest",
    year: "2024",
  },
  {
    title: "LeetCode Problem Solver",
    description: "Solved more than 110 questions in 43 days on LeetCode",
    year: "2024",
  },
  {
    title: "HackerRank Achievements",
    description:
      "3★ Silver in Java, Python, C++ | 4★ Silver in C | 1★ Bronze in Problem Solving and SQL",
    year: "2024",
  },
  {
    title: "One India Runner Up",
    description: "Won 1st runner-up prize in One India 2024",
    year: "2024",
  },
  {
    title: "Capture the Flag (CTF) Achievement",
    description: "Secured 4th rank in Tech Event organized by SCSE",
    year: "2024",
  },
];

const Achievements = () => (
  <section id="achievements" className={styles.achievementsSection}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Achievements</h2>
      <div className={styles.achievementsGrid}>
        {achievements.map((ach, idx) => (
          <div key={idx} className={styles.achievementCard}>
            <div className={styles.achievementHeader}>
              <h3 className={styles.achievementTitle}>{ach.title}</h3>
              <span className={styles.year}>{ach.year}</span>
            </div>
            <p className={styles.achievementDescription}>{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
