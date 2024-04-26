import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import { Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuPaths = [ '/about', '/certificates', '/services', '/projects', '/contact', '/skills'];

  const shouldShowMenu = showMenuPaths.includes(location.pathname);

  if (shouldShowMenu !== showMenu) {
    setShowMenu(shouldShowMenu);
  }

  return (
    <>
      {showMenu && <Menu />}
      {showMenu || <Home />}
      <Outlet />
    </>
  );
};

export default App;