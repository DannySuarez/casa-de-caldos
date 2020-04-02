import styled from 'styled-components';

export const Form = styled.form`
  ::before {
    margin: 25px -30px 0;
    padding-top: 20px;
    border-top: 1px solid #ccc;
    content: "";
    display: block;
    position: relative;
  }
`;

export const ItemModifiers = styled.div`
  ::before {
    padding-top:21px;
    background-image: linear-gradient(90deg,#ccc 25%,hsla(0,0%,80%,0) 0,hsla(0,0%,80%,0));
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: 4px 1px;
    content: "";
    display: block;
    height: 1px;
    position: relative
  }

  legend {
    display: block;
    font-size:14px;
    border: none;
    color: #2d3c48;
    font-weight: 500;
    margin: 0 0 26px
  }

  span:first-child {
    margin-right: 7px;
  }

  span:nth-child(2) {
    color: #959ba2;
    display: inline-block;
    letter-spacing: normal;
    margin-right: 6px;
    text-transform: none;
  }

  div:first-child {
    display: flex;
    flex-direction: row;
    position: relative;
  }
   
  input {
    height: 24px;
    width: 24px;
    opacity: 1.5;
  }

  label {
  flex: 1 1;
  margin: 0;
  padding-left: 11px;
  padding-top: 4px;
  position: relative;
  cursor: pointer;
  touch-action: manipulation;    
  }

  fieldset + fieldset {
    margin-top: 10px;
  }
`;

export const SpecialInstructions = styled.div`
  margin-top: 30px;
  display: block;
  ::before {
    padding-top: 21px;
    background-image: linear-gradient(90deg,#ccc 25%,hsla(0,0%,80%,0) 0,hsla(0,0%,80%,0));
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: 4px 1px;
    content: "";
    display: block;
    height: 1px;
    position: relative;
    }

  ::after {
    padding-top: 6px;
    background-image: linear-gradient(90deg,#ccc 25%,hsla(0,0%,80%,0) 0,hsla(0,0%,80%,0));
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: 4px 1px;
    content: "";
    display: block;
    height: 1px;
    position: relative;
    margin-top: 30px
  }

    label {
      display: inline-block;
      margin: 0 0 26px; 
      padding: 0;
    }

    textarea {
      height: auto;
      resize: vertical;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: none;
      color: #2d3c48;
      display: block;
      padding: 10px 14px;
      transition: background-color .15s ease;
      width: 100%;
    }
`;

export const AddToCartButton = styled.div`
  margin: 30px 0 5px;

  &&& button {
    background-color:var(--rust);
    min-width: 200px;
    width: 100%;
    margin: 0;
    border: none;
    border-radius: 4px;
    color: var(--lightorange);
    cursor: pointer;
    max-width: 100%;
    white-space: nowrap;
    line-height: 40px;
    padding: 0 15px;
  }

  p {
    text-align: center;
  }

`;
