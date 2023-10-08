import React from "react";
import styles from "../styles.module.css";
import { InputStyled, NavBar } from "../../components";
import { languages } from "../../config/idiom";

export const SendVoluntary = ({ goBack, idiom }) => {
  return (
    <div className={styles.container}>
      <NavBar title={languages[idiom].voluntary_navBar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{languages[idiom].voluntary_title}</h1>
          <p>{languages[idiom].voluntary_content}</p>
          <InputStyled
            label={languages[idiom].name}
            placeholder={languages[idiom].name_placeholder}
          />
          <InputStyled
            label={languages[idiom]["Apellido"]}
            placeholder={languages[idiom].apellido_placeholder}
          />
          <InputStyled
            label={languages[idiom].email}
            placeholder={languages[idiom].email_placeholder}
          />
          <InputStyled
            label={languages[idiom].phone}
            placeholder={languages[idiom].phone_placeholder}
          />
          <div className={styles["button-container"]}>
            <button className={styles["primary-button"]}>{languages[idiom].Enviar}</button>
            <button onClick={goBack} className={styles["secondary-button"]}>
              {languages[idiom].Cancelar}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
