import styled from "styled-components";
import BgImg from "../../images/2.jpg";
import BgImg1 from "../../images/9.jpg";
import BgImg2 from "../../images/11.jpg";
import BgImg3 from "../../images/10.jpg";

export const AboutSection = styled.div`
  width: 100%;
  padding-top: 2rem;

  @media only screen and (max-width: 768px) {
    padding-top: 5rem;
    margin-top: 10rem;
  }
  @media only screen and (max-width: 578px) {
    margin-top: 5rem;
  }
  @media only screen and (max-width: 480px) {
    margin-top: -13rem;
  }
  @media only screen and (max-width: 380px) {
    margin-top: -6rem;
  }
`;

export const Heading = styled.h2`
  font-size: 4rem;
  color: #000;
  text-align: center;
  padding-top: 3rem;

  @media only screen and (max-width: 380px) {
    padding-top: 6rem;
    font-size: 3rem;
  }
`;

export const Span = styled.span`
  color: #17ab74;
`;

export const SubHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Para = styled.div`
  color: #000;
  font-size: 1.3rem;
  text-align: center;
  width: 70%;
`;

export const AboutContainer = styled.div`
  display: flex;
  padding: 0.5rem 5%;
  gap: 2.4rem;
  margin-top: 6rem;
  /* padding-bottom: 20rem; */
  justify-content: center;

  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const AboutCol = styled.div`
  flex: 1 1 50%;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 991px) {
    flex: 1 1 33%;
  }
  @media only screen and (max-width: 578px) {
    flex: 1 1 50%;
  }
`;

export const MainBox = styled.div`
  background: url(${BgImg1}) center/cover no-repeat;
  text-align: center;
  padding: 5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 0px;
  transition: all 0.3s linear;
  color: #fff;

  &:hover {
    .icondiv {
      color: #fff;
    }
    background: #727272;
    box-shadow: 0px 0px 8px #000;
    color: #fff;
  }
`;

export const MainBox1 = styled.div`
  background: url(${BgImg2}) center/cover no-repeat;
  text-align: center;
  padding: 5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 0px;
  transition: all 0.3s linear;
  color: #fff;

  &:hover {
    .icondiv {
      color: #fff;
    }
    background: #727272;
    box-shadow: 0px 0px 8px #000;
    color: #fff;
  }
`;

export const MainBox2 = styled.div`
  background: url(${BgImg3}) center/cover no-repeat;
  text-align: center;
  padding: 5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 0px;
  transition: all 0.3s linear;
  color: #fff;

  &:hover {
    .icondiv {
      color: #fff;
    }
    background: #727272;
    box-shadow: 0px 0px 8px #000;
    color: #fff;
  }
`;

export const Icon = styled.div`
  color: #727272;
  font-size: 9rem;
  margin: 1rem;
`;

export const HeadingBox = styled.h3`
  font-size: 2.5rem;
  padding: 2rem 1rem;
  line-height: 2rem;
`;

export const HeadingPara = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1rem 2rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

export const AboutSubSec = styled.div`
  width: 100%;
  display: flex;
  background: #727272;
  height: auto;
  margin-top: 70px;
  margin-bottom: 20px;
  position: relative;
  padding: 10rem 0;

  @media only screen and (max-width: 380px) {
    padding: 4rem 0;
    margin-top: 2rem;
  }
  &::before {
    content: "";
    width: 100%;
    height: 110px;
    position: absolute;
    top: 0;
    background: url(${BgImg}) bottom center/cover no-repeat fixed;
  }
`;

export const AboutContentSec = styled.div`
  height: auto;
  background: #fff;
  padding: 4.2rem 2rem 0 4rem;
  justify-content: center;
  width: 100%;
  z-index: 0;

  @media only screen and (max-width: 1200px) {
    padding: 5rem 2rem;
    height: 60vh;
  }
  @media only screen and (max-width: 992px) {
    padding: 2rem;
    height: 51vh;
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 1rem 4rem;
    /* height: 63vh; */
  }
  @media only screen and (max-width: 380px) {
    height: 100%;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5rem;
`;

export const Img = styled.img`
  /* width: 100%; */
  height: 100%;
  /* max-width: 100%; */

  @media only screen and (max-width: 1200px) {
    height: 60vh;
  }
  @media only screen and (max-width: 992px) {
    height: 51vh;
    width: 100%;
  }
`;

export const MainSec = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  padding: 3rem 6%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ParaSec = styled.p`
  font-size: 1.7rem;
  line-height: 2rem;
  padding: 0 2rem 2rem 0;
`;

export const RightArrow = styled.div`
  position: relative;
  top: -35%;
  right: 0;
  left: -50%;
  z-index: -1;

  svg {
    width: 7rem;
    height: 7rem;
    padding: 0;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      opacity: 0.4;
    }
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SubTitle = styled.h5`
  font-size: 2rem;
  width: 100%;
  padding-bottom: 3rem;
  font-weight: 500;
`;

export const Title = styled.h4`
  font-size: 4rem;
  padding: 0 0 3rem;
  color: #2ba879;
  font-weight: 600;
`;
