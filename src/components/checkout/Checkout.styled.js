import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 479px),
  screen and (min-width: 480px) and (max-width: 599px),
  screen and (min-width: 600px) and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width:479px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .content {
    @media screen and (max-width: 479px),
    screen and (min-width: 480px) and (max-width: 599px),
    screen and (min-width: 600px) and (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
    }

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .checkout-page-overview {
    order: 1;

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      vertical-align:top;
      margin-left:20px;
      margin-right:20px;
      width:328px
    }

    @media screen and (max-width: 479px) {
      flex: 1 1 auto;
      width: 100%;
    }
  }

  .cart-overview-content {
    padding-bottom: 25px;
  }

  .cart-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .merchant {
    margin-bottom: 24px;
  }

  .cart-item > :first-child {
    flex: 1 1;
  }

  .cart-items:before {
    content: "";
    border-bottom: 1px solid var(--rust);
    display: block;
    margin: 16px 0;
  }

  .overview:before {
    border-top: 1px solid var(--rust);
    content: "";
    display: block;
    position: relative;
    margin: 15px 0;
    width: 100%;
  }

  .overview-item {
    min-height: 24px;
  }

  .checkout-page-details {
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      margin-left: 20px;
      margin-right: 20px;
      width: 500px;
    }

    @media screen and (max-width: 479px) {
    flex: 1 1;
    width: 100%;
    }
  }
  
  .checkout-actions {
    display: flex;
    align-items: center;
    margin-top: 40px;
    border-top: 1px solid var(--rust);
    padding-top: 30px;
    justify-content: center;

    @media screen and (max-width: 479px),
    screen and (min-width: 768px) and (max-width:n1023px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media screen and (max-width: 479px),
    screen and (min-width: 480px) and (max-width: 599px),
    screen and (min-width: 600px) and (max-width: 767px) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--lightborange);
      z-index: 4;
      padding: 20px;
    }
  }

  .checkout-actions-order-button {
    @media screen and (max-width: 479px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 20px;
    }

    @media screen and (max-width: 479px),
    screen and (min-width: 768px) and (max-width: 1023px) {
      flex: 1 1 100%;
      margin-bottom: 10px;
      order: -1;
    }

    button {
      margin-top: 10px;
    }
  }

  .button {
    border: none;
    color: #fff;
    height: 40px;
    text-align: center;
    outline: none;
    border-radius: 4px;
    min-width: 200px;
    width: 100%;
    cursor: pointer;
  }

  .button-active {
    background-color: var(--rust);
  }

  .button[disabled] {
    opacity: .405;
    cursor: not-allowed;
  }
`;
