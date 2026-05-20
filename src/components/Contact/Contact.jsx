import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../../i18n.jsx";

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    emailjs
      .send(
        "service_0yfch8w",
        "template_e4xz1z2",
        {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        "AMNE1HJtlS8nUKElM",
      )
      .then(() => {
        setStatus("success");
        event.target.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.text}>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </div>
          <div className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.form.name}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.form.email}
                  required
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder={t.contact.form.subject}
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder={t.contact.form.message}
                required
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Đang gửi..." : t.contact.form.submit}
              </button>
              {status === "success" && (
                <p className={styles.successMsg}>✅ Gửi thành công!</p>
              )}
              {status === "error" && (
                <p className={styles.errorMsg}>❌ Gửi thất bại, thử lại!</p>
              )}
            </form>
          </div>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:phuongnamtran2812@gmail.com">
              phuongnamtran2812@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/facebookIcon.png")}
              alt="Facebook icon"
            />
            <a href="https://www.facebook.com/namphuongtran2812">
              facebook.com/namphuongtran2812
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://www.github.com/phuongnam281204">
              github.com/phuongnam281204
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/instagram.png")}
              alt="Instagram icon"
            />
            <a href="https://www.instagram.com/braz3t_naw.04/">
              instagram.com/braz3t_naw.04
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/telephone.png")} alt="Phone icon" />
            <a href="tel:0363807312">0363807312 / 0363257312</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/location.png")}
              alt="Location icon"
            />
            <a href="https://maps.google.com/?q=Phuong+Tan+Son+Nhat+TP.HCM">
              Phuong Tan Son Nhat, TP.HCM
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
