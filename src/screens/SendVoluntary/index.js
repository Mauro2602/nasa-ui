import React, { useState } from "react";
import styles from "../styles.module.css";
import { InputStyled, NavBar } from "../../components";
import { languages } from "../../config/idiom";
import { sendPostInformation } from "../../utils";

export const SendVoluntary = ({ goBack, idiom, setIdiom }) => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleSendVoluntary = async () => {
    await sendPostInformation({url: "users/volunters", body: values});
    goBack();
  };

  return (
    <div className={styles.container}>
      <NavBar setIdiom={setIdiom} title={languages[idiom].voluntary_navBar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{languages[idiom].voluntary_title}</h1>
          <p>{languages[idiom].voluntary_content}</p>
          <InputStyled
            onChangeValue={(text) =>
              setValues((prevState) => ({ ...prevState, name: text }))
            }
            label={languages[idiom].name}
            placeholder={languages[idiom].name_placeholder}
          />
          <InputStyled
            onChangeValue={(text) =>
              setValues((prevState) => ({ ...prevState, lastName: text }))
            }
            label={languages[idiom]["Apellido"]}
            placeholder={languages[idiom].apellido_placeholder}
          />
          <InputStyled
            onChangeValue={(text) =>
              setValues((prevState) => ({ ...prevState, email: text }))
            }
            label={languages[idiom].email}
            placeholder={languages[idiom].email_placeholder}
          />
          <InputStyled
            onChangeValue={(text) =>
              setValues((prevState) => ({ ...prevState, phoneNumber: text }))
            }
            label={languages[idiom].phone}
            placeholder={languages[idiom].phone_placeholder}
          />
          <div className={styles["button-container"]}>
            <button onClick={handleSendVoluntary} className={styles["primary-button"]}>
              {languages[idiom].Enviar}
            </button>
            <button onClick={goBack} className={styles["secondary-button"]}>
              {languages[idiom].Cancelar}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
