import React from "react";
import styles from "../styles.module.css";
import { NavBar } from "../../components";
import { languages } from "../../config/idiom";

export const Capacitation = ({ goBack, idiom }) => {
  return (
    <div className={styles.container}>
      <NavBar title={languages[idiom].capacitation_navbar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p>
            {languages[idiom].capacitation_content}
          </p>
          <div className={styles.capacitation}>
            <div className={styles["capacitation-card"]}>
              <div className={styles.video}></div>
              <p>Conoce como puedes apagar fuego en tu casa</p>
            </div>
            <div className={styles["capacitation-card"]}>
              <div className={styles.video}></div>
              <p>Conoce como puedes apagar fuego en tu casa</p>
            </div>
          </div>
          <div className={styles["button-container"]}>
            <button onClick={goBack} className={styles["primary-button"]}>
            {languages[idiom]['Atras']}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
