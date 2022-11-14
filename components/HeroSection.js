import React from "react";
import styles from "../styles/HeroSection.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section className={styles.section}>
      <div className={styles.shadow}></div>
      <h1 data-aos="fade-up" className={styles.h1}>
        Build strong apps quicker with wisercode.
      </h1>
      <h2 data-aos="fade-up" className={styles.h2}>
        AI CODE SUGGESTIONS FOR REACT
      </h2>
      <div data-aos="fade-up" className={styles.buttons}>
        <a href="#about" className={styles.link_f}>
          Get Started
        </a>
        <a href="#" className={styles.link}>
          Documentation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
