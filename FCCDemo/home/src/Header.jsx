import React from 'react';
import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="p-5 bg-blue-800 text-white text-3xl font-bold">
      <div className='flex'>
        <div className='flex-grow'>
          <Link to="/">
            Annoying shop
          </Link>
          |
          <Link to="/cart">
            Cart
          </Link>
        </div>
        <div className='flex-end relative'>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
