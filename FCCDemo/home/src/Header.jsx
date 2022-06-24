import React from 'react';

const Header = ({app}) => {
  return (
    <div className="p-5 bg-blue-800 text-white text-3xl font-bold">
      Fidget Spinner World | {app.name}
    </div>
  );
};

export default Header;
