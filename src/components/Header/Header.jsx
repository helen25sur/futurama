import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import './Header.css';
import Logo from '../Logo/Logo';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(prev => !prev);
  }

  return (
    <header className="header">
      <Logo />
      <div className="video-icon">
        <button>
          <img src="/images/icons/trailing-icon.svg" alt="logo" />
        </button>
      </div>
      <div className="burger-icon">
        <button onClick={toggleMenu}>
          <img src="/images/icons/burger-icon.svg" alt="logo" />
        </button>
      </div>
      {isOpenMenu && <Navigation onToggleMenu={toggleMenu} />}
    </header>
  )
}
