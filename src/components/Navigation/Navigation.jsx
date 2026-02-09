// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import './Navigation.css';
import NavigationList from "./NavigationList";
import SocialList from './SocialList';

export default function Navigation({ onToggleMenu }) {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='navigation-block'>
      <button onClick={onToggleMenu} className='nav-close-btn'>
        <img src="/images/icons/close-icon.svg" alt="close menu" />
      </button>
      <nav onClick={onToggleMenu} className="main-navigation">
        <NavigationList />
        <SocialList />
      </nav>
    </motion.div>
  )
}
