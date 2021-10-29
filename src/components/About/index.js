import React, { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import {
  Gi3DStairs,
  GiBrokenPottery,
  GiCastleRuins,
  GiCurlingVines,
} from "react-icons/gi";
import {
  AboutSection,
  Heading,
  Span,
  SubHeading,
  Para,
  AboutContainer,
  AboutCol,
  MainBox,
  MainBox1,
  MainBox2,
  Icon,
  HeadingBox,
  HeadingPara,
  BtnWrap,
  AboutSubSec,
  MainSec,
  ImageDiv,
  Img,
  AboutContentSec,
  Title,
  SubTitle,
  ParaSec,
  ImageRightArrow,
  RightArrow,
} from "./AboutElement";
import { Button, Container } from "../../GlobalStyle";
import img1 from "../../images/2.png";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";
import Modal2 from "../Portal/Modal";
import Modal3 from "../Portal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const [modal1, setModal1] = useState(false);
  const Toggle1 = () => setModal1(!modal1);
  const [modal2, setModal2] = useState(false);
  const Toggle2 = () => setModal2(!modal2);
  const [modal3, setModal3] = useState(false);
  const Toggle3 = () => setModal3(!modal3);
  return (
    <>
      <AboutSection id="/About">
        <Heading>
          Architekt <Span>i rysownik</Span>
        </Heading>
        <SubHeading>
          <Para>
            - Chciałem pokazać ludziom co jest ładne. Takie było moje założenie.
            Trzy pokolenia oglądały te audycje i patrzyły na moje rysunki –
            powiedział Wiktor Zin, autor popularnego programu telewizyjnego
            "Piórkiem i węglem”.
          </Para>
        </SubHeading>
        <AboutContainer>
          <AboutCol>
            <MainBox>
              <Icon className="icondiv">
                <GiCastleRuins />
              </Icon>
              <HeadingBox>Piękno potężne</HeadingBox>
              <HeadingPara>
                “Teraz w Bombaju leżąc w hotelowym łóżku głowę dałbym za to, ze
                polska architektura jest najpiękniejsza! Na pewno można ja
                nazwać zjawiskiem niepowtarzalnym.”
              </HeadingPara>
            </MainBox>
            <BtnWrap>
              <Button onClick={() => Toggle()}>Więcej</Button>
              <Modal
                show={modal}
                close={Toggle}
                title="W jego gabinecie zawsze wisiał krzyż"
              >
                <p>
                  Od dziecka przejawiał zainteresowania artystyczne. Pasjonowało
                  go zwłaszcza malarstwo i rysunek. Pierwszych lekcji plastyki
                  udzielali mu dziadek i ojciec, właściciele zakładu
                  malarsko-pozłotniczego w rodzinnym Hrubieszowie. Później pod
                  swoje skrzydła wziął go Aleksandrow, uczeń Repina, emigrant z
                  Rosji, który młodego Wiktora wprowadził w zasady geometrii i
                  perspektywy. Bardzo przydało mu się to w trakcie studiów
                  architektonicznych w Krakowie. Po ich ukończeniu podjął pracę
                  na Politechnice Krakowskiej, gdzie przez lata kierował między
                  innymi Instytutem Historii Architektury i Konserwacji
                  Zabytków.
                </p>
                <br />
                <p>
                  <em>
                    facet.wp.pl/wiktor-zin-dzentelmen-z-piorkiem-i-weglem-6036865635447937a
                  </em>
                </p>
              </Modal>
            </BtnWrap>
          </AboutCol>
          <AboutCol>
            <MainBox1>
              <Icon className="icondiv">
                <GiBrokenPottery />
              </Icon>
              <HeadingBox>Piękno utracone</HeadingBox>
              <HeadingPara>
                Książka o pięknie architektury dawnych czasów, o tym co na
                zawsze przeminęło. Wiktor Zin w gawędziarskim, tchnącym
                romantyzmem stylu opisał podziemia krakowskiego rynku,
                opowiedział o studniach ...
              </HeadingPara>
            </MainBox1>
            <BtnWrap>
              <Button onClick={() => Toggle1()}>Więcej</Button>
              <Modal1
                show={modal1}
                close={Toggle1}
                title="Ratował nie tylko zabytki Krakowa"
              >
                <p>
                  Komunistyczne władze w końcu machnęły ręką na religijne
                  „odchylenie” naukowca. Umieli docenić jego wiedzę i
                  profesjonalizm. Profesor był dla nich zbyt cenny. Nie tylko
                  pracował na uczelni, ale zajął się też ratowaniem zabytków
                  Krakowa. Został m.in. głównym architektem miasta, kierował
                  badaniami Staromiejskiego Zespołu Krakowa i Krakowskiej
                  Komisji Konserwatorskiej. To tylko niektóre z funkcji
                  sprawowanych przez niestrudzonego profesora. W 1977 roku
                  został generalnym konserwatorem zabytków. Zasłynął wówczas
                  uratowaniem niewygodnej politycznie (bo przedstawiającej
                  zwycięstwo Polaków nad Rosjanami) „Panoramy Racławickiej”.
                  Zagrożone zniszczeniem dzieło przewieziono na jego polecenie z
                  Wrocławia do Warszawy.
                </p>
                <br />
                <p>
                  <em>
                    facet.wp.pl/wiktor-zin-dzentelmen-z-piorkiem-i-weglem-6036865635447937a
                  </em>
                </p>
              </Modal1>
            </BtnWrap>
          </AboutCol>
          <AboutCol>
            <MainBox2>
              <Icon className="icondiv">
                <GiCurlingVines />
              </Icon>
              <HeadingBox>Piękno nie dostrzegane</HeadingBox>
              <HeadingPara>
                Bardzo ciekawa pozycja opisująca piękno naszych krajobrazów,
                napisana pięknym językiem przez jednego z bardzo znanych
                architektów polskich, głównego konserwatora zabytków - Wiktora
                Zina.
              </HeadingPara>
            </MainBox2>
            <BtnWrap>
              <Button onClick={() => Toggle2()}>Więcej</Button>
              <Modal2
                show={modal2}
                close={Toggle2}
                title="Najbardziej popularny wśród wykładowców"
              >
                <p>
                  Wiktor Zin był zaprzeczeniem nudnego profesora. Kochał
                  młodzież z wzajemnością. Jego wykłady były oblegane. W
                  plebiscytach na najpopularniejszego wykładowcę Politechniki
                  Krakowskiej zajmował pierwsze miejsce. Podobnie było na innych
                  uczelniach, z którymi współpracował – Europejskiej Akademii
                  Sztuk, Akademii Górniczo-Hutniczej i rzeszowskiej Wyższej
                  Szkole Informatyki i Zarządzania, gdzie kierował Katedrą
                  Historii Sztuki i Kultury. Śmierć przyszła do niego właśnie
                  wtedy, gdy przygotowywał się do zajęć na rzeszowskiej uczelni.
                  Jego ostatniego wykładu wysłuchał już ktoś inny.
                </p>
                <br />
                <p>
                  <em>
                    facet.wp.pl/wiktor-zin-dzentelmen-z-piorkiem-i-weglem-6036865635447937a
                  </em>
                </p>
              </Modal2>
            </BtnWrap>
          </AboutCol>
        </AboutContainer>
        <AboutSubSec>
          <Container>
            <MainSec>
              <ImageDiv>
                <Img src={img1} alt="..." />
              </ImageDiv>
              <AboutContentSec>
                <Title>Dziecięce marzenie</Title>
                <SubTitle>
                  <strong>List do marszałka Polski</strong>
                </SubTitle>
                <ParaSec>
                  Od najmłodszych lat chciał zostać malarzem. A ponieważ
                  rodziców nie stać było na posłanie go do szkoły, w której
                  mógłby rozwijać swe talenty, napisał list do marszałka Polski
                  Edwarda Rydza-Śmigłego z prośbą o stypendium. - A dlaczego do
                  niego? - powiedział Wiktor Zin. - Bo czytając jego życiorys
                  dowiedziałem się, że on sam skończył Akademię Sztuk Pięknych w
                  wymarzonym przeze mnie Krakowie. Sądziłem, że on mnie
                  zrozumie, posłałem mu swoje rysunki, wykonane piórkiem,
                  akwarelą.
                </ParaSec>
                <RightArrow>
                  <AiOutlineCaretRight onClick={() => Toggle3()} />
                </RightArrow>
                <Modal3
                  show={modal3}
                  close={Toggle3}
                  title="Wiktor Zin czyli „Piórkiem i węglem”"
                >
                  <p>
                    W najbardziej znanej ze swoich audycji „Piórkiem i węglem“
                    Zin prowadzi żywe opowiadania rysunkowe dotyczące polskiej
                    tradycji budowlanej, architektury i sztuki. Wiktor Zin
                    posiadając bardzo wszechstronną wiedzę dotyczącą polskiej
                    historii, literatury i sztuki potrafi tę wiedzę połączyć w
                    całość. Profesor tworzy unikatową „miksturę“, którą w
                    „czasie rzeczywistym“ ilustruje zarówno tytułowym węglem jak
                    kredą czy suchą pastelą. Tematami jego rozważań jest
                    najczęściej architektura, zarówno dworska jak i sakralna,
                    oraz ta zwykła wiejska i zagrodowa. Ciekawostką jest, że Zin
                    potrafił opowiadać także o kolorowych strojach dworskich i
                    szlacheckich, sztućcach, broni białej i palnej oraz o
                    zwyczajach w dawnej Polsce. Należy pamiętać o tym, że Zin
                    był przede wszystkim wielkim rysownikiem architektury.
                  </p>
                  <br />
                  <p>
                    <em>
                      www.blog.rysunek-architektura.pl/blog/piorkiem-i-weglem,72.html
                    </em>
                  </p>
                </Modal3>
              </AboutContentSec>
            </MainSec>
          </Container>
        </AboutSubSec>
      </AboutSection>
    </>
  );
};

export default About;
