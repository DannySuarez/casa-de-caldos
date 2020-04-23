import React from 'react';
import { FooterWrapper } from './Footer.styled';

export const Footer = () => {
  const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=954+N+Pacific+Hwy,+Woodburn,+OR+97071&travelmode=driving';

  return (
    <FooterWrapper>
      <div>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Directions</a>
        <span>|</span>
        <a href="tel:5039020664">Phone</a>
      </div>
      <figure>
        <img 
          src="https://res.cloudinary.com/thecodehouse/image/upload/c_scale,q_80,w_98/v1586966337/casa-de-caldos/mainLogo_1_i169yo.png" />
      </figure>
    </FooterWrapper>
  );
};
