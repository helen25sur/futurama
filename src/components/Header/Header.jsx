import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/icons/leading-icon.svg" alt="logo" />
        <h2 className="header-title">Futurama Fan</h2>
      </div>
      <div className="video-icon">
        <button>
          <img src="/images/icons/trailing-icon.svg" alt="logo" />
        </button>
      </div>
      <div className="burger-icon">
        <button>
          <img src="/images/icons/burger-icon.svg" alt="logo" />
        </button>
      </div>
    </header>
  )
}
