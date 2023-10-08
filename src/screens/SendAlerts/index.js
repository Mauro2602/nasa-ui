import React, { useEffect, useState } from "react";
import { InputStyled, NavBar } from "../../components";
import styles from "../styles.module.css";
import { languages } from "../../config/idiom";

export const SendAlerts = ({ goBack, idiom, position }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log(values, position);
  }, [values, position]);

  return (
    <div className={styles.container}>
      <NavBar title={languages[idiom].alert_navbar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{languages[idiom].alert_title}</h1>
          <p>{languages[idiom].alert_content}</p>
          <InputStyled
            onChangeValue={(text) => setValues((prevState) => ({...prevState, ubication: text}))}
            label={languages[idiom]['Ubicación']}
            placeholder={languages[idiom].ubicacion_placeholder}
            />
          <InputStyled
            onChangeValue={(text) => setValues((prevState) => ({...prevState, description: text}))}
            label={languages[idiom]['Descripción']}
            placeholder={languages[idiom].description_placeholder}
            />
          <InputStyled
            onChangeValue={(text) => setValues((prevState) => ({...prevState, intensity: text}))}
            label={languages[idiom]['Intensidad']}
            placeholder={languages[idiom].intensidad_placeholder}
          />
          <div className={styles["button-container"]}>
            <button className={styles["primary-button"]}>{languages[idiom]['Enviar']}</button>
            <button onClick={goBack} className={styles["secondary-button"]}>
            {languages[idiom]['Cancelar']}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
