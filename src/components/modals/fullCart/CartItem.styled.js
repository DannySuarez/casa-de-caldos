import styled from 'styled-components';

export const CartLineItem = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 16px 0;

  > div:first-child {
    min-width: 24px;
    padding: 1px 0;
    border-radius: 4px;
    text-align: center;
  }

  > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    flex: 1 1;

    > div:first-child {
      flex: 1 1;
      margin-left: 16px;
    }
  }

  h5 {
    line-height: 1.6;
  }

  ul {
    list-style-type: none;
    color: #949ba3;
    padding: 0;
    margin: -1px 0 0 0;
  }

  ul ~ div {
    margin-top: 4px;
  }

  a {
    margin-right: 32px;
  }

  button {
    background: none;
    height: auto;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  p {
    margin-right: 5px;
  }
`;
