import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  SideBarSection,
  SideBarIcon,
  SideBarMenu,
  SideBarLink,
  SideBarBtn,
  LinkBtn,
} from "./SideBarElement";

const SideBar = (props) => {
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
      <SideBarSection isOpen={props.isOpen}>
        <SideBarIcon onClick={props.toggle}>
          <FaTimes />
        </SideBarIcon>
        <SideBarMenu scrollNav={scrollNav}>
          <SideBarLink
            onClick={props.toggle}
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Start
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="/About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Artysta
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="/Service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Działalność
          </SideBarLink>
          <SideBarLink
            onClick={props.toggle}
            to="/Contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Kontakt
          </SideBarLink>
          <SideBarBtn>
            <LinkBtn
              onClick={props.toggle}
              to="/Slider"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Galeria
            </LinkBtn>
          </SideBarBtn>
        </SideBarMenu>
      </SideBarSection>
    </>
  );
};

export default SideBar;
