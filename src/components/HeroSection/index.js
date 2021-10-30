import React, { useState } from "react";
import img from "../../images/1.png";
import {
  HeroContainer,
  HeroWrap,
  HeroContent,
  HeroTitle,
  HeroPara,
  LinkBtn,
  HeroImage,
  Img,
} from "./HeroSectionElement";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

const HeroSection = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const [modal1, setModal1] = useState(false);
  const Toggle1 = () => setModal1(!modal1);
  return (
    <>
      <HeroContainer id="Home">
        <HeroWrap>
          <HeroContent>
            <HeroTitle>Piórkiem i węglem</HeroTitle>
            <HeroPara>
              cykliczny, polski program telewizyjny wyprodukowany przez
              Telewizję Polską i prowadzony przez prof. Wiktora Zina. Gościł na
              antenie co dwa tygodnie, poczynając od roku 1963 przez blisko 30
              lat. Program polegał na tym, że prowadzący przybliżał widzom
              osiągnięcia architektury polskiej i zagranicznej, ilustrując
              jednocześnie wykład rysunkami węglem. Do 2010 roku program ten był
              nadawany jeszcze przez oddział regionalny TVP w Lublinie.
            </HeroPara>
            <LinkBtn onClick={() => Toggle()}>Więcej</LinkBtn>
            <Modal show={modal} close={Toggle} title="Kantor i inni">
              <p>
                - Przy pomocy telewizji chciałem wykształcić pokolenie ludzi
                wrażliwych na sztukę i architekturę – mówił w audycji. I
                przypomniał anegdotę związaną z Tadeuszem Kantorem, który miał
                pracownię nad Zinem. - Często do mnie przychodził. Pewnego dnia
                wpadł i powiedział: "Cóż Ty się tak mizdrzysz do tego Wawelu?".
                A ja rysowałem sylwetę Wawelu, wtedy z okien tej pracowni było
                jeszcze ją widać. I to był już 33. rysunek zamku. Kantor był tym
                faktem ogromnie zdziwiony. Zapytał dlaczego to robię.
              </p>
              <br />
              <p>
                <em>
                  www.polskieradio.pl/39/156/Artykul/845769,Wiktor-Zin---mistrz-piorka-i-wegla
                </em>
              </p>
            </Modal>
            <LinkBtn onClick={() => Toggle1()} primary mrRight>
              Czytaj
            </LinkBtn>
            <Modal1 show={modal1} close={Toggle1} title="Pomnik Stoczniowców">
              <p>
                Wiktor Zin tłumaczył w programie, dlaczego nie zatwierdził
                pierwotnego projektu pomnika Stoczniowców w Gdańsku. -
                Powiedziałem wtedy, że ja się na cztery krzyże nie godzę –
                wspominał. – I powiedziałem też, że nie godzę się na to, żeby
                znicz, który na modelu mi pokazywano był tak wysoki. Na sali
                rozległy się gwizdy. Zapytałem wtedy: "A czy wy wiecie, że jak
                ten znicz zjawi się w naturalnej skali, to on będzie przypominał
                od dołu sedes".
              </p>
              <br />
              <p>
                <em>
                  www.polskieradio.pl/39/156/Artykul/845769,Wiktor-Zin---mistrz-piorka-i-wegla
                </em>
              </p>
            </Modal1>
          </HeroContent>
          <HeroImage>
            <Img src={img} alt="..."></Img>
          </HeroImage>
        </HeroWrap>
        {/* <Form action="#">
          <Input type="text" placeholder="search" />
          <LinkSearch to="#">
            <FaSearch />
          </LinkSearch>
        </Form> */}
      </HeroContainer>
    </>
  );
};

export default HeroSection;
