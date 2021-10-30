import styled from "styled-components";
import BgImg from "../../images/6.jpg";

export const ContactSection = styled.div`
  margin-top: 8rem;
  padding: 5rem 0;

  @media only screen and (max-width: 768px) {
    padding-top: 8rem;
  }
  @media only screen and (max-width: 380px) {
    padding: 3rem;
    margin-top: 1rem;
  }
`;

export const Heading = styled.h2`
  font-size: 5rem;
  color: #000;
  text-align: center;
  line-height: 3rem;

  @media only screen and (max-width: 380px) {
    font-size: 3rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.6rem;
  color: #000;
  text-align: center;
  line-height: 2rem;
  margin: 3rem;

  @media only screen and (max-width: 380px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const ContactMain = styled.div`
  width: 100%;
  background: url(${BgImg}) center/cover no-repeat fixed;
  height: auto;
  position: relative;
  padding-top: 10rem;
  padding-bottom: 7rem;

  @media only screen and (max-width: 480px) {
    background: none;
    padding: 0;
    margin: 1rem 0;
  }
`;

export const ContactContainer = styled.div`
  padding: 5rem 9%;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form`
  background: #fff;
  width: 100%;
  padding: 3rem 4rem;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #ececec;
  padding: 1.3rem;
  font-size: 2rem;
  border: none;
  border-radius: 1rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #ececec;
  padding: 1.3rem 1.3rem 6rem;
  font-size: 2rem;
  border: none;
  border-radius: 1rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ImageSec = styled.div`
  width: 100%;

  svg {
    width: 7rem;
    height: 7rem;
    padding: 0;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      opacity: 0.4;
    }

    @media only screen and (max-width: 1200px) {
      height: 68vh;
    }
    @media only screen and (max-width: 768px) {
      height: 50vh;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
