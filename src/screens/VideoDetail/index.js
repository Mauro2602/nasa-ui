import React from "react";
import styles from "../styles.module.css";
import { NavBar } from "../../components";
import { languages } from "../../config/idiom";

export const VideoDetail = (props) => {
  const { Tittle, Description, Url, goBack, idiom, setIdiom } = props;
  return (
    <div className={styles.detail}>
      <NavBar setIdiom={setIdiom} title={"Detalle video"} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{Tittle}</h1>
          <iframe
            width={"100%"}
            height={"250"}
            src={Url}
            title={"YouTube video player"}
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            }
            allowFullScreen
          ></iframe>
          <p>{Description}</p>
          <div className={styles["button-container"]}>
            <button onClick={goBack} className={styles["primary-button"]}>
              {languages[idiom]["Atras"]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
