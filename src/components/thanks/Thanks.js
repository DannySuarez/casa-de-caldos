import React from 'react';
import styled from 'styled-components';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export const Thanks = () => {
  return (
    <>
      <Header />
      <Section>
        <h2>Thank you for your order!</h2>
        <h3>A few things to note:</h3>
        <ul>
          <li><span>
            Orders can take up 20 minutes to prepare.
          </span>
          </li>
          <li>You can purchase drinks when picking up your food.</li>
          <li>We will contact you at the number provided if there are any issues with your order.</li>
        </ul>
      </Section>
      <Footer />
    </>
  );
};

export const Section = styled.section`
  text-align: center;
  p {
    margin: 3px;
  }

  ul {
    padding: 0;
    margin-top: 5px;
    list-style-position: inside;
  }
`;
