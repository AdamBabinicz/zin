import styled from "styled-components";
import BgImg from "../../images/1.jpeg";
import { Link as LinkR } from "react-scroll";

export const HeroContainer = styled.div`
  background: url(${BgImg}) center/cover no-repeat fixed;
  width: 100% relative;
  top: -60px;
  left: 0;
  bottom: 0;

  @media only screen and (max-width: 992px) {
    height: 93vh;
  }
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const HeroWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5%;
  gap: 2rem;

  @media only screen and (max-width: 991px) {
    padding-top: 3rem;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 3rem;
    flex-direction: column;
  }
  @media only screen and (max-width: 380px) {
    padding: 1rem;
  }
`;

export const HeroContent = styled.div`
  width: 90%;
  margin-bottom: 0.2rem;

  @media only screen and (max-width: 991px) {
    width: 80%;
    padding-top: 4rem;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 3rem;
    /* padding-top: 7rem; */
    width: 100%;
    /* margin-top: 7rem; */
  }
  @media only screen and (max-width: 576px) {
    /* padding-top: 10rem; */
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bolder;
  line-height: 8rem;
  color: #1f1f1f;
  margin-bottom: 1rem;

  @media only screen and (max-width: 992px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`;

export const HeroPara = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  padding-bottom: 4rem;
  color: #1f1f1f;

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const LinkBtn = styled(LinkR)`
  background: ${({ primary }) => (primary ? "#555" : "#2ba879")};
  padding: 1.5rem;
  font-size: 2rem;
  line-height: 5rem;
  border-radius: 0.6rem;
  color: #fff;
  margin-right: ${({ mrRight }) => (mrRight ? "0" : "3rem")};
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "#333" : "#555")};
  }

  @media only screen and (max-width: 991px) {
    margin-right: 1rem;
    padding: 1rem 1.2rem;
    font-size: 1.5rem;
  }
`;

export const HeroImage = styled.div`
  border: none;
  width: 70%;
  align-items: center;
  padding: 8rem 1rem;

  @media only screen and (max-width: 992px) {
    padding: 2rem 1rem;
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const Form = styled.form`
  width: 60%;
  position: relative;
  align-items: center;
  top: -50px;
  margin-left: 0.3rem;

  @media only screen and (max-width: 992px) {
    top: 15px;
  }
  @media only screen and (max-width: 768px) {
    top: 20px;
    width: 80%;
  }
  @media only screen and (max-width: 380px) {
    width: 85%;
  }
`;

export const Input = styled.input`
  background: transparent;
  color: #000;
  position: relative;
  width: 100%;
  padding: 1rem;
  font-size: 1.7rem;
  border-radius: 5rem;
  outline: none;
  line-height: 3rem;
  border: 0.2rem solid #999;

  &::after {
    content: "";
    position: absolute;
    font-size: 2rem;
    top: 20px;
  }
`;

export const LinkSearch = styled(LinkR)`
  display: flex;
  position: absolute;
  background: #777;
  color: #fff;
  top: 0;
  right: 0;
  text-align: center;
  border-radius: 0 3rem 3rem 0;
  border: 0.2rem solid transparent;
  padding: 1.5rem 5rem;
  font-size: 2rem;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: #727272;
  }
`;

export const FaSearch = styled.div``;
