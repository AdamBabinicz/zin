import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import LogoImg from "../../images/3.png";
import img from "../../images/5.png";
import {
  FooterSection,
  FooterHeading,
  Address,
  Icon,
  FooterContainer,
  Col,
  Logo,
  Img,
  Item,
  ProductMenu,
  FooterMenu,
  MenuHeading,
  Link,
  ProductMain,
  ProductHeading,
  ProductLink,
  Circle,
  Form,
  Span,
  Input,
  LinkSearch,
  SocialSec,
  SocialMain,
  LinkSocial,
  CopyRight,
  CopySec,
} from "./FooterElement";

const Footer = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <FooterSection>
        <FooterHeading>
          <Address>
            <Icon>
              <MdLocationOn /> <Span>Polska, Kraków</Span>
            </Icon>
            <Icon>
              <FaPhoneAlt /> <Span>+48 777553556</Span>
            </Icon>
            <Icon>
              <GrMail /> <Span>puaro@vp.pl</Span>
            </Icon>
          </Address>
        </FooterHeading>
        <FooterContainer>
          <Col>
            <Logo
              to="Home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Img src={LogoImg} alt="..." />
            </Logo>
            <FooterMenu scrollNav={scrollNav}>
              <MenuHeading>Linki</MenuHeading>
              <Link
                to="Home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Start
              </Link>
              <Link
                to="/About"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Artysta
              </Link>
              <Link
                to="/Service"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Działalność
              </Link>
              <Link
                to="/Contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Kontakt
              </Link>
            </FooterMenu>
          </Col>
          <Col>
            <ProductMain>
              <img src={img} alt="..." />
              {/* <ProductHeading>Product</ProductHeading>
              <ProductMenu>
                <Item>
                  <ProductLink to="#">
                    <Circle /> webhosting
                  </ProductLink>
                </Item>
                <Item>
                  <ProductLink to="#">
                    <Circle /> word
                  </ProductLink>
                </Item>
                <Item>
                  <ProductLink to="#">
                    <Circle /> world link
                  </ProductLink>
                </Item>
                <Item>
                  <ProductLink to="#">
                    <Circle /> hosting link
                  </ProductLink>
                </Item>
                <Item>
                  <ProductLink to="#">
                    <Circle /> service link
                  </ProductLink>
                </Item>
              </ProductMenu> */}
            </ProductMain>
          </Col>
          {/* <Form>
            <Input type="text" placeholder="Email" />
            <LinkSearch to="/Contact">Subscribe</LinkSearch>
          </Form> */}
        </FooterContainer>
        <SocialSec>
          <SocialMain>
            <LinkSocial
              to="//www.facebook.com/MadeinKrakow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </LinkSocial>
            <LinkSocial
              to="//pl.pinterest.com/krzyad/wiktor-zin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </LinkSocial>
            <LinkSocial
              to="//twitter.com/lata8290/status/1305437932631871488"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </LinkSocial>
            <LinkSocial
              to="//www.youtube.com/watch?v=yQz6S70LIRA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </LinkSocial>
          </SocialMain>
        </SocialSec>
      </FooterSection>
      <CopyRight>
        <CopySec>Kraków 2021 - {new Date().getFullYear()}.</CopySec>
      </CopyRight>
    </>
  );
};

export default Footer;
