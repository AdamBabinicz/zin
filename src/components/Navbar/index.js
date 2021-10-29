import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Span,
  MobileIcon,
  NavMenu,
  NavLink,
  NavBtn,
  NavLinkBtn,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 90) {
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
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Span>
              WZ
              <h4>Wiktor Zin</h4>
            </Span>
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLink
              to="Home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Start
            </NavLink>
            <NavLink
              to="/About"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Artysta
            </NavLink>
            <NavLink
              to="/Service"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Działalność
            </NavLink>
            <NavLink
              to="/Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Kontakt
            </NavLink>
            <NavBtn>
              <NavLinkBtn
                to="/Slider"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Galeria
              </NavLinkBtn>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
