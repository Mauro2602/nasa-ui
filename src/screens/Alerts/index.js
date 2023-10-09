import React, { useState, useEffect } from "react";
import { NavBar } from "../../components";
import styles from "../styles.module.css";
import { languages } from "../../config/idiom";
import { sendGetRequest } from "../../utils";

export const Alerts = ({ goBack, idiom, setIdiom }) => {
  const [data, setData] = useState([]);
  const [systemNotify, setSystemNotify] = useState([]);
  const email = JSON.parse(localStorage.getItem("email"));

  const getCapacitation = async () => {
    const data = await sendGetRequest({
      url: "alerts",
      params: {},
    });
    setData(data.body);
  };

  const getPoints = async () => {
    const data = await sendGetRequest({
      url: "obtain",
      params: {
        id: email,
      },
    });
    setSystemNotify(data.body);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCapacitation();
      getPoints();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <NavBar setIdiom={setIdiom} title={languages[idiom].alerts_navbar} />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p>{languages[idiom].alerts_content}</p>
          <h3>{languages[idiom].myNotifications}</h3>
          {systemNotify.map((item) => (
            <div className={styles.alert}>
              <p>
                <strong>{`${languages[idiom].alert} ${item.Distance} 🔥`}</strong>
              </p>
              <p>
                {languages[idiom].alert_system}
              </p>
            </div>
          ))}
          <h3>{languages[idiom].notifications}</h3>
          {data.map((item) => (
            <div className={styles.alert}>
              <p>
                <strong>{`${languages[idiom].alert} ${item.Location} 🔥`}</strong>
              </p>
              <p>
                {languages[idiom].first_alert} {item.Intensity}{" "}
                {languages[idiom].second_alert} {item.Description}
              </p>
            </div>
          ))}
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
