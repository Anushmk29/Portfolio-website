import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anush</h1>
        <p className={styles.description}>
          I am an accomplished full-stack developer proficient in React and
          NodeJS with hands-on experience . Throughout my career, I have honed
          my skills in developing robust web applications, leveraging the latest
          technologies and best practices.
        </p>
        <a href="mailto:anushmk85@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/my-Image.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
