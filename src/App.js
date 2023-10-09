/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Alerts } from "./screens/Alerts";
import { SendAlerts } from "./screens/SendAlerts";
import { Capacitation } from "./screens/Capacitation";
import { SendVoluntary } from "./screens/SendVoluntary";
import { VideoDetail } from "./screens/VideoDetail";
import { HomeScreen } from "./screens/Home";

export const idioms = {
  es: "es",
  en: "en",
};

export const App = () => {
  const [screen, setScreen] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});
  const [idiom, setIdiom] = useState(idioms.es);
  const [position, setPosition] = useState({ lat: "", long: "" });

  const obtainLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setPosition({ lat: latitude, long: longitude });
        },
        function (error) {
          alert("No podemos obtener la descripcion en este momento");
        }
      );
    } else {
      alert("La geolocalización no es compatible en este navegador.");
    }
  };

  const goBack = () => {
    setScreen(0);
  };

  useEffect(() => {
    obtainLocation();
  }, []);

  if (openDetail) {
    return (
      <VideoDetail
        goBack={() => setOpenDetail(false)}
        idiom={idiom}
        setIdiom={setIdiom}
        {...detailInfo}
      />
    );
  }

  if (screen === 1) {
    return <SendAlerts setIdiom={setIdiom} position={position} idiom={idiom} goBack={goBack} />;
  }

  if (screen === 2) {
    return (
      <Capacitation
        setOpenDetail={setOpenDetail}
        setDetailInfo={setDetailInfo}
        idiom={idiom}
        setIdiom={setIdiom}
        goBack={goBack}
      />
    );
  }

  if (screen === 3) {
    return <SendVoluntary setIdiom={setIdiom} idiom={idiom} goBack={goBack} />;
  }

  if (screen === 4) {
    return <Alerts setIdiom={setIdiom} idiom={idiom} goBack={goBack} />;
  }

  return (
    <HomeScreen
      position={position}
      idiom={idiom}
      setIdiom={setIdiom}
      setScreen={setScreen}
    />
  );
};

export default App;
