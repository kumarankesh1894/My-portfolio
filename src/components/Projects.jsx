import React from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      description:
        "A full-stack chatting platform with user authentication, real time chat.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/image.png",
      github: "https://github.com/kumarankesh1894/Web-Chat-app",
      live: "https://web-chat-app-10.onrender.com/login",
    },
    {
      title: "Blogging Platform",
      description:
        "A blogging platform where users can create, edit, and delete posts.",
      technologies: ["React", "Node js", "Express js", "JWT", "Material-UI"],
      image: "/blog.jpg",
      github: "https://github.com/kumarankesh1894/Blogging-Frontend",
      live: "https://lambent-baklava-2b1e43.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "CSS", "HTML", "JavaScript"],
      image: "/portfolio.jpg",

      github: "https://github.com/kumarankesh1894/My-portfolio",
      live: "meankesh.netlify.app",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
