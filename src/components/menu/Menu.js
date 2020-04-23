import React from 'react';
import { ContentWrapper } from './Menu.styled';
import { MenuItem } from './MenuItem';
import { menuItems } from '../../menu';

export const Menu = () => {
  const menu = menuItems.map(item => {
    return (
      <MenuItem key={item.id} item={item} />
    );
  });

  return (
    <ContentWrapper>
      {menu}
    </ContentWrapper>
  );
};
