import CharacterCard from './CharacterCard';
import './Characters.css';

const characters = [
  {
    id: 1,
    name: 'Філіп Джей Фрай',
    description: 'Відомий як Фрай, народився 14 серпня 1974 року — головний персонаж, який заморозив себе в кріогенній камері за кілька секунд до 2000 року. Розморозився наприкінці 2999 року і надалі став кур\'єром у компанії «Міжпланетний Експрес».',
    image: '/images/characters/jey-fry.png',
    link: '#',
  },
  {
    id: 2,
    name: 'Туранга Ліла',
    description: 'Є капітаном корабля Planet Express, cтверджує, що є єдиним представником інопланетної раси на Землі, але насправді Ліла мутант, якого в самому ранньому дитинстві підкинули в у притулок.',
    image: '/images/characters/leela.png',
    link: '#',
  },
];

export default function Characters() {
  return (
    <section className="characters" id="characters">
      <div className="container">
        <h2 className="section-subtitle">
          <img src="/images/icons/passports-icon.svg" alt="Персонажі" />
          <span>Персонажі</span>
        </h2>
        <ul className="characters-list">
          {characters.map(character => (
            <CharacterCard key={character.id} item={character} />
          ))}

        </ul>
      </div>

    </section>
  )
}
