import React from "react";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>ENTRE EM CONTATO!</h1>
      <p>
        Estamos aqui para ajudar! Qualquer dúvida, comentário, feeback, ou até
        mesmo entrar em um chat, você pode entrar em contato com a gente por
        essa página, pelo celular, e-mail ou rede social.
      </p>
    </div>
  );
};

export default ContactHeader;
