import React, { useState, useEffect } from "react";
import styles from "../styles/GitHubRepos.module.css";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = "kumarankesh1894";
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched repositories:", data);
        setRepos(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="github" className={styles.githubSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>GitHub Repositories</h2>
          <div className={styles.loading}>
            <i className="fas fa-spinner fa-spin"></i> Loading repositories...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className={styles.githubSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>GitHub Repositories</h2>
          <div className={styles.error}>
            <i className="fas fa-exclamation-circle"></i> Error: {error}
          </div>
        </div>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section id="github" className={styles.githubSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>GitHub Repositories</h2>
          <div className={styles.error}>
            No repositories found. Please check your GitHub username.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className={styles.githubSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>GitHub Repositories</h2>
        <div className={styles.reposGrid}>
          {repos.map((repo) => (
            <div key={repo.id} className={styles.repoCard}>
              <h3 className={styles.repoName}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h3>
              <p className={styles.repoDescription}>
                {repo.description || "No description available"}
              </p>
              <div className={styles.repoStats}>
                <span className={styles.stat}>
                  <i className="fas fa-star"></i> {repo.stargazers_count}
                </span>
                <span className={styles.stat}>
                  <i className="fas fa-code-branch"></i> {repo.forks_count}
                </span>
                <span className={styles.stat}>
                  <i className="fas fa-code"></i> {repo.language || "N/A"}
                </span>
              </div>
              <div className={styles.repoFooter}>
                <span className={styles.updated}>
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
