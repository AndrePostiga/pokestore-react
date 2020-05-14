import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Navigation } from './style';

export default function Header() {
  return (
    <Navigation>
      <button type="button">
        <MdSearch size={36} color="#FFF" />
      </button>
      <input type="text" placeholder="Pesquisar..." />
    </Navigation>
  );
}
