import React, { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import {
  ContactSection,
  Heading,
  SubHeading,
  ContactMain,
  ContactContainer,
  Row,
  Form,
  Input,
  TextArea,
  ImageSec,
} from "./ContactElement";
import { Button } from "../../GlobalStyle";
import Modal from "../Portal/Modal";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
    <div>
      <ContactSection id="/Contact">
        <Heading>Chopin pejzażu</Heading>
        <SubHeading>
          W Krakowie znajduje się ulica jego imienia, do 2017 nosząca imię Janka
          Szumca. Stowarzyszenie Ochrony Narodowego Dziedzictwa Materialnego
          przyznaje <b>nagrodę imienia profesora Wiktora Zina</b>. Nagroda
          wręczana jest na Zamku Królewskim w Warszawie, w trakcie gali
          ogłoszenia wyników i wręczenia nagród w
          <b> Ogólnopolskim Konkursie Otwartym „Modernizacja Roku”</b>.
          <b> Szkoła Podstawowa nr 137</b> w Krakowie nosi imię prof. Wiktora
          Zina.
        </SubHeading>
        <ContactMain>
          <ContactContainer>
            <Row>
              {/* <Form>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
                <TextArea type="text" placeholder="Message" />
                <Button>Wyślij</Button>
              </Form> */}
              <ImageSec>
                <AiOutlineCaretRight onClick={() => Toggle()} />
                <Modal show={modal} close={Toggle} title="Pogrzeb">
                  <p>
                    Pogrzeb Wiktora Zina odbył się dnia 23 maja 2007 na
                    cmentarzu Rakowickim (kwatera Y, płd.). Wcześniej – o godz.
                    11 w kościele Mariackim odbyła się msza św. pogrzebowa w
                    intencji zmarłego. Mszy św. przewodniczył biskup Jan
                    Szkodoń, koncelebrowało ją 24 duchownych m.in.: biskup Jan
                    Zając, ks. Janusz Bielański, ks. Bronisław Fidelus –
                    proboszcz Bazyliki Mariackiej. Kazanie wygłosił ks. prałat
                    Władysław Gasidło – dziekan dekanatu Kraków Centrum. Po
                    eucharystii, trumna z ciałem profesora, przy dźwiękach
                    kapeli góralskiej opuściła bazylikę.
                  </p>
                  <br />
                  <p>
                    <em>pl.wikipedia.org/wiki/Wiktor_Zin</em>
                  </p>
                </Modal>
              </ImageSec>
            </Row>
          </ContactContainer>
        </ContactMain>
      </ContactSection>
    </div>
  );
};

export default Contact;
