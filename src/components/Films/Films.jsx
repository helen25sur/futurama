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
            data-augmented-ui="border tr-clip-y br-clip-y bl-clip">
            <img width={240} height={360} src="/images/films/film-1.png" alt="Великий куш Бендера" />
          </li>
          <li className="films-item" data-augmented-ui="border tr-clip-y br-clip-y l-clip-y">
            <img width={240} height={360} src="/images/films/film-2.png" alt="Film 2" />
          </li>
          <li
            className="films-item"
            data-augmented-ui="border br-clip-y l-clip-y tr-clip-y br-clip-y">
            <img width={240} height={360} src="/images/films/film-3.png" alt="Film 3" />
          </li>
          <li className="films-item" data-augmented-ui="border tr-clip l-clip-y">
            <img width={240} height={360} src="/images/films/film-4.png" alt="Film 4" />
          </li>
        </ul>
        <a className='all-films-btn' href="#">Дивитись
          <img className="" src="/images/icons/icon-right.svg" alt="Дивитись" />
        </a>
      </div>

    </section>
  )
}
