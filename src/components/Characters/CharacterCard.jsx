import MoreButton from "../MoreButton/MoreButton";

export default function CharacterCard({ item }) {
  return (
    <li className="character-card">
      <div className="character-image-block">
        <img className="character-image" src={item.image} alt={item.name} />
      </div>

      <div className="character-content" data-augmented-ui="border bl-clip br-2-clip-x both">
        <h3 className="character-name">{item.name}</h3>
        <p className="character-description">{item.description}</p>
        <MoreButton classNames={'character-more'} link={item.link} text={'Дізнатись більше'} />
      </div>
    </li>
  )
}
