import React from "react";
import styles from "./styles.module.css";
import ForestGuardian from "../assets/forestGuardian.jpeg";

export const CartDetail = ({ title = "", description = "", video = "" }) => {
  return (
    <div className={styles.detail}>
      <NavBar title={"Detalle cartilla"} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <iframe
            width={"100%"}
            height={"250"}
            src={
              "https://www.youtube.com/embed/UGjnPiU8VDk?si=ju53mZ1tZRhvpamy"
            }
            title={"YouTube video player"}
            frameBorder={"0"}
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            }
            allowFullScreen
          ></iframe>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export const NavBar = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles["text-navbar"]}>{title}</h1>
    </div>
  );
};

export const InputStyled = ({ label, value, placeholder, onChangeValue }) => {
  return (
    <div className={styles["form-control"]}>
      <label className={styles.label} htmlFor={styles["custom-input"]}>
        {label}
      </label>
      <input
        id={"custom-input"}
        className={styles["custom-input"]}
        type={"text"}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChangeValue(event.target.value)}
      />
    </div>
  );
};

export const ForestGuardianButton = () => {
  return (
    <div>
      <div className={styles["float-alert"]}>
        hay un incendio a 500m de tu ubicacion
      </div>
      <div className={styles["float-button"]}>
        <img className={styles.image} src={ForestGuardian} alt={'forest guardian logo'} />
      </div>
    </div>
  );
};
