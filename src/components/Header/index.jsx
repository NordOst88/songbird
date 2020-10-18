import React from 'react';

import TopPanel from '../TopPanel';
import Pagination from '../Pagination';

import './style.scss';

const Header = () => (
  <div className="header d-flex">
    <TopPanel />
    <Pagination />
  </div>
);

export default Header;
