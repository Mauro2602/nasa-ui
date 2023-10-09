import React, { useEffect, useState } from "react";
import { InputStyled, NavBar } from "../../components";
import styles from "../styles.module.css";
import { languages } from "../../config/idiom";
import { sendPostInformation } from "../../utils";

export const SendAlerts = ({ goBack, idiom, setIdiom }) => {
  const [values, setValues] = useState({
    location: "",
    intensity: "",
    description: 0,
  });

  const handleSendAlertInfo = async () => {
    await sendPostInformation({ url: "alerts", body: values });
    goBack();
  };

  return (
    <div className={styles.container}>
      <NavBar setIdiom={setIdiom} title={languages[idiom].alert_navbar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{languages[idiom].alert_title}</h1>
          <p>{languages[idiom].alert_content}</p>
          <InputStyled
            onChangeValue={(text) =>
              setValues((prevState) => ({ ...prevState, location: text }))
            }
            label={languages[idiom]["Ubicación"]}
            placeholder={languages[idiom].ubicacion_placeholder}
          />
          <InputStyled
            onChangeValue={(text) =>
              setValues((prevState) => ({ ...prevState, description: text }))
            }
            label={languages[idiom]["Descripción"]}
            placeholder={languages[idiom].description_placeholder}
          />
          <InputStyled
            value={values.intensity}
            onChangeValue={(text) =>
              setValues((prevState) => {
                if (
                  isNaN(parseInt(text)) ||
                  parseInt(text) < 1 ||
                  parseInt(text) > 10
                ) {
                  alert("Por favor, ingresa un número válido entre 1 y 10.");
                  return prevState;
                } else {
                  return { ...prevState, intensity: parseInt(text) };
                }
              })
            }
            label={languages[idiom]["Intensidad"]}
            placeholder={languages[idiom].intensidad_placeholder}
          />
          <div className={styles["button-container"]}>
            <button
              onClick={handleSendAlertInfo}
              className={styles["primary-button"]}
            >
              {languages[idiom]["Enviar"]}
            </button>
            <button onClick={goBack} className={styles["secondary-button"]}>
              {languages[idiom]["Cancelar"]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
