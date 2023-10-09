import React, { useEffect, useState } from "react";
import styles from "../styles.module.css";
import { NavBar } from "../../components";
import { languages } from "../../config/idiom";
import { sendGetRequest } from "../../utils";

export const Capacitation = ({ goBack, idiom, setOpenDetail, setDetailInfo, setIdiom }) => {
  const [data, setData] = useState([]);
  const getCapacitation = async () => {
    const data = await sendGetRequest({
      url: "tittle",
      params: {
        terminaciones: idiom,
      },
    });
    setData(data.body);
  };

  const handleOnClickDetail = (item) => {
    setDetailInfo(item);
    setOpenDetail(true);
  }

  useEffect(() => {
    getCapacitation();
  }, []);

  if (data.length === 0) {
    return <p>loading</p>;
  }

  return (
    <div className={styles.container}>
      <NavBar setIdiom={setIdiom} title={languages[idiom].capacitation_navbar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p>{languages[idiom].capacitation_content}</p>
          <div className={styles.capacitation}>
            {data.map((item) => (
              <div onClick={() => handleOnClickDetail(item)} className={styles["capacitation-card"]}>
                <div className={styles.video}></div>
                <p>{item.Tittle}</p>
              </div>
            ))}
          </div>
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
