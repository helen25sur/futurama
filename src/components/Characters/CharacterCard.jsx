export default function CharacterCard({ item }) {
  return (
    <li className="character-card">
      <div className="character-image-block">
        <img className="character-image" src={item.image} alt={item.name} />
      </div>

      <div className="character-content">
        <h3 className="character-name">{item.name}</h3>
        <p className="character-description">{item.description}</p>
        <a className='character-more' href={item.link}>Дізнатись більше
          <img className="" src="/images/icons/icon-right.svg" alt="Дізнатись більше" />
        </a>
      </div>
    </li>
  )
}
