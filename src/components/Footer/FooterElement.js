import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterSection = styled.div`
  width: 100%;
  background: #2c2c2c;
  margin-top: -14rem;
  padding-top: 12rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: 480px) {
    padding-top: 4rem;
    margin-top: -6rem;
  }
`;

export const FooterHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Address = styled.div`
  background: #fff;
  padding: 2rem;
  width: 70%;
  margin-top: 3rem;
  border-radius: 5rem;
  display: flex;
  justify-content: space-around;
  text-align: center;

  @media only screen and (max-width: 578px) {
    width: 95%;
  }
  @media only screen and (max-width: 380px) {
    padding: 1rem;
    flex-wrap: wrap;
  }
`;

export const Icon = styled.div`
  font-size: 2.4rem;
  color: #17ab74;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 1.7rem;
  color: #afafaf;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5rem 9%;
  justify-content: space-between;

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Col = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled(LinkS)`
  margin-top: 2rem;
  align-items: center;
  padding-right: 2rem;
  width: 30%;
  cursor: pointer;

  @media only screen and (max-width: 380px) {
    width: 45%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const FooterMenu = styled.ul`
  color: #fff;
  margin-left: 3rem;
  text-align: left;
`;

export const MenuHeading = styled.h2`
  font-size: 2rem;
`;

export const Link = styled(LinkS)`
  color: #fff;
  font-size: 1.4rem;
  display: block;
  padding: 1rem;
  position: relative;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: #17ab74;
  }
  &::before {
    content: "";
    background: #fff;
    height: 1.2rem;
    border: 0.2rem solid #17ab74;
    width: 1.2rem;
    position: absolute;
    border-radius: 5rem;
    align-items: center;
    left: -1rem;
  }
`;

export const ProductMain = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const ProductHeading = styled.h2`
  font-size: 2rem;
  color: #fff;
  padding-bottom: 1rem;
`;

export const ProductLink = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
`;

export const ProductMenu = styled.div``;

export const Item = styled.li`
  margin-right: 3rem;
  padding: 0.6rem;
  position: relative;
`;

export const Circle = styled.span`
  background: #fff;
  height: 1.5rem;
  border: 0.2rem solid #17ab74;
  width: 1.5rem;
  border-radius: 5rem;
  position: absolute;
  align-items: center;
  left: -2rem;
`;

export const LinkP = styled(LinkS)`
  font-size: 1.4rem;
  color: #fff;
  text-transform: capitalize;
  transition: all 0.3s linear;

  &:hover {
    color: #17ab74;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 4rem;

  @media only screen and (max-width: 991px) {
    width: 60%;
  }
  @media only screen and (max-width: 578px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 2rem;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 5rem;
  font-size: 1.5rem;
`;

export const LinkSearch = styled(LinkS)`
  color: #fff;
  background: #727272;
  position: absolute;
  height: 5.7rem;
  width: 14rem;
  right: 0;
  text-align: center;
  display: block;
  padding: 2rem 0;
  font-size: 1.7rem;
  border-radius: 0 5rem 5rem 0;
  transition: all 0.3s linear;

  &:hover {
    background: #555;
  }

  @media only screen and (max-width: 380px) {
    height: 5.7rem;
  }
`;

export const SocialSec = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialMain = styled.ul`
  list-style: none;
  display: flex;
`;

export const LinkSocial = styled(LinkR)`
  color: #17ab74;
  font-size: 2rem;
  padding: 1rem;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  background: #727272;
  text-align: center;
  padding: 3rem 0;
`;

export const CopySec = styled.p`
  font-size: 1.6rem;
  color: #fff;
  text-align: center;
`;
