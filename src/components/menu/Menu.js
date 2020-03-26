import React from 'react';
import { MenuItem } from './MenuItem';
import { ContentWrapper } from './Menu.styled';
import { menuItems } from '../../menu';

export const Menu = () => {
  const menu = menuItems.map(item  => {
    return (
      <MenuItem key={item.id} item={item} />
    );
  });

  return (
    <ContentWrapper className="content_wrapper">
      {menu}
    </ContentWrapper>
  );
};


