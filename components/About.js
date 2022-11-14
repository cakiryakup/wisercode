/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../styles/About.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section id="about" className={styles.section}>
      <p className={styles.p}>
        Get AI-powered code recommendations with wisercode. <br />
        <br /> wisercode analyzes the codes you write on your local device with
        low resource consumption. Once the analysis is complete, it's ready to
        use and makes appropriate suggestions in your code editor as you code.
        <br />
        <br /> wisercode provides you to develop your dream application faster.
        As you continue to write code, it begins to work more closely with you.
        <br />
        <br /> wisercode does all the analysis on its local device, so you don't
        have to worry about code security. <br />
        <br /> wisercode only supports Visual Studio Code at this time.
      </p>
      <div className={styles.code_box}>
        <p className={styles.code_p}>
          <span className="dark-purple">import</span>{" "}
          <span className="cyan">React</span> from{" "}
          <span className="cyan">'react'</span> <br />
          <br />
          <span className="red">const</span>{" "}
          <span>
            {" "}
            <span className="light-yellow">ProductCard</span> = (props) → &#123;{" "}
          </span>
          <br />
          <span className="ml-2">
            <span className="red">return</span> &#40;
            <br />
            <span className="ml-4">
              &#60;<span className="light-purple">div</span>&#62;
              <br />
              <span className="ml-6">
                &#60;<span className="indigo">span</span>
                &#62;&#123;product.title&#125;&#60;&#47;
                <span className="indigo">span</span>&#62;
                <br />
                <span className="ml-4">
                  &#60;<span className="light-purple">div</span>&#62;
                </span>
              </span>
            </span>
            <br />
            <span className="ml-2">&#41;</span>
            <br />
            &#125;
            <br />
            <br />
            <span className="dark-purple">export default</span>
            <span className="light-yellow">ProductCard</span>;
          </span>
        </p>
        <div data-aos="fade-up" className={styles.suggestion}>
          <p className={styles.suggestion_p}>
            <span className="wisercode">wisercode</span> Suggestion <br />
            <br />
            &#60;<span className="light-purple">div</span>&#62;
            <span className="comment">← Flex, Row, Container</span>
            <br />
            &#60;<span className="green">img</span> className="product-img"
            <br />
            src="&#123;product.img_url&#125;"/&#62;
            <span className="comment">← Image</span>
            <br />
            <span className="ml-1">
              &#60;<span className="light-blue">p</span>
              &#62;&#123;product.description&#125;&#60;/
              <span className="light-blue">p</span>&#62;
              <br />
              <span className="ml-1 comment">↑ Description</span>
              <br />
              &#60;/<span className="light-purple">div</span>&#62;
              <br />
              &#60;<span className="yellow">button </span>
              onClick=&#123;handleCart&#125;&#62; Add to Cart&#60;/
              <span className="yellow">button</span>&#62;
              <br />
              <span className="comment">↑ handleCart Button</span>
              <br />
              <br />
              <br />
              <br />
            </span>
          </p>
          <div className="flex items-center justify-center">
            <a href="#" className={styles.button_f}>
              Add
            </a>
            <a href="#" className={styles.button_s}>
              Dismiss
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
