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
      <div className="video-icon-block">
        <a className='video-link' href="#episodes">
          <img className='video-icon' src="/images/icons/trailing-icon.svg" alt="episodes" />
        </a>
      </div>
      <div className="burger-icon-block">
        <button className='burger-btn' onClick={toggleMenu}>
          <img className='burger-icon' src="/images/icons/burger-icon.svg" alt="logo" />
        </button>
      </div>
      {isOpenMenu && <Navigation onToggleMenu={toggleMenu} />}
    </header>
  )
}
