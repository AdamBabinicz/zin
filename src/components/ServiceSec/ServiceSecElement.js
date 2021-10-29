import styled from "styled-components";

export const ServiceContainer = styled.div`
  margin-top: 3rem;

  @media only screen and (max-width: 768px) {
    padding-top: 8rem;
  }
`;

export const Heading = styled.h2`
  font-size: 5rem;
  text-align: center;
  padding-right: 1rem;
  white-space: wrap;

  /* @media only screen and (max-width: 676px) {
    font-size: 4rem;
  } */

  span {
    color: #2ba879;
    padding-left: 1rem;
  }
`;

export const ServiceMain = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const Box = styled.div`
  height: 35rem;
  background: #fff;
  border: 0.2rem solid #55b994;
  border-radius: 2rem;
  width: 30rem;
  text-align: center;
  margin: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s linear;

  &:hover {
    color: #fff;
    background: #727272;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  }
  @media only screen and (max-width: 578px) {
    width: 70%;
    height: 38rem;
  }
`;

export const Icon = styled.i`
  font-size: 5rem;
  height: 43%;
  width: 50%;
  border: 0.2rem solid #55b994;
  border-radius: 50%;
  background: #fff;
  color: #55b994;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 3rem;

  @media only screen and (max-width: 578px) {
    width: 43%;
  }
  @media only screen and (max-width: 380px) {
    font-size: 3rem;
    height: 28%;
  }
`;

export const HeadingMain = styled.div`
  font-size: 2rem;
  margin-top: 3rem;
  line-height: 3rem;
  font-weight: 500;
`;

export const ParaBox = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 2rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  margin-top: 3rem;
`;
