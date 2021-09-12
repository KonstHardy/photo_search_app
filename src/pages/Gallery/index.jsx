import React from 'react';

import { Search } from '../../components/Search';
import { PhotoList } from '../../components/PhotoList';

export function Gallery() {
  return (
    <>
      <Search />
      <PhotoList />
    </>
  );
}
