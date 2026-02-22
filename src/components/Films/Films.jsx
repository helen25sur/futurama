import MoreButton from '../MoreButton/MoreButton';
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
        <ul className='breadcrumbs'>
          <li>
            <div className='breadcrumbs-item active'></div>
          </li>
          <li>
            <div className='breadcrumbs-item'></div>
          </li>
          <li>
            <div className='breadcrumbs-item'></div>
          </li>
          <li>
            <div className='breadcrumbs-item'></div>
          </li>
        </ul>
        <div className="films-content" data-augmented-ui="border bl-clip br-2-clip-x both">
          <h3 className="film-name">Великий куш Бендера</h3>
          <p className="film-description">Фрай виявляє у себе татуювання. Саме воно може спричинити наслідки всесвітнього маштабу. Гермес втрачає голову під час гри в лімбо, а свідомість Бендера потрапляє під контроль нових господарів Міжпланетного Експресу. Ліла тим часом зустрічає чоловіка своєї мрії.</p>
          <MoreButton classNames={'all-films-btn'} link={'#'} text={'Дивитись'} />
        </div>
      </div>

    </section>
  )
}
