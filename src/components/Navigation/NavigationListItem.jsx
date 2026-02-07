export default function NavigationListItem({ item }) {
  return (
    <li className="nav-item">
      <a href={item.link} className="nav-link">
        <img src={item.icon} alt={item.title} />
        <span>{item.title}</span>
      </a>
    </li>
  )
}
