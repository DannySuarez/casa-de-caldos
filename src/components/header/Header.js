import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>Casa De Caldos</h1>
      </Link>
      <details open>
        <summary>
          Online Ordering Info:
        </summary>
        <p>Welcome to our online ordering app!</p>
        <p>
          We are currently only taking payments in store so please come prepared.
        </p>
      </details>
    </HeaderWrapper>
  );
};
