import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 102.5%;
  margin-left: -2.5%;

  .cell,
  [class*=cell] {
    display: inline-block;
    box-sizing: border-box;
    margin-left: 2.5%;
    margin-right: 0;
    vertical-align: top;
    letter-spacing: normal;
    word-spacing: normal;
  }

  .media {
    margin-bottom: 1em;
  }

  .cell--1-2 {
    width: 47.5%;
  }

`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  .menu_item {
    display: flex;
    flex-direction: column;
  }

  .product {
    margin: auto;
    border-radius: 2px;
    max-width:100%;
  }

  .product_price {
    order: 2;
    margin-top: 0px;
    margin-bottom: .5em;
    padding: .5em;
    display: block;
    font-size: 1.125rem;
    border-radius: .1875rem;
    background-color: transparent;
    text-align: center;
    border: 2px solid #b03a0c;
    line-height: 1;
    color: #b03a0c;
  }

  .product_description {
    margin-top: auto;
    margin-bottom: .5em;
    color: #b03a0c;
  }

  div {
    display: block;
    margin-bottom: .5em;
    border-radius: 3px;
    overflow: hidden;
  }

  button {
    order: 2;
    margin-top: auto;
    margin-bottom: .5em;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: .027em;
    background-color: #b03a0c;
    border: 0;
    border-radius: .1875rem;
    padding: 0.5em;
    cursor: pointer;
    color: #fdb641;
  }

  h3 {
    margin: 0 0 .5em;
    color: #b03a0c;
  }

`;
