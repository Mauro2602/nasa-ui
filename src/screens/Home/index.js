import React, { useState } from "react";
import { ForestGuardianButton, InputStyled, NavBar } from "../../components";
import styles from "../styles.module.css";
import { languages } from "../../config/idiom";
import { sendPostInformation } from "../../utils";

export const HomeScreen = ({ setIdiom, setScreen, idiom, position }) => {
  const [values, setValues] = useState({ email: "", name: "" });

  const flag = JSON.parse(localStorage.getItem("email"));

  const setFlag = async () => {
    const data = {
      Name: values.name,
      emailuser: values.email,
      LocalitationUser: {
        latitud: position.lat,
        longuitud: position.long,
        descripcion: "None description",
      },
    };
    console.log(data);
    await sendPostInformation({ url: "users", body: data });
    // localStorage.setItem("email", JSON.stringify(values.email));
  };

  if (!flag) {
    return (
      <div className={styles.container}>
        <NavBar setIdiom={setIdiom} title={languages[idiom].login_navbar} />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p style={{ margin: 0 }}>{languages[idiom].login_init}</p>
            <p style={{ margin: 0 }}>{languages[idiom].login_content}</p>
            <InputStyled
              label={languages[idiom].name}
              onChangeValue={(text) =>
                setValues((prevState) => ({ ...prevState, name: text }))
              }
              placeholder={languages[idiom].name_placeholder}
            />
            <InputStyled
              onChangeValue={(text) =>
                setValues((prevState) => ({ ...prevState, email: text }))
              }
              label={languages[idiom]["email"]}
              placeholder={languages[idiom].email_placeholder}
            />
            <div className={styles["button-container"]}>
              <button
                onClick={() => setFlag()}
                className={styles["primary-button"]}
              >
                {languages[idiom]["Enviar"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <NavBar setIdiom={setIdiom} title={languages[idiom].home_navBar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{languages[idiom].welcome}</h1>
          <p>{languages[idiom].welcome_content}</p>
          <button onClick={() => setScreen(1)} className={styles.button}>
            {languages[idiom].send_alert}
          </button>
          <button onClick={() => setScreen(2)} className={styles.button}>
            {languages[idiom].capacitation}
          </button>
          <button onClick={() => setScreen(3)} className={styles.button}>
            {languages[idiom].volunter}
          </button>
          <button onClick={() => setScreen(4)} className={styles.button}>
            {languages[idiom].prox_alert}
          </button>
        </div>
      </div>
      <ForestGuardianButton />
    </div>
  );
};
