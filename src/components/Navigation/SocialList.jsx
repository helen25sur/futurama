const socialLinks = [
  {
    id: 1,
    name: 'h',
    icon: '/images/icons/h-icon.svg',
    link: 'https://www.hulu.com/futurama'
  },
  {
    id: 2,
    name: 'youtube',
    icon: '/images/icons/youtube-icon.svg',
    link: 'https://www.youtube.com/'
  },
  {
    id: 3,
    name: 'facebook',
    icon: '/images/icons/fb-icon.svg',
    link: 'https://facebook.com/'
  },
  {
    id: 4,
    name: 'instagram',
    icon: '/images/icons/inst-icon.svg',
    link: 'https://www.instagram.com/'
  },
]

export default function SocialList() {
  return (
    <ul className="social-list">
      {socialLinks.map(link => (
        <li key={link.id} className="social-item">
          <a href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn">
            <img className="social-icon" src={link.icon} alt={link.name} />
          </a>
        </li>
      ))}
    </ul>
  )
}
