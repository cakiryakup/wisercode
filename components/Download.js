import React from "react";
import styles from "../styles/Download.module.css";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const npm_copy = () => {
    navigator.clipboard.writeText("npm i wisercode --save");
    toast.dark("Succesfully copied!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const yarn_copy = () => {
    navigator.clipboard.writeText("yarn add wisercode");
    toast.dark("Succesfully copied!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className={styles.section}
    >
      <div className={styles.heading}>
        <Image src="/sparkle.svg" width={24} height={24} alt="" />
        <h1 className={styles.h1}>Get the wisercode</h1>
      </div>
      <p className={styles.p}>
        First of all you need to create an wisercode account to start using.
        wisercode saves your coding-style to cloud. With this, you can use
        wisercode with different devices.
      </p>
      <div className={styles.shadow}></div>
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <div className={styles.login_option}>
            <Image src="/Google.svg" width={28} height={28} alt="" />
            <h6 className={styles.login_option_text}>Continue with Google</h6>
          </div>
          <div className={styles.login_option}>
            <Image src="/Apple.svg" width={28} height={28} alt="" />
            <h6 className={styles.login_option_text}>Continue with Apple</h6>
          </div>
        </div>
        <div className={styles.login_box}>
          <div className={styles.login_option}>
            <Image src="/GitHub.svg" width={28} height={28} alt="" />
            <h6 className={styles.login_option_text}>Continue with GitHub</h6>
          </div>
          <div className={styles.login_option}>
            <Image src="/Email.svg" width={28} height={28} alt="" />
            <h6 className={styles.login_option_text}>Continue with Email</h6>
          </div>
        </div>
      </div>
      <p className={styles.p_s}>
        Second of all you have to install wisercode VSCode Extension.
      </p>
      <div className={styles.get_extension}>
        <Image src="/download.svg" width={28} height={28} alt="" />
        <h3 className={styles.h3}>Get the Extension</h3>
      </div>
      <p className={styles.p_s}>
        Last step! You have to install tint in your project via
        <span className={styles.highlight}> npm</span> or
        <span className={styles.highlight}> yarn</span>.
      </p>
      <div className={styles.cdn_container}>
        <div className={styles.cdn_box}>
          <p className={styles.cdn_text}>npm i wisercode --save</p>
          <div onClick={npm_copy} className={styles.copy}>
            <Image src="/copy.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className={styles.cdn_box}>
          <p className={styles.cdn_text}>yarn add wisercode</p>
          <div onClick={yarn_copy} className={styles.copy}>
            <Image src="/copy.svg" width={24} height={24} alt="" />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Zoom}
        pauseOnHover
      />
    </section>
  );
};

export default Download;
