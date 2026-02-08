import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(prev => !prev);
  }

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-icon" src="/images/icons/leading-icon.svg" alt="logo" />
        <h2 className="header-title">Футурама&nbsp;фан</h2>
      </div>
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
