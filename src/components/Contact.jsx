import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    const serviceId = "service_oef2lwt";
    const templateId = "template_z5d5srn";
    const publicKey = "Dn8a6RWV7Wo6eC87n";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus({ submitting: false, success: false, error: false });
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        setStatus({ submitting: false, success: false, error: true });
      }
    );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              Feel free to reach out for collaborations or any queries. I'm
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/kumarankesh1894"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kumar-ankesh"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:kumarankesh1894@gmail.com" className={styles.socialLink}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className={styles.contactForm}
          >
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={status.submitting}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                disabled={status.submitting}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                disabled={status.submitting}
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
            {status.success && (
              <p className={styles.successMessage}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status.error && (
              <p className={styles.errorMessage}>
                Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
