import './Films.css';

export default function Films() {
  return (
    <section className="films" id="films">
      <div className="container">
        <h2 className="section-subtitle">
          <img src="/images/icons/laptop-icon.svg" alt="Серії фільми" />
          <span>Серії фільми</span>
        </h2>
        <ul className="films-list">
          <li
            className="films-item"
            data-augmented-ui="border bl-clip br-clip-y tr-clip-y both">
            <img width={240} height={360} src="/images/films/film-1.png" alt="Великий куш Бендера" />
          </li>
          <li className="films-item" data-augmented-ui="border">
            <img width={240} height={360} src="/images/films/film-2.png" alt="Film 2" />
          </li>

        </ul>
        <a className='all-films-btn' href="#">Дивитись
          <img className="" src="/images/icons/icon-right.svg" alt="Дивитись" />
        </a>
      </div>

    </section>
  )
}
