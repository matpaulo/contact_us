import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation}`}>
      <div className={styles.logo}>
        <img src="/images/telefone.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contatos</li>
      </ul>
    </nav>
  );
};

export default Navigation;
