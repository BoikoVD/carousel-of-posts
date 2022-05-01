import React from 'react';
import { Button } from 'antd';
import Search from '../Search/Search';
import './Header.css';

function Header({ showModal, goToSlide }) {

  return (
    <header className='header'>
      <div className='logo'>Open<span>Post</span></div>
      <Search goToSlide={goToSlide} />
      <Button size='large' className='button' type='primary' onClick={showModal}>Add post</Button>
    </header>
  );
}

export default Header;