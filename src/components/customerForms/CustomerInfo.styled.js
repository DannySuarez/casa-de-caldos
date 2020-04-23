import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--lightborange);
  border: 1px solid rgba(85,85,85,.2);
  overflow: hidden;
  border-radius: 3px;
  white-space: normal;
  text-align: center;

  h2 {
    background-color: var(--rust);
    margin-top: 0;
    color: white;
  }

  p {
    color: var(--rust);
  }

  form {
    padding: 0 .83em .83em;
  }

  label {
    width: 37.5%;
    text-align: right;
    margin-bottom: 0;
    display: inline-block;
  }

  input {
    width: 30.5%;
    margin-left: 2.5%;
  }

  i {
      padding-right: .25em;
    }
  
  input[type=email],
  input[type=tel],
  input[type=text] {
    max-width: 100%;
    min-height: 1.8em;
    padding: 1px 0 1px 6px;
    border: 1px solid #aaa;
    line-height: 1.5;
    color: #333;
    font-size: 16px;
  }

  button {
    border: none;
    color: #fff;
    height: 40px;
    text-align: center;
    outline: none;
    border-radius: 4px;
    width: 100px;
    max-width: 100%;
    cursor: pointer;
    background-color: var(--rust);
  }

  @media (max-width: 641px) {
    label {
      width: 97.5%;
      text-align: left;
    }

    input {
      width: 97.5%;
      margin-bottom: .833333333em;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: .833333333em;
`;
