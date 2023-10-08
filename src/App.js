/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Alerts } from "./screens/Alerts";
import { SendAlerts } from "./screens/SendAlerts";
import { Capacitation } from "./screens/Capacitation";
import { SendVoluntary } from "./screens/SendVoluntary";
import { VideoDetail } from "./screens/VideoDetail";
import { CartDetail } from "./components";
import { HomeScreen } from "./screens/Home";

export const idioms = {
  es: "es",
  en: "en",
};

export const App = () => {
  const [screen, setScreen] = useState(0);
  const [openDetail] = useState(false);
  const [openCart] = useState(false);
  const [idiom, setIdiom] = useState(idioms.es);
  const [position, setPosition] = useState({lat: '', long: ''});

  const obtainLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        setPosition({lat: latitude, long: longitude});
      }, function (error) {
        alert("No podemos obtener la descripcion en este momento");
      });
    } else {
      alert("La geolocalización no es compatible en este navegador.");
    }
  }

  const mockVideoDetail = {
    title: "Prevencion de incendios",
    description:
      "En este video informativo sobre prevención de incendios, exploraremos consejos esenciales para mantener hogares y entornos seguros. Analizaremos prácticas de seguridad, desde la correcta manipulación de materiales inflamables hasta la importancia de contar con extintores y alarmas de incendio funcionales. También se abordarán estrategias para planificar rutas de escape efectivas y cómo crear un ambiente más seguro en espacios compartidos. Expertos en prevención de incendios compartirán recomendaciones sobre la importancia de la educación y concienciación en la comunidad, resaltando la necesidad de mantenerse informado y preparado para posibles emergencias. Aprenderemos sobre técnicas para evitar incendios en áreas naturales, promoviendo la responsabilidad ambiental y la conservación. Este video busca fomentar una cultura de prevención y resiliencia ante los riesgos de incendios. ¡Acompáñanos para aprender a proteger nuestras vidas y propiedades!",
  };

  const mockCartDetail = {
    title: "Prevencion de incendios",
    description:
      "En este video informativo sobre prevención de incendios, exploraremos consejos esenciales para mantener hogares y entornos seguros. Analizaremos prácticas de seguridad, desde la correcta manipulación de materiales inflamables hasta la importancia de contar con extintores y alarmas de incendio funcionales. También se abordarán estrategias para planificar rutas de escape efectivas y cómo crear un ambiente más seguro en espacios compartidos. Expertos en prevención de incendios compartirán recomendaciones sobre la importancia de la educación y concienciación en la comunidad, resaltando la necesidad de mantenerse informado y preparado para posibles emergencias. Aprenderemos sobre técnicas para evitar incendios en áreas naturales, promoviendo la responsabilidad ambiental y la conservación. Este video busca fomentar una cultura de prevención y resiliencia ante los riesgos de incendios. ¡Acompáñanos para aprender a proteger nuestras vidas y propiedades!",
  };

  const goBack = () => {
    setScreen(0);
  };

  useEffect(()  => {
    obtainLocation();
  },  [])

  if (screen === 1) {
    return <SendAlerts position={position} idiom={idiom} goBack={goBack} />;
  }

  if (screen === 2) {
    return <Capacitation idiom={idiom} goBack={goBack} />;
  }

  if (screen === 3) {
    return <SendVoluntary idiom={idiom} goBack={goBack} />;
  }

  if (screen === 4) {
    return <Alerts idiom={idiom} goBack={goBack} />;
  }

  if (openDetail) {
    return <VideoDetail idiom={idiom} {...mockVideoDetail} />;
  }

  if (openCart) {
    return <CartDetail idiom={idiom} {...mockCartDetail} />;
  }

  return (
    <HomeScreen position={position} idiom={idiom} setIdiom={setIdiom} setScreen={setScreen} />
  );
};

export default App;
