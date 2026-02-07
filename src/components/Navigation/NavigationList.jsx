import NavigationListItem from "./NavigationListItem"

const NavData = [
  {
    id: 1,
    title: 'Персонажі',
    icon: '/images/icons/idcard.svg',
    link: '#characters'
  },
  {
    id: 2,
    title: 'Трейлери',
    icon: '/images/icons/video-camera.svg',
    link: '#trailers'
  },
  {
    id: 3,
    title: 'Галерея',
    icon: '/images/icons/picture.svg',
    link: '#gallery'
  },
  {
    id: 4,
    title: 'Актори',
    icon: '/images/icons/contacts.svg',
    link: '#actors'
  },
  {
    id: 5,
    title: 'Сезони',
    icon: '/images/icons/book.svg',
    link: '#seasons'
  },
]

export default function NavigationList() {
  return (
    <ul className="nav-list">
      {NavData.map(item => (
        <NavigationListItem item={item} />
      ))}
    </ul>
  )
}
