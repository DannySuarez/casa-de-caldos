import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1040;
  overflow-x: hidden;
  overflow-y: auto;

  .modal-dialog {
    margin: 30px auto;
  }

  div:first-child {
    transform: translate(0, 0);
    max-width: 484px;
    width: 100%;
    position: relative;

    @media (max-width: 641px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

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

