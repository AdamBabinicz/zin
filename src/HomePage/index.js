import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import HeroSec from "../components/HeroSection";
import About from "../components/About";
import Service from "../components/ServiceSec";
import Slider from "../components/Slider/Slider";
import Contact from "../components/Contact";
import Popup from "../components/Popup/Popup";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSec />
      <About />
      <Service />
      <Slider />
      <Contact />
      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3
          css={`
            margin-bottom: 1rem;
          `}
        ></h3>
        <p>
          Cały proces prania dywanów w&nbsp;pralni stacjonarnej przebiega
          w&nbsp;określonej kolejności i&nbsp;składa się z&nbsp;kilku etapów.
          Każdy z&nbsp;tych etapów jest równie ważny i&nbsp;nie można żadnego
          pominąć.
        </p>
        <p>
          W celu <b>identyfikacji dywanów</b> stosujemy ich <b>oznaczanie</b>.
          Na wstępnym etapie określamy rozmiar dywanu oraz materiał
          z&nbsp;jakiego został wyprodukowany.
        </p>
        <p>
          Każdy dywan jest
          <b> odkurzany przemysłowym odkurzaczem marki Kärcher</b>. Odpowiednia
          siła ssąca doskonale zbiera sierść zwierząt, włosy oraz wszelkie
          zanieczyszczenia.
        </p>
        <p>
          W kolejnym etapie stosujemy
          <b> trzepanie mechaniczne przy pomocy urządzenia marki Viper</b>,
          które oddziela od dywanu piasek, kurz oraz pozostałe drobne, luźne
          elemeny brudu.
        </p>
        <p>
          Tak przygotowany dywan poddawany jest <b>praniu wstępnemu</b>.
          Zastosowane środki piorące renomowanych firm, doskonale rozpuszczają
          nagromadzony na&nbsp;powierzhni i&nbsp;wewnątrz, brud.
        </p>
        <p>
          <b>Pranie zasadnicze</b> z użyciem szorowarki usuwa brud z runa
          i&nbsp;osnowy dywanu (<b>metoda prania "na wskroś"</b>).
        </p>
        <p>
          Jeżeli na&nbsp;dywanie znajdowały się jakieś plamy, ewntualnie inne
          pozostałości np. z&nbsp;gum do&nbsp;żucia, zostały usunięte przy
          pomocy odpowiednich <b>preparatów chemicznych</b>.
        </p>
        <p>
          Kolejnym etapem jest <b>płukanie</b>, w&nbsp;którym pozbywamy się
          z&nbsp;dywanu środków piorących i&nbsp;odplamiaczy.
        </p>
        <p>
          W celu maksymalnego skrócenia czasu <b>schnięcia dywanu</b>, jest on
          poddawany <b>procesowi odwirowywania w&nbsp;wirówce przemysłowej</b>.
          1200 obr/min pozwala na&nbsp;usunięcie wody w&nbsp;95%!
        </p>
        <p>
          Tak odwirowany dywan, który jest prawie suchy, zostaje umieszczony
          w&nbsp;specjalnym pomieszczeniu (suszarni) na&nbsp;odpowiednich
          stojakach i&nbsp;<b> dosuszany suszarkami elektrycznymi</b>.
        </p>
        <p>
          Dywan po całkowitym wysuszeniu jest
          <b> perfumowany, pakowany i&nbsp;odwieziony do&nbsp;Klienta</b>.
        </p>
        <span aria-label="Description of the overall image" role="img">
          😀
        </span>
      </Popup> */}

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3
          style={{
            marginBottom: "2.5rem",
            textAlign: "center",
            lineHeight: "3.5rem",
          }}
        >
          Specjalne podziękowania dla anonimowej Pani!
          <span aria-label="Description of the overall image" role="img">
            &nbsp;😊
          </span>
        </h3>
        <p>
          Pragnę serdecznie podziękować nieznanej mi młodej Osobie z dwójką
          dzieci, która w dniu 31 października 2021 r. na Cmentarzu Komunalnym w
          Radomiu, udzieliła mi pomocy w znalezieniu poszukiwanego przeze mnie
          grobu. Jej pomoc była skuteczna i przeze mnie nieoczekiwana. Ten
          dziwny zbieg okoliczności nasunął mi przypuszczenie, że Opatrzność
          nade mną czuwa. <br />
          <b> Jeszcze raz bardzo dziękuję!</b>
        </p>
      </Popup>
    </>
  );
};

export default HomePage;
