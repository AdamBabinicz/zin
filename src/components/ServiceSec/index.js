import React, { useState } from "react";
import {
  ServiceContainer,
  Heading,
  ServiceMain,
  Box,
  Icon,
  HeadingMain,
  ParaBox,
  BtnWrap,
} from "./ServiceSecElement";
import { Button } from "../../GlobalStyle";
import {
  FaChromecast,
  FaMedapps,
  FaEnvira,
  FaDribbble,
  FaSearch,
} from "react-icons/fa";
import {
  Gi3DStairs,
  GiCastle,
  GiChurch,
  GiClassicalKnowledge,
  GiClothJar,
  GiColumnVase,
} from "react-icons/gi";
import { AiOutlineCloudSync } from "react-icons/ai";
import Modal from "../Portal/Modal";

const Service = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
    <>
      <ServiceContainer id="/Service">
        <Heading>
          Publica <span>Operatio</span>
        </Heading>
        <ServiceMain>
          <Box>
            <Icon>
              <Gi3DStairs />
            </Icon>
            <HeadingMain>od 1962</HeadingMain>
            <ParaBox>
              Kierował Instytutem Historii Architektury i Konserwacji Zabytków
            </ParaBox>
          </Box>
          <Box>
            <Icon>
              <GiCastle />
            </Icon>
            <HeadingMain>1962–1967</HeadingMain>
            <ParaBox>Dziekan Wydziału Architektury</ParaBox>
          </Box>
          <Box>
            <Icon>
              <GiChurch />
            </Icon>
            <HeadingMain>1958-1964</HeadingMain>
            <ParaBox>Główny architekt Krakowa</ParaBox>
          </Box>
          <Box>
            <Icon>
              <GiClassicalKnowledge />
            </Icon>
            <HeadingMain>1960–1975</HeadingMain>
            <ParaBox>Kierownik badań Staromiejskiego Zespołu Krakowa</ParaBox>
          </Box>
          <Box>
            <Icon>
              <GiClothJar />
            </Icon>
            <HeadingMain>1970–1978</HeadingMain>
            <ParaBox>
              Przewodniczący Krakowskiej Komisji Konserwatorskiej
            </ParaBox>
          </Box>
          <Box>
            <Icon>
              <GiColumnVase />
            </Icon>
            <HeadingMain>1977–1981</HeadingMain>
            <ParaBox>
              Generalny konserwator zabytków w randze wiceministra kultury i
              sztuki
            </ParaBox>
          </Box>
        </ServiceMain>
        <BtnWrap>
          <Button onClick={() => Toggle()}>Więcej</Button>
          <Modal show={modal} close={Toggle} title="Dalsza działalność">
            <p>
              W latach 1978–1983 był przewodniczącym Międzyresortowej Komisji
              ds. Rewaloryzacji Zabytkowych Zespołów Miejskich. W latach 80. XX
              wieku wykładowca na uniwersytecie w Zagrzebiu. Członek Rady
              Stowarzyszenia Architektów Rzeczypospolitej Polskiej, Towarzystwa
              Opieki nad Zabytkami (1975–1983 jako prezes Zarządu Głównego),
              członek Meksykańskiej Akademii Architektury. W latach 1986–1989
              był członkiem Ogólnopolskiego Komitetu Grunwaldzkiego. W latach
              1986–1988 członek Społecznego Komitetu Odnowy Starego Miasta
              Zamościa.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Wiktor_Zin</em>
            </p>
          </Modal>
        </BtnWrap>
      </ServiceContainer>
    </>
  );
};

export default Service;
