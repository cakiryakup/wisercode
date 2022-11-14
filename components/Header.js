import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 210) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  });

  return (
    <header className={header ? "header active" : "header"}>
      <div className="flex logo">
        <Image src="/logo.svg" width={150} height={29} alt="visercode's Logo" />
      </div>
    </header>
  );
};

export default Header;
