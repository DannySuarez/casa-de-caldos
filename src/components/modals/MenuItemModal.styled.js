import styled from 'styled-components';

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;

  @media (max-width: 641px) {
    min-height: 100vh;

  }

  > button {
    opacity: 1;
    margin-top: -2px;

    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;

    z-index: 1;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 32px;
    height: 32px;

    float: right;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    text-shadow: 0 1px 0 #fff;

    i {
      display: inline-block;
      width: 32px;
      height: 32px;
    }
  }
`;

export const ModalImage = styled.section`
  margin-bottom: -5px;
  position: relative;

  @media (max-width: 641px) {
    min-height: 42vw;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
`;

export const ModalBody = styled.section`
  position: relative;
  padding: 20px 30px 30px;

  h2 {
    font-size: 20px;
    line-height: 1.3;
    clear: both;
    margin: 0 0 14px;
  }

  p {
    margin-top: -4px;
  }
`;

