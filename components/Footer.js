import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          width={225}
          height={43.5}
          alt="visercode's Logo"
        />
      </div>
      <div className={styles.footer_link_container}>
        <div className={styles.footer_link}>
          <Image
            src="/GitHub.svg"
            width={30}
            height={30}
            alt="visercode's Logo"
          />
          <h3 className={styles.h3}>View GitHub Repo</h3>
        </div>
        <div className={styles.footer_link}>
          <Image
            src="/planesvg.svg"
            width={20}
            height={20}
            alt="visercode's Logo"
          />
          <h3 className={styles.h3}>Send Feedback</h3>
        </div>
      </div>
      <span className="comment ml-2">made by ea</span>
    </footer>
  );
};

export default Footer;
