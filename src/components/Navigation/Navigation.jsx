import './Navigation.css';
import NavigationList from "./NavigationList";
import SocialList from './SocialList';

export default function Navigation({ onToggleMenu }) {
  return (
    <div className='navigation-block'>
      <button onClick={onToggleMenu} className='nav-close-btn'>
        <img src="/images/icons/close-icon.svg" alt="close menu" />
      </button>
      <nav onClick={onToggleMenu} className="main-navigation">
        <NavigationList />
        <SocialList />
      </nav>
    </div>

  )
}
