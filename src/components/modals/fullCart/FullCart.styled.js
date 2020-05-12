import styled from 'styled-components';

export const CheckoutContainer = styled.div`
 display: flex;
 flex-direction: column;
 position: fixed;
 border: none;
 border-radius: 0 0 4px 4px;
 box-shadow: 0 2px 4px rgba(45,60,72,.2);
 width: 410px;
 padding: 0;
 z-index: 1040;
 background-color: #fff;
 opacity:1 ;
 transform: translateZ(0);
 transition: transform .3s cubic-bezier(0,.36,.42,1);
 max-height:100vh;

 @media screen and (min-width: 768px) and (max-width: 1023px),
 screen and (min-width: 1024px) and (max-width:1279px),
 screen and (min-width: 1280px) {
  left: 0;
  right: 0;
  margin: auto;
 }

 @media screen and (max-width: 479px) {
   bottom: 0;
 }

 @media screen and (max-width: 479px),
 screen and (min-width: 480px) and (max-width: 599px),
 screen and (min-width: 600px) and (max-width: 767px) {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  border-radius: 0;
  width: 100vw;
  }
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  box-shadow: 0 1px 0 #ccd1d5;
  padding: 0 32px;
  min-height: 70px;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

export const CloseCartButton = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;

`;

export const Section = styled.section`
  padding: 0 32px;
  text-align: left;
  margin-bottom: auto;
  height: 70vh;
  overflow: scroll;

  @media screen and (max-width: 479px),
  screen and (min-width: 480px) and (max-width: 599px),
  screen and (min-width: 600px) and (max-width: 767px) {
  }

  > div:first-child {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 24px 0;
 border-bottom: 1px solid #ccd1d5;
  }
`;

export const SubtotalSection = styled.section`
  margin: 0 0 20px;
  padding-top: 20px;
  border-radius: 2px;
  color: var(--rust);

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  h6:first-child {
    flex: 1 1;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 24px 32px;
  box-shadow: 0 -1px 0 #ccd1d5;
  z-index: 1;
  flex-grow: 1;


  button {
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    max-width: 100%;
    min-width: 200px;
    width: 100%;
    outline: none;
    height: 40px;
    padding: 0 15px;
    background-color: var(--rust);
    margin-bottom: 8px;
  }

  button:nth-child(2) {
    background: none;
    color: var(--rust);
    height: auto;
    padding: 0;
    line-height: inherit;
    margin: 0;
  }
`;
