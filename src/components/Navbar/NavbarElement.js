import styled from "styled-components";
import { Link as LinkR } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  background: #a7a7a7;
  display: flex;
  right: 0;
  top: 0;
  position: sticky;
  align-items: center;
  z-index: 999;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  line-height: 4rem;
  cursor: pointer;
`;
export const Span = styled.span`
  width: 100%;
  display: flex;
  font-size: 2rem;
  color: #fff;
  padding: 0 1rem;
  border: 0.3rem solid #555;
  border-radius: 0.2rem;
  position: relative;

  h4 {
    color: #555;
    padding-left: 2rem;
  }
  &::after {
    content: "";
    width: 4rem;
    height: 3.2rem;
    left: 0;
    position: absolute;
    border: 0.3rem solid #fff;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled(LinkR)`
  font-size: 1.7rem;
  color: #fff;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  font-weight: 600;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: #555;
  }
  &.active {
    &::before {
      content: "";
      width: 100%;
      height: 0.3rem;
      background: #555;
      position: absolute;
      top: 4rem;
      bottom: 0;
      left: 0;
      transition: all 0.3s linear;
    }
  }
`;
export const NavBtn = styled.div`
  display: flex;
`;
export const NavLinkBtn = styled(LinkR)`
  color: #fff;
  width: 100%;
  background: #555;
  padding: 1rem 2rem;
  font-size: 1.7rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: #999;
  }
`;
