import React from "react";
import { NavBar } from "../../components";
import styles from "../styles.module.css";
import { languages } from "../../config/idiom";

export const Alerts = ({ goBack, idiom }) => {
  return (
    <div className={styles.container}>
      <NavBar title={languages[idiom].alerts_navbar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p>{languages[idiom].alerts_content}</p>
          <div className={styles.alert}>
            <p>
              <strong>{`${languages[idiom].alert} 800m 🔥`}</strong>
            </p>
            <p>
              🚨 Se emitio una alerta por un usuario que esta ubicado en tu
              rango, sal para visualizar señales de incendio
            </p>
          </div>
          <div className={styles.alert}>
            <p>
              <strong>{`${languages[idiom].alert} 600m 🔥`}</strong>
            </p>
            <p>
              🚨 Se emitio una alerta por uno de nuestros sistemas que esta
              ubicado en tu rango, sal para visualizar señales de incendio
            </p>
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
