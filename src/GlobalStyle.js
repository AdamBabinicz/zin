import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      margin:0;
      padding:0;
      box-sizing: border-box;
   }
   html {
      font-size:62.5%;
   }

   @media only screen and (max-width:768px) {
      html {
         font-size:55%;
      }
   }
   @media only screen and (max-width:480px) {
      html {
         font-size:45%;
      }
   }
   @media only screen and (max-width:380px) {
      html {
         font-size:55%;
      }
   }
   body {
      font-family: 'Poppins', sans-serif;
      font-weight: normal;
   }
   a {
      text-decoration: none;
      transition: all 0.3s linear;
   }
`;

export const Button = styled.button`
  padding: 1rem 2.3rem;
  background: #727272;
  border: none;
  outline: none;
  font-size: 1.7rem;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: rgba(143, 143, 143, 0.89);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;

  @media only screen and (max-width: 991px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export default GlobalStyle;
