import React from "react";
import styles from "../styles/Qualifications.module.css";

const Qualifications = () => {
  const qualifications = [
    {
      title: "Education",
      items: [
        {
          institution: "Lovely Professional University",
          degree: "Bachelor's Degree in Computer Science",
          year: "2022 - present",
          details:
            "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
        },
        {
          institution: "Gyan Bharti Residential Complex",
          degree: "Intermediate in Science",
          year: "2019- 2021",
          details: "Science Stream with Mathematics",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          name: "Building Web Applications in PHP",
          issuer: "Coursera",
          year: "2024",
          details:
            "Full-stack web development certification covering modern technologies",
        },
        {
          name: "Mastering Data Structures & Algorithms using C and C++",
          issuer: "Udemy",
          year: "2023",
          details:
            "In-depth understanding of data structures and algorithms",
        },
      ],
    },
  ];

  return (
    <section id="qualifications" className={styles.qualificationsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Qualifications</h2>
        <div className={styles.qualificationsContainer}>
          {qualifications.map((category, index) => (
            <div key={index} className={styles.qualificationCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.qualificationItems}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.qualificationItem}>
                    <div className={styles.qualificationHeader}>
                      <h4>{item.institution || item.name}</h4>
                      <span className={styles.year}>{item.year}</span>
                    </div>
                    <h5>{item.degree || item.issuer}</h5>
                    <p>{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
